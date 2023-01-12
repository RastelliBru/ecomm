import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./router.js";
import swaggerDocs from "./api-docs.json" assert {type: "json"}
import client from "./repositories/dabaseclient.js"

const app = express();

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(express.json());

app.use(router);

app.listen(3001, function () {
  console.log("running");
});

try {
  await client.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

