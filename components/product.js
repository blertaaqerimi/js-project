// pdp
import formatPrice from "../helpers/format-price.js";
const Product = (product) => {
  console.log({ product })

  return `
    <div>
    <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="${product.images[0].src}" alt="Product Image" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h1>${product.title}</h1>
        ${product.descriptionHtml}
        <p><strong>Price: ${formatPrice(product.variants[0]?.price?.amount)}</strong></p>
        <button id="cart-btn" variant-id='${product.variants[0].id}' class="btn btn-primary">Add to Cart</button>
      </div>
    </div>

  
    <div class="row mt-4">
      <div class="col">
        <h2>Additional Images</h2>
      </div>
    </div>
  
    <div class="row mt-2">
      ${product.images.slice(1).map((img) => {
         return ` <div class="col-md-6">
            <img src="${img.src}" alt="Additional Image 1" class="img-fluid" />
          </div>`
        }).join("")}
      </div>
    </div>
    </div>
  `

}

export default Product;