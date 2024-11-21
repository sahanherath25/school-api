const mongoose = require("mongoose")
const Schema = mongoose.Schema


const AcademicYearSchema = new Schema(
    {
        name: {
            type: String,
            required:true
        },
        fromYear: {
            type: Date,
            required:true
        },
        toYear: {
            type: Date,
            required:true
        },
        isCurrent: {
            type: Boolean,
            required:true
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Admin",
            required:true
        },
        students:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Student",
            }
        ],
        teachers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Teacher",
                default:[]
            }
        ]
    },
    {
        timestamps: true
    }
)

const AcademicYear = mongoose.model("AcademicYear", AcademicYearSchema)

module.exports = AcademicYear