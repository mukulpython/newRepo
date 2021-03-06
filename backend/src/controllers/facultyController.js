const userModel = require("../models/facultyModel");
const bcrypt = require("bcrypt");
class User {
  constructor() {
    return {
      registerUser: this.registerUser.bind(this),
      login: this.login.bind(this),
    };
  }

  /**
   * register user function
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns
   */
  async registerUser(req, res, next) {
    try {
        const checkUser = await userModel.findOne({ email: req.body.email });
        if (checkUser) {
          return res.json({ message: "User already exist!!" });
        }
        let bodyData = req.body.data ? JSON.parse(req.body.data) : req.body;
        console.log(bodyData);
        const userData = {
          first_name: bodyData.first_name,
          last_name: bodyData.last_name,
          email: bodyData.email,
          password: bodyData.password,
          mobile: bodyData.mobile,
          branch: bodyData.branch
        }
  
      const result = await userModel.create(userData);
      return res.json({
        message: "user register successfully!!",
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

  /**
   * login function
   * @param {*} req
   * @param {*} res
   * @param {*} nex
   * @returns
   */
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const checkUser = await userModel.findOne({ email: email });
      if (!checkUser) {
        return res.json({ message: "Invalid User!!" });
      }
      const passwordCheck = await bcrypt.compare(password, checkUser.password);
      if (!passwordCheck) {
        return res.json({ message: "Incorrect email or password!!" });
      }
      delete checkUser.password;
      return res.json({
        message: "login successfully!!",
        code: 200,
        data: checkUser,
      });
    } catch (e) {
      return res.json({
        message: "something went wrong!!",
        status: 500,
        data: [],
      });
    }
  }
}
module.exports = new User();
