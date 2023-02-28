const employee = require ("./employee")


class  intern extends employee{
    constructor(name, ID, email, school){
        super(name, ID,email)
        this.school = school

    }
    gitschool(){
        return this.school
    }

    gitrole(){
        return 'intern'
    }
}   
module.exports=intern