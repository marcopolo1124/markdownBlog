import mongoose from "mongoose";
import slugify from "slugify";

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    markdown: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    creatorUsername: {type: String, default: "marco"},
    slug: {
        type: String,
        required: true,
        unique: true
    },
    access: {type: String}
})

articleSchema.pre("validate", function (next) {
    if (this.title) {
        this.slug = slugify(`${this.creatorUsername} ${this.title}`, { lower: true, strict: true });
    } else{
        throw Error("title is not defined")
    }

    next();
});

export default mongoose.model("Article", articleSchema);
