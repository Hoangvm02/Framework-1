export type Product = {
    _id: string,
    name: string, 
    price: number, 
    image: string,
    desc: string
};

export type ProductCreate = {
    name: string,
}

export type ProductCart = {
    _id: string,
    name: string,
    value: number
  };