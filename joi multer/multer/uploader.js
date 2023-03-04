// first require/import it
const multer = require('multer');

//creating function
const uploader = multer({
// create destination directory where you want to upload  gineraaly in publish folder
    dest: "/public"
})


// now where we want to upload we use uploader as middleware 
// for for register page
// app.post('/register', uploader.single("image"), function)
// app.post('/register', uploader.array("image"), function)


// file validation

const imageFilter = (req, file, next) => {
    let allowed = ["jpg", "png", "jpeg", "gif", "bmp", "webp", "svg"];
    let fileparts = file.originalname.split(".");
    let ext = fileparts.pop();

    if(allowed.includes(ext.toLowerCase())){
        next(null, true)
    } else{
        next({error: 400, msg: "image format not allowed"})
    }
}
