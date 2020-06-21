var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        unique: true,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type: Date
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    address: {
        type: String
    },
    highestQualification: {
        type: String
    },
    course: {
        type: String
    },
    specialization: {
        type: String
    },
    university: {
        type: String
    },
    courseType: {
        type: String
    },
    passingYear: {
        type: Number
    },
    skills: [{
        type: String
    }],
    educationDetails: [{
        institute: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    }],
    internshipDetails: [{
        companyName: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        details: {
            type: String
        }
    }],
    prefferedWorkLocation: {
        type: String
    },
    desiredJobType: {
        type: String
    },
    maritalStatus: {
        type: String
    },
    languages: [{
        type: String
    }],
    totalWorkExperience: {
        type: String
    },
    currentDesignation: {
        type: String
    },
    currentCompany: {
        type: String
    },
    annualSalary: {
        type: Number
    },
    workingSince: {
        type: Date
    },
    currentLocation: {
        type: String
    },
    durationOfNoticePeriod: {
        type: String
    },
    industryRole: {
        type: String
    },
    functionalArea: {
        type: String
    }
});

module.exports = mongoose.model("UserData", UserSchema, "UserData")