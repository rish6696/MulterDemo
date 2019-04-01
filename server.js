const express=require('express');
const multer=require('multer');

const app=express();
const PORT=process.env.PORT||1478
app.use('/',express.static(__dirname+'/public'));
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    req.file.path=req.file.originalname;
    console.log(req.file);
    res.send(req.file)
  })

  app.get('/getprofile',(req,res)=>{
      res.sendFile(__dirname+'/uploads/finalresumae.jpg');
  })

  app.get('/pdf',(req,res)=>{
    res.sendFile(__dirname+'/uploads/finalresumae.pdf');
})
app.get('/mm',(req,res)=>{
  res.sendFile(__dirname+'/uploads/rajanresume.jpg');
})


app.listen(PORT);
