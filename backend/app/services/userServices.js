// this is basic to make sue of validation
// but we have package known as JOI for validation
// so we are using joi package in userService.js file


const userService = () => {
    validateUser = (data) => {
        let msg = {};
        if(!data.username){
            msg["username"] = "Username must be provided"
        }
        if(!data.password){
            msg["password"] = "Password must be provided"
        }
        if(!data.email){
            msg["email"] = "Email must be provided"
        }
        if(!data.phoneNumber){
            msg["phoneNumber"] = "Phone number must be provided"
        }
    }
}

module.exports = userService;