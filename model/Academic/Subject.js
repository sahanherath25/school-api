const mongoose = require("mongoose")
const Schema = mongoose.Schema


const SubjectSchema = new Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        teachers: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
        },
        academicTerm: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required:true
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required:true
        },
        duration:{
            type:String,
            required:true,
            default:"3 Months"
        }
    },
    {
        timestamps: true
    }
)

const Subject = mongoose.model("Subject", SubjectSchema)

module.exports = Subject