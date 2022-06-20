export type Product = {
    _id: string,
    name: string,
    price: number,
    image: string,
    sale_price: number,
    desc: string,
    value: number,
    author: string,
    status: number,
    category: string,
};

export type ProductCreate = {
    name: string,
}

export type ProductCart = {
    _id: string,
    name: string,
    price: number,
    image: string,
    sale_price: number,
    desc: string,
    value: number,
    author: string,
    status: number,
    category: string,
}