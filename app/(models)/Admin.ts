import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URL as string);
mongoose.Promise = global.Promise

const adminSchema = new Schema({
    email: String,
    password: String
})

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema)
export default Admin;