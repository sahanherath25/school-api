const mongoose = require("mongoose")
const Schema = mongoose.Schema


const AcademicTermSchema = new Schema(
    {
        name: {
            type: String,
            required:true
        },
        description: {
            type: String,
            required:true
        },
        duration: {
            type: String,
            required: true,
            default: "3 Months"
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const AcademicTerm = mongoose.model("AcademicTerm", AcademicTermSchema)

module.exports = AcademicTerm

