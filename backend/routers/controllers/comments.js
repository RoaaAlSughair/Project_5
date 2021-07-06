const connection = require("../../db/db");

const Comments = (req,res)=>{
    const {comment ,book_id,commenter_id }=req.body;

    const data = [comment ,book_id,commenter_id ];
    const query = `INSERT INTO comments (comment ,book_id,commenter_id) VALUES (?, ?, ?)`;
    connection.query(query,data,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json('Added successfully')
    })
}

module.exports={Comments}