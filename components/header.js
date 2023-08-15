

const Header = () => `
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 px-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/all-products.html">All Products</a>
          </li>
        </ul>
        <div class="position-relative">
          <a href="cart.html">
            <i class="bi bi-cart fs-5"></i>
          </a>
          <span class="header-cart-quantity position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success">
            0
          </span>
      </div>
      </div>
    </div>
  </nav>
  `;

export default Header;
