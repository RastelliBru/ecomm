import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./router.js";
import swaggerDocs from "./api-docs.json" assert {type: "json"}

const app = express();

app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))



app.use(express.json());

app.use(router);


app.get("/terms", (req, res) => {
  return res.json ({
    message: "termos de serviço"
  })
})

app.listen(3001, function () {
  console.log("running");
});
