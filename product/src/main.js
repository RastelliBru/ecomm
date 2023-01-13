import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./router.js";
import swaggerDocs from "./api-docs.json" assert {type: "json"}
import client from "./repositories/connectiondb.js";

const app = express();

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))



app.use(express.json());

app.use(router);

app.listen(3001, function () {
  console.log("running");
  client.authenticate().then(() => {
    console.log('DB Connected')
  }).catch((e) => {
    console.log('DB does not connected', e)
  }) 
});

