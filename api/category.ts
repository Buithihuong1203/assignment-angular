import instance from "./instance";
import { Category } from "src/app/types/Category" ;

export const list = () => {
  const url = '/category';
  return instance.get(url);
}
export const create = (category:Category) => {
  const url = `/category`;
  return instance.post(url, category);
}
export const read = (_id: string) => {
  const url = `/category/${_id}`;
  return instance.get(url);
}
export const remove = (_id: string) => {
  const url = `/category/${_id}`;
  return instance.delete(url);
}

export const update = (category: Category) => {
  const url = `/category/${category._id}`;
  return instance.put(url, category);
}
