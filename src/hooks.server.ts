import mongoose from "mongoose";
import { PUBLIC_MONGODB_URL } from "$env/static/public"; 

mongoose.connect(PUBLIC_MONGODB_URL)
    .then(() => {
        console.log("connected to mongodb")
    })