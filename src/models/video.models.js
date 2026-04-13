import mongoose, {Schema} from "mongoose";
const VideoSchema = new Schema({
    videoFile:{
        type: String, //cloudnary url
        required: true,
    },
    thumbnail:{
        type: String, //cloudnary url
        required: true,
    },
    title:{
        type: String, 
        required: true,
    },
    decription:{
        type: String, 
        required: true,
    },
    views:{
        type: Number, 
        default:0,
    },
    duration:{
        type: Number, 
        required: true,
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref:"User",
    }
    },
    {timestamps:true}
)



export const Video = mongoose.model("Video", VideoSchema)