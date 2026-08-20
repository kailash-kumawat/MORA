-- CreateEnum
CREATE TYPE "cadence_preference" AS ENUM ('daily', 'weekly', 'monthly');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profession" TEXT,
    "dob" TIMESTAMP(3),
    "preference" "cadence_preference" NOT NULL DEFAULT 'daily',
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "journal_pin" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
