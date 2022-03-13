import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    author: String,
    tags: [String],
    img: String,
    timeStamp: {
        type: Date,
        default: new Date()
    }
});

const PostModel = mongoose.model("PostModel", postSchema)

export default PostModel