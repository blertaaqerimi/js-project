import formatPrice from "../helpers/format-price.js";

const CartItem = (item) => {
  return `
  <div class="card rounded-3 mb-4">
  <div class="card-body p-4">
    <div class="row d-flex justify-content-between align-items-center">
      <div class="col-md-2 col-lg-2 col-xl-2">
        <img
          src="${item.variant.image.src}"
          class="img-fluid rounded-3" alt="Cotton T-shirt">
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3">
        <a href="product.html?handle=${item.variant.product.handle}" class="lead fw-normal mb-2 text-black text-decoration-none">${item.title}</a>
      </div>
      <div class="action-buttons col-md-3 col-lg-3 col-xl-2 d-flex align-content-center" variant-id='${item.id}'>
        <button class="decrease-btn btn btn-link px-2">
          <i class="fas fa-minus"></i>
        </button>

        <p class="qty pt-1 pb-1 px-3 mt-2 border border-info-subtle">${item.quantity}</p>

        <button class="increase-btn btn btn-link px-2">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h5 class="mb-0">${formatPrice(item.variant.price.amount)}</h5>
      </div>
      <button class="delete-btn bg-transparent border-0 col-md-1 col-lg-1 col-xl-1 text-end">
       <span class="text-danger"><i class="fas fa-trash fa-lg"></i></span>
      </button>
    </div>
  </div>
</div>
  `
}

export default CartItem;