import { TypeLoginRequest } from "src/app/types/Auth";
import instance from "./instance";
export const login = (user: TypeLoginRequest) => {
  const url = `/login`;
  return instance.post(url, user);
}
export const register = (user: TypeLoginRequest) => {
  const url = `/register`;
  return instance.post(url, user);
}
export const list = () => {
  const url = `/users`;
  return instance.get(url);
}
export const read = (_id: string) => {
  const url = `/users/${_id}`;
  return instance.post(url);
}
export const remove  = (_id: string) => {
  const url = `/users/${_id}`;
  return instance.delete(url);
}
export const update = (user: TypeLoginRequest) => {
  const url = `/users/${user._id}`;
  return instance.put(url, user);
}
