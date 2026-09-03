import { config } from "./src/config/env.config.js";
import prisma from "./src/db/index.js";
import app from "./app.js";

prisma
  .$connect()
  .then(() => {
    app.on("error", (error) => {
      console.log("Express app connection failed: ", error);
    });

    console.log("Database connected successfully!!");

    app.listen(config.port, () => {
      console.log(`Server is running at port ${config.port}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed: ", error);
  });

process.on("SIGINT", async () => {
  console.log("Server shutting down...");
  await prisma.$disconnect();
  console.log("Database disconnected");

  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Server terminated...");
  await prisma.$disconnect();
  console.log("Database disconnected");

  process.exit(0);
});
