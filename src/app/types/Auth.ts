export type TypeLoginRequest = {
  _id?: string ,
  email: string,
  password: string,
  role: number,
  status: number,
  name?:string
}
export type TypeLoginResponse = {
  accessToken : String,
  user: {
    _id: number,
    email: string,
    password: string,
    role : number,
    status: number
  }
}
export type TypeRegisterResponse = {
  user: {
    _id: string,
    email: string,
    password: string,
    name: string
  }
}
