
export class User {
    public userId: number;
    public username:String;
    public email:String;
    public phone:String;
    public password:String;

    constructor(username:String,email:String,phone:String,password:String){
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}