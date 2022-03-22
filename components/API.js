// import axios from "axios";

// const baseURL = 'https://github.com/mstrutt/product-list/blob/master/products.json';

// export const getData = async () => {
//     const data = await axios.get(baseURL)
//     console.log(data)
// }
// I did not use axios, because the base url does not return the data I need
// So, I decided to hard code it.
// I decided to change data.image too, because placehold.it was down.
export const data = [{
    "name": "Product 1",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "image": "http://placehold.jp/300x300.png"
}, {
    "name": "Product 2",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "BOGOF",
    "image": "http://placehold.jp/300x300.png"
}, {
    "name": "Product 3",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "http://placehold.jp/300x300.png"
}, {
    "name": "Product 4",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "offer": "No srsly GTFO",
    "image": "http://placehold.jp/300x300.png"
}, {
    "name": "Product 5",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "image": "http://placehold.jp/300x300.png"
}, {
    "name": "Product 6",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "info": "This is the latest and greatest product from Derp corp.",
    "offer": "info with offer",
    "image": "http://placehold.jp/300x300.png"
}]
export const heroItem = {
    "name": "hero Product",
    "detail": "Lorem ipsum dolor sit amet",
    "price": "99",
    "hero": "OMG This just came out today!",
    "image": "http://placehold.jp/940x300.png"
}