const express = require("express");
const route = express.Router();
const user = require("../model/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authentication = require("../middleware/Authentication");

route.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashing = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashing;
    // console.log(req.body.password);

    const userexits = await user.findOne({ email: req.body.email });
    if (userexits) {
      return res.send({
        success: false,
        message: "user already exits",
      });
    }

    const userinfo = await new user(req.body);

    await userinfo.save();

    res.send({
      success: true,
      message: "user successfully created",
    });
  } catch (e) {
    console.log(e, "error occur");
  }
});

route.post("/login", async (req, res) => {
  try {
    const loginuser = await user.findOne({ email: req.body.email });
    if (!loginuser) {
      return res.send({
        success: false,
        message: "user does not exit",
      });
    }

    const validpass = await bcrypt.compare(
      req.body.password,
      loginuser.password
    );

    if (!validpass) {
      return res.send({
        success: false,
        message: "invalid password",
      });
    }

    const token = jwt.sign(
      { userid: loginuser._id },
      process.env.jwt_secretkey,
      {
        expiresIn: "1d",
      }
    );

    res.send({
      success: true,
      message: "your loggin succeessfully",
      data: token,
    });
  } catch (err) {
    console.log(err, "error occures");
  }
});

route.get("/getcurrentuser", Authentication, async (req, res) => {
  try {
    console.log(req.body.userid);
    const currentuser = await user
      .findById(req.body.userid)
      .select("-password");
    res.send({
      message: "detail fetched",
      success: true,
      data: currentuser,
    });
  } catch (err) {
    res.send({
      message: "no detail fetched",
      success: false,
    });
  }
});

module.exports = route;
