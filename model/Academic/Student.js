
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const StudentSchema = new Schema(
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
        studentId: {
            type: String,
            required: true,
            default: function () {
                return (
                    "STU" + Math.floor(100 + Math.random() * 900) + Date.now()
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
        role: {
            type: String,
            default: "student"
        },
        classLevels:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ClassLevel",
                required: true
            }
        ],
        currentClassLevel:{
            type: String,
            default:function () {
                return this.classLevels[this.classLevels.length-1]
            }
        },
        academicYear:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "AcademicYear",
            required: true
        },
        examsResults:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "ExamResult",
            }
        ],
        program:{
            type:Schema.Types.ObjectId,
            ref: "Program",
            required:true
        },
        isPromotedToLevel300:{
            type: Boolean,
            default:false
        },
        isPromotedToLevel400:{
            type: Boolean,
            default:false
        },
        isGraduated:{
            type: Boolean,
            default:false
        },
        isSuspended:{
            type: Boolean,
            default:false
        },
        yearGraduated:{
            type:String
        }
    },
    {
        timestamps: true
    }
)

const Student = mongoose.model("Teacher", StudentSchema);

module.exports = Student
