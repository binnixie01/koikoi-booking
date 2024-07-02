import mongoose,{Schema} from "mongoose";

const TicketSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true,
    },
    qty:{
        type:Number,
        required:true,
    },
    createdAt:{
        type: Date,
    default: Date.now,
    }
})

const TicketModel=mongoose.models.Ticket||mongoose.model("Ticket", TicketSchema);
export default TicketModel