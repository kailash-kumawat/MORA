import { config } from "../config/env.config.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/index.js";

const adapter = new PrismaPg({ connectionString: config.dbUrl });
const prisma = new PrismaClient({ adapter });

export default prisma;
