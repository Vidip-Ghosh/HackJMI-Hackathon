const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(fileUpload());

app.post("/extract-text", (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400);
    res.end();
  }

  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
