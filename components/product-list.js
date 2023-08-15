import ProductItem from "./product-item.js";

// const ProductList = (products) => {
//     let container = "<div>product1</div><div>producg 2</div>";
//     products.forEach((product) => {
//         container += ProductItem(product);
//     });
//     return container;
// };

const ProductList = (products) =>  products.map(prod => ProductItem(prod)).join("")

export default ProductList;
