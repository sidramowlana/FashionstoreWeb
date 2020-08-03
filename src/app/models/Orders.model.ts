import { User } from "./User.model";

export class Orders {

    private ordersId: number;
    private date: String;
    private status: String;
    private user: User;
    private total: number;
    private postalCode:String;
    private city:String ;
    private address:String ;

    constructor(postalCode:String ,city:String ,address:String ,date:String, status:String , total:number){
            this.postalCode = postalCode;
            this.city = city;
            this.address = address;
            this.status = status;
            this.total = total;        
         }

}