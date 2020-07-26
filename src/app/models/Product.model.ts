export class Product {
    public productId: number;

    public productName: String;
    public shortDescription: String;
    public category: String;
    public price: number;
    public quantity: number;
    public scaledImage: String;
    public catergoryArray: String[];

    constructor(productName:String,shortDescription:String,category:String, price:number, quantity:number,scaledImage:String) {
        this.productName = productName;
        this.shortDescription = shortDescription;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
        this.scaledImage = scaledImage;
    }
    // constructor(productName:String,shortDescription:String,price:number,quantity:number,scaledImage:String,catergoryArray:String[]);    
    
}