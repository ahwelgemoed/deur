import { Kiosk } from "@prisma/client";
import { prisma } from "../initPrisma";

export const setKioskOnlineStatus = async (
  kioskId: string,
  country: string,
  status: boolean
) => {
  await prisma.kiosk.upsert({
    where: {
      kioskId: kioskId,
    },
    update: {
      lastOnline: new Date(),
      isOnline: status,
    },
    create: {
      kioskId: kioskId,
      country: country,
      kioskName: kioskId,
      lastOnline: new Date(),
      isOnline: status,
    },
  });
};
export const setKioskHeartBeat = async (kioskId: string, country: string) => {
  await prisma.kiosk.update({
    where: {
      kioskId: kioskId,
    },
    data: {
      lastHeartbeat: new Date(),
    },
  });
};
export const getAllKiosks = async (): Promise<Kiosk[]> => {
  const allKiosks = await prisma.kiosk.findMany();
  return allKiosks;
};
