export interface Product {
    id:number,
    image: ImageSizes,
    name: string,
    category: string,
    price: number,
    quantity:number
}

interface ImageSizes{
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
}