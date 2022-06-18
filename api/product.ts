import { Product } from "src/app/types/Product";
import instance from "./instance";
export const list =() => {
  const url = `/products`;
  return instance.get(url);
}
export const create = (product: Product) => {
  const url = `/products`;
  return instance.post(url, product);
}
export const read = (_id : string) => {
  const url = `/products/${_id}`;
  return instance.get(url);
}
export const update = (product: Product) => {
  const url = `/products/${product._id}`;
  return instance.put(url,product);
}
export const remove =(_id: String) => {
  const url = `/products/${_id}`;
  return instance.delete(url);
}
