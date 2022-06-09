export type Product = {
    _id: number,
    name: string, 
    price: number, 
    price_sale: number,
    image: string,
    desc: string,
    status: string,
    category_id: number
};

export type ProductCreate = {
    name: string,
}