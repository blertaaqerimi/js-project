import formatPrice from "../helpers/format-price.js";

const ProductItem = (product) => {
  const prices = product.variants.map((variant) => {
    return parseFloat(variant.price?.amount);
  });

  const compareAtPrices = product.variants.map((variant) => {
    return +variant.compareAtPrice?.amount;
  });

  let minPrice = Math.min(...prices);
  let maxCompareAtPrice = Math.max(...compareAtPrices);

  minPrice = formatPrice(minPrice);
  maxCompareAtPrice = formatPrice(maxCompareAtPrice);

  if (product.images?.length < 2) 
  return ""


  return `
    <div class="col">
      <div class="card shadow-sm">
        <img width="100%" src="${product.images[0]?.src}" />
        <div class="card-body">
          <h4 class='ellipsis-container'>${product.title}</h4>
          <p class="ellipsis-container card-text">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <a href="product.html?handle=${product.handle}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
            </div>
            <b class="text-body-secondary">${minPrice}</b>
          </div>
        </div>
      </div>
    </div>
  `
};

export default ProductItem;