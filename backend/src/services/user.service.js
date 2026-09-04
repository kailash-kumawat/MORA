import prisma from "../db/index.js";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/index.js";

export const createUser = async ({ name, email, password }) => {
  const existingUser = await prisma.user.findFirst({
    where: {
      email: email,
    },
    select: { id: true },
  });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      created_at: true,
    },
  });
};
