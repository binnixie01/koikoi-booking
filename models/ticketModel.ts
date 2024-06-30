import mongoose,{Schema} from "mongoose";

export interface Ticket extends Document{
    email:string;
    place:string;
    qty:number;
    createdAt:Date;
}
const TicketSchema:Schema<Ticket>=new mongoose.Schema({
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

const TicketModel=mongoose.models.Ticket||mongoose.model<Ticket>("Ticket", TicketSchema);
export default TicketModel