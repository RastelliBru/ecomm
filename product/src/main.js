import swaggerExpress from "swagger-ui-express";
import client from "./repositories/connectiondb.js";
import  app  from "./app.js";
import yamljs from 'yamljs';

const swaggerDocs = yamljs.load('docs.yaml')
app.use("/api-docs",swaggerExpress.serve, swaggerExpress.setup(swaggerDocs))


app.listen(process.env.PORT, function () {
  console.log("running");
  client.authenticate().then(() => {
    console.log('DB Connected')
  }).catch((e) => {
    console.log('DB did not connect', e)
  }) 
});


