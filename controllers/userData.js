const userData = require('./../models/userData');

module.exports = {
    updateDetails: (req, res)=>{
        userData.findOne({userId: req.body.userData.userId}).then(
            result=>{
                if(result!=null){
                    userData.findOneAndUpdate({userId: req.body.userData.userId}, {$set: req.body.userData}).then(result=>
                        {
                            
                            res.status(200).json({success: true, result: result});
                            
                        }
                    ).catch(err=> {res.status(500).json({success: false, err: err})})
                }
                else {
                    var newuser = new userData({
                        userId:                 req.body.userData.userId,
                        experience:             req.body.userData.experience,
                        name:                   req.body.userData.name,
                        email:                  req.body.userData.email,
                        gender:                 req.body.userData.gender,
                        phoneNumber:            req.body.userData.phoneNumber,
                        dob:                    req.body.userData.dob,
                        state:                  req.body.userData.state,
                        country:                req.body.userData.country,
                        address:                req.body.userData.address,
                        highestQualification:   req.body.userData.highestQualification,
                        course:                 req.body.userData.course,
                        specialization:         req.body.userData.specialization,
                        university:             req.body.userData.university,
                        courseType:             req.body.userData.courseType,
                        passingYear:            req.body.userData.passingYear,
                        skills:                 req.body.userData.skills,
                        educationDetails:       req.body.userData.educationDetails,
                        internshipDetails:      req.body.userData.internshipDetails,
                        prefferedWorkLocation:  req.body.userData.prefferedWorkLocation,
                        desiredJobType:         req.body.userData.desiredJobType,
                        maritalStatus:          req.body.userData.maritalStatus,
                        languages:              req.body.userData.languages,
                        totalWorkExperience:    req.body.userData.totalWorkExperience,
                        currentDesignation:     req.body.userData.currentDesignation,
                        currentCompany:         req.body.userData.currentCompany,
                        annualSalary:           req.body.userData.annualSalary,
                        workingSince:           req.body.userData.workingSince,
                        currentLocation:        req.body.userData.currentLocation,
                        durationOfNoticePeriod: req.body.userData.durationOfNoticePeriod,
                        industryRole:           req.body.userData.industryRole,
                        functionalArea:         req.body.userData.functionalArea,
                    });
                    newuser.save().then(result=>{
                        res.status(200).json({success: true, result: result})
                    })
                    .catch(err=>{res.status(500).json({success: false, err: err})});
                }
                
            }
        ).catch(err=>{
            res.json({success: false, err: err})
        })
    },
    getDetails: (req, res)=>{
        userData.findOne({userId: req.body.userData.userId}).
        then(result=>{
            res.status(200).json({success: true, userData: result});
        }).catch(err=>{
            res.status(500).json({success: false, err: err});
        })
    }
}