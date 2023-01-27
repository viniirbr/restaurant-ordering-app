interface ProductProps {
    id: number,
    name: string,
    category: string,
    price: number,
}

export class Product {
    constructor(private props: ProductProps) { }
}