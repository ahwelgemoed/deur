-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "clubId" INTEGER NOT NULL,
    "isAllowed" BOOLEAN NOT NULL DEFAULT false
);
