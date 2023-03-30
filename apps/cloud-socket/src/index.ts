import { Server } from "socket.io";
import superjson from "superjson";

// import { ChangeEvent } from "mongodb";
import { Emitter } from "@socket.io/redis-emitter";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";
import {
  getAllKiosks,
  setKioskHeartBeat,
  setKioskOnlineStatus,
} from "./kiosk/tracKioskOnlinesatus";

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const redisClient = createClient({ url: "redis://localhost:6379" });
const subClient = redisClient.duplicate();
const emitter = new Emitter(redisClient);

const main = async () => {
  try {
    // await initPrisma();

    await Promise.all([redisClient.connect(), subClient.connect()]).then(() => {
      io.adapter(createAdapter(redisClient, subClient));
      io.listen(4001);
      console.log("Server is running on port 4001");
      console.log("Connected to MongoDB");
    });
    // io.use(function (socket, next) {
    //   const token = socket.handshake.query;
    //   console.log("ID Match:", token.clientId, socket.id);
    //   next();
    // });

    io.on("connection", (socket) => {
      const isAdmin = socket.handshake.query.isAdmin as string | undefined;
      const kioskId = socket.handshake.query.clientId as string | undefined;
      const kioskCountryId = socket.handshake.query.countryId as
        | string
        | undefined;
      if (kioskId && kioskCountryId) {
        setKioskOnlineStatus(kioskId, kioskCountryId, true);
      }

      if (isAdmin) {
        socket.join("ADMIN");
        emitter.to("ADMIN").emit("message", new Date().toString());
      }

      // SOCKET HeartBeat
      socket.on("heartbeat", () => {
        console.log("heartbeat");
        if (kioskId && kioskCountryId) {
          setKioskHeartBeat(kioskId, kioskCountryId);
        }
      });

      socket.on("disconnecting", () => {
        console.log("ALL ROOMS SOCET WAS IN", socket.rooms); // the Set contains at least the socket ID
        if (kioskId && kioskCountryId) {
          setKioskOnlineStatus(kioskId, kioskCountryId, false);
        }
      });

      socket.on("requestScreen", (data: string) => {
        emitter.to(data).emit("requestScreen", data);
      });
      socket.on("screenShotTaken", (data: string) => {
        console.log("requestScreen", data);
        const payLoad = {
          kioskId: kioskId,
          data,
        };
        emitter
          .to("ADMIN")
          .emit("screenShotTaken", superjson.stringify(payLoad));
      });

      socket.on("join-room", (room: string) => {
        room.split("/").forEach((section: string) => {
          console.log("room", room, section);
          socket.join(section);
        });
        if (room.includes("KIOSK")) {
        }
        console.log("join", room);
      });

      socket.on("disconnect", () => {
        console.log("🔥 DISCONNECTED socket", socket.id);
      });
    });

    setInterval(async () => {
      const allKiosks = await getAllKiosks();
      emitter.to("ADMIN").emit("allKiosks", JSON.stringify(allKiosks));
    }, 5000);

    // io.socketsJoin("room1");
    // setInterval(async () => {
    //   console.log("Emitting time");
    //   //   emitter.emit("time", new Date());
    //   //   emitter.to("FR").emit("message", new Date().toString());
    //   emitter.to("EN").emit("message", new Date().toString());
    //   //   const y = await io.in("room1").fetchSockets();
    //   console.log("io.sockets.adapter.rooms", io.sockets.adapter.rooms);
    //   console.log(
    //     "io.sockets.clients()",
    //     Object.keys(io.sockets.sockets).length
    //   );
    //   //   console.log("y", y);

    //   // const y = await prisma.kiosk.findMany();
    //   // console.log("y", y);
    // }, 2500);
  } catch (error) {
    console.log(error);
  }
};

main();
