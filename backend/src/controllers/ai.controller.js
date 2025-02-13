const aiService = require('../services/ai.service');


module.exports.aiResponse =  async (req, res) => {
    try{
     const code = req.body.code;
     if(!code) {
         return res.status(400).json({ message: "Code is required" });
     }
  

     const response = await aiService(code);
     console.log(response);
     return res.status(200).send(response);
     
     } catch (error) {
         console.log(error);
         return res.status(500).json({ message: error.message });
     }
};