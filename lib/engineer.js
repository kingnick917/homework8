const employee = require ("./employee")


class  engineer extends employee{
    constructor(name, ID, email,GitHubusername){
        super(name, ID,email)
        this.GitHubusername = GitHubusername
    }


    gitGitHubusername(){
            return this.GitHubusername
        }
    
    gitrole(){
         return 'engineer'
    }

    
}

module.exports=engineer