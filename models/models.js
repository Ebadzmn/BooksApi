const mongoose = require ('mongoose')
const {Schema} = mongoose;


const PostSchema = new Schema (
    {
        title:{
            type : String,
            required: true,
        },
        author: {
            type: String,
            required: true,
         },
 
         description : {
             type : String
         },
 
         publishedYear : {
             type : String
         }
    },
    {timestamps : true , versionKey:false}
) ;



const Post = mongoose.model("Post", PostSchema);

module.exports = Post;