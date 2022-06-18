export type Category = {
  _id: string,
  name: string,
  status: number,
  image: string

}

export type CategoryCreate = {
  name?: string,
  status?: number
  image?: string
}
