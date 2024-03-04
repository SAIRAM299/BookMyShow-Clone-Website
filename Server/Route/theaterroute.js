const express = require("express");
const route = express.Router();
const theater = require("../model/theatermodel");
const show = require("../model/showmodel");

route.post("/addtheater", async (req,res)=>{
    try{
        const newtheater= await new theater(req.body)
        await newtheater.save()
  
        res.send({
            message: "theater added",
            success: true,
          });
        }
         catch (err) {
          res.send({
            message: "no theater added",
            success: false,
          });
    }
})

route.post("/gettheaterbyowner", async (req,res)=>{
  try{
      const gettheater= await theater.find({owner:req.body.owner})

      res.send({
          message: "theater fetched successfully",
          success: true,
          data:gettheater
        });
      }
       catch (err) {
        res.send({
          message: "no theater found",
          success: false,
        });
  }
})

route.get("/getalltheater", async (req,res)=>{
  try {
    const theatre = await theater.find().populate("owner")

    console.log(theatre);
    res.send({
      success: true,
      message: "theatre found successfully",
      data: theatre,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theatre went  wrong",
    });
  }
});

route.post("/updatetheater", async (req, res) => {
  try {
    await theater.findByIdAndUpdate(req.body.theaterid, req.body);
    res.send({
      success: true,
      message: "theatre updated successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theatre went  wrong",
    });
  }
});


route.post("/deletetheater",async(res,req)=>{
  try{
    await theater.findByIdAndDelete(req.body.theaterid)
    res.send({
      success: true,
      message: "theatre deleted successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theatre delete went  wrong",
    });
  }
})

route.post("/edittheater",  async (req, res) => {
  try {
    await theater.findByIdAndUpdate(req.body.theaterid, req.body);

    res.send({
      success: true,
      message: "theater updated successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theater went something wrong",
    });

    console.log(err, "error");
  }
});




route.post("/addshow", async (req,res)=>{
  try{
      const newshow = await new show(req.body)
      await newshow.save()

      res.send({
          message: "show added",
          success: true,
        });
      }
       catch (err) {
        res.send({
          message: "no show added",
          success: false,
        });
  }
})



route.post("/getshowbytheater", async (req,res)=>{
  try{
      const getshow= await show.find({theater:req.body.theaterid})

      res.send({
          message: "show fetched successfully",
          success: true,
          data:getshow
        });
      }
       catch (err) {
        res.send({
          message: "no show found",
          success: false,
        });
  }
})

route.post("/deleteshow",async(res,req)=>{
  try{
    await show.findByIdAndDelete(req.body.showid)
    res.send({
      success: true,
      message: "show deleted successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "show delete went  wrong",
    });
  }
})

module.exports = route;