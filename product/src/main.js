import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./api-docs.json" assert {type: "json"}
import client from "./repositories/connectiondb.js";
import { app } from "./app.js";


app.use("/api-docs",swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.listen(3001, function () {
  console.log("running");
  client.authenticate().then(() => {
    console.log('DB Connected')
  }).catch((e) => {
    console.log('DB does not connected', e)
  }) 
});


