export interface Reviews {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export interface Products {
    id: number,
    images: string[],
    title: string,
    brand: string,
    category: string,
    price: number,
    rating: number,
    warrantyInformation: string,
    shippingInformation: string,
    returnPolicy: string
    reviews: Reviews[]
}

export interface CartItem {
    id: number,
    quantity: number,
    name: string,
    image: string,
    price: number
}