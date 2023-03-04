const registerUser = (req, res, next) => {
  let data = req.body;
  
  if(data){
     data.img = req.file.originalname
    console.log(data);
     
  }
  res.json({
    result: data,
    status: true,
    msg: "registration successful",
  });
};

exports.registerUser = registerUser;