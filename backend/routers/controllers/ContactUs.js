const connection = require("../../db/db");

const ContactUs = (req,res)=>{
    const {fullName ,email,message }=req.body;

    const data = [fullName ,email,message ];
    const query = `INSERT INTO contact (fullName ,email,message) VALUES (?, ?, ?)`;
    connection.query(query,data,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json('Added successfully')
    })
}

module.exports={ContactUs}