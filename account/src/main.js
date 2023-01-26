import swaggerUi from "swagger-ui-express";
import apiDocs from './api-docs.json' assert {type: "json"};
import { app } from "./app.js";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

app.listen(process.env.PORT, function () {
  console.log("running");
});
