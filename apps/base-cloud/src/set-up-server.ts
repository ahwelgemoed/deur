import Fastify from "fastify";
import * as dotenv from "dotenv";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "@deur/cloud-prisma-db";
import autoload from "@fastify/autoload";
import path from "path";
import cors from "@fastify/cors";
import type { FastifySwaggerOptions } from "@fastify/swagger";
import type { FastifyRedis } from "@fastify/redis";

const PORT = 3030;

dotenv.config();

const prisma = new PrismaClient();

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  credentials: true,
  origin: "*",
});

fastify.register(require("@fastify/redis"), { host: "127.0.0.1" });

fastify.register(require("@fastify/swagger"), {
  swagger: {
    info: {
      title: "Test swagger",
      description: "testing the fastify swagger api",
      version: "0.1.0",
    },
  },
});
fastify.register(require("@fastify/swagger-ui"), {
  routePrefix: "/swagger",

  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    // onRequest: funcxtion (request:any, reply, next) { next() },
    // preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  // transformStaticCSP: (header) => header,
  // transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
  transformSpecificationClone: true,
});
fastify.register(autoload, {
  dir: path.join(__dirname, "./routes"),
  options: { prefix: "v1" },
});

const start = async () => {
  try {
    await fastify.ready();
    await fastify.listen({ port: PORT, host: "0.0.0.0" });
    fastify.swagger();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

export { prisma, start };
