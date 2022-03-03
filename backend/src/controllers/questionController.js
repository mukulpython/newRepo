const userModel = require("../models/studentModel");

class User {
  constructor() {
    return {
      questionUser: this.questionUser.bind(this),
    
    };
  }

 
  async questionUser(req, res, next) {
    try {
       
        let bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        console.log(bodyData);
        const questionData = {
          first_name: bodyData.first_name,
          last_name: bodyData.last_name,
          email: bodyData.email,
          password: bodyData.password,
          mobile: bodyData.mobile
        }
  
      const result = await userModel.create(questionData);
      return res.json({
        message: "Data save Successfully!!",
        status: 200,
        data: result,
      });
    } catch (e) {
        console.log(e);
      return res.json({
        message: "something went wrong!!",
        status: 500,
        data: [],
      });
    }
  }
}
module.exports = new User();
