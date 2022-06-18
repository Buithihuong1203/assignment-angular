export type Product = {
  _id: any,
  name:String,
  price: number,
  sale_price:number,
  description: string,
  img_url : string,
  status: number,
  //category_id:  string
};
export type ProductCreate = {
  name? : String,
  price?: number,
  sale_price?:number,
  description?: string,
  img_url? : string,
  status?: number
};
export type ProductCart = {
  _id : String | Number,
  name : String,
  price: number,
  sale_price:number,
  value : number
}
