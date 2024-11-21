const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TeacherSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        dateEmployed: {
            type: Date,
            default: Date.now
        },
        teacherId: {
            type: String,
            required: true,
            default: function () {
                return (
                    "TEA" + Math.floor(100 + Math.random() * 900) + Date.now()
                        .toString()
                        .slice(2, 4) + this.name
                        .split(" ")
                        .map((name) => name[0]).join("")
                        .toUpperCase()
                )
            }
        },
        isWithdraw: {
            type: Boolean,
            default: false
        },
        isSuspended: {
            type: Boolean,
            default: false
        },
        role: {
            type: String,
            default: "teacher"
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        applicationStatus: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            required: true
        },
        program:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Program",
            required: true
        },
        classLevel:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ClassLevel",
            required: true
        },        
        academicYear:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicYear",
            required: true
        },
        examsCreated:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "Exam",
            }
        ],
        createdBy:{
            type:Schema.Types.ObjectId,
            required:true
        },
        academicTerm:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicTerm",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher
