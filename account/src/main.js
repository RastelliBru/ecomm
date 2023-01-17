import swaggerUi from "swagger-ui-express";
import apiDocs from './api-docs.json' assert {type: "json"};
import { app } from "./app.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

//app.use("/accountsV1", router)

app.listen(3000, function () {
  console.log("running");
});
