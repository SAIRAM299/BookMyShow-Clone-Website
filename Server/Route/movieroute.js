const express = require("express");
const route = express.Router();
const movie = require("../model/moviemodel");


route.post("/addmovie", async (req, res) => {
    try {
      const movieinfo = await new movie(req.body);
  
      await movieinfo.save();
  
      res.send({
        success: true,
        message: "user successfully created",
      });
    } catch (e) {
      console.log(e, "error occur");
    }
  });

  route.get("/getgivenmovie",async (req, res) => {
    try {
      const moviedata = await movie.find()
      
      res.send({
        message: "movie detail fetched",
        success: true,
        data: moviedata,
      });
    } catch (err) {
      res.send({
        message: "no movie detail fetched",
        success: false,
      });
    }
  });

  route.post("/deletemovie",  async (req, res) => {
    try {
      await movie.findByIdAndDelete(req.body.movieid);
  
      res.send({
        success: true,
        message: "Movie deleted successfully",
      });
    } catch (err) {
      res.send({
        success: false,
        message: "Movie went something wrong",
      });
  
      console.log(err, "error");
    }
  });

  route.post("/editmovie",  async (req, res) => {
    try {
      await movie.findByIdAndUpdate(req.body.movieid, req.body);
  
      res.send({
        success: true,
        message: "Movie updated successfully",
      });
    } catch (err) {
      res.send({
        success: false,
        message: "Movie went something wrong",
      });
  
      console.log(err, "error");
    }
  });

  module.exports = route;