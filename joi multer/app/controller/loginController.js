const loginUser = (req, res, next) => {
  let data = req.body;

  res.json({
    result: data,
    status: true,
    msg: "registration successful done!",
  });
};

exports.loginUser = loginUser;