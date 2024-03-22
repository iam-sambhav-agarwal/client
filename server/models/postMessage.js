import mongoose, { Schema } from "mongoose";

const postSchema = mongoose.Schema({

    title: String,
    messsage: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMesssage = mongoose.model('PostMessage', postSchema)

export default PostMesssage  