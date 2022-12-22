import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes.js";
import apiDocs from './api-docs.json' assert {type: "json"};

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

app.use(express.json());
app.use(router);

app.get("/terms", (req, res) =>{
  return res.json({
    message: "termos de serviço"
  })
})

app.use("/accountsV1", router)

app.listen(3000, function () {
  console.log("running");
});
