export type Product = {
    _id: number,
    name: string, 
    price: number, 
    image: string,
    desc: string
};

export type ProductCreate = {
    name: string,
}