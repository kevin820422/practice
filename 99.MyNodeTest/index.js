import express from "express";
import corsPrefetch from "cors-prefetch-middleware";
import imagesUpload from "images-upload-middleware";

const app = express();

app.use("/static", express.static("public"));

app.use(corsPrefetch);

app.get('/',(req,res)=>{
  res.send('HI')
})
// app.post(
//   "/multiple",
//   imagesUpload(
//     "./public/multipleFiles",
//     "http://localhost:9090/static/multipleFiles",
//     true
//   )
// );


app.listen(9090, () => {
  console.log("Listen: 9090");
});
