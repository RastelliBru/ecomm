import swaggerExpress from "swagger-ui-express";
import { app } from "./app.js";
import yamljs from 'yamljs'

const swaggerDocs = yamljs.load('docs.yaml')
app.use("/api-docs",swaggerExpress.serve, swaggerExpress.setup(swaggerDocs))

app.listen(process.env.PORT, function () {
  console.log("running");
});
