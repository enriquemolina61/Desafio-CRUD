import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./database/routes/routes";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log(`${process.env.DATABASE_NAME} is running!`);
});
