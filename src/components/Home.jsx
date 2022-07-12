import React from "react";

export default function Home() {
  return (
    <>
      {/* <!-- Intro Start html --> */}
      <div class="splash bg-black pt-5 ">
        <h1 class="fade-in text-center text-light display-2 pt-5">
          Welcome to Easy Shop
        </h1>
      </div>
      {/*  
    <!-- SlideShow Start  --> */}
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide container"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner overflow-hidden pt-5">
          <div class="carousel-item active" data-bs-interval="2000">
            <img
              src="../imgs/SlidShow/slide1.png"
              class="slideImg d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="../imgs/SlidShow/slide2.png"
              class="slideImg d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="../imgs/SlidShow/slide3.png"
              class="slideImg d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- SlideShow End  -->
    <!-- Features Start  --> */}
      <section class="features container row pt-5 m-auto">
        <p class="display-6">Why Easy Shop</p>
        <div class="col-6 col-md-4 col-lg-2 mt-1 py-4 feat d-flex flex-column justify-content-center align-items-center text-center">
          <img class="img-fluid" src="../imgs/features/f1.png" alt="" />
          <h5>Free Shipping</h5>
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-1 py-4 feat d-flex flex-column justify-content-center align-items-center text-center">
          <img class="img-fluid" src="../imgs/features/f2.png" alt="" />
          <h5>Online Order</h5>
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-1 py-4 feat d-flex flex-column justify-content-center align-items-center text-center">
          <img class="img-fluid" src="../imgs/features/f3.png" alt="" />
          <h5>Save Money</h5>
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-1 py-4 feat d-flex flex-column justify-content-center align-items-center text-center">
          <img class="img-fluid" src="../imgs/features/f4.png" alt="" />
          <h5>Promotions</h5>
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-1 py-4 feat d-flex flex-column justify-content-center align-items-center text-center">
          <img class="img-fluid" src="../imgs/features/f5.png" alt="" />
          <h5>Happy Sell</h5>
        </div>
        <div class="col-6 col-md-4 col-lg-2 mt-1 py-4 feat d-flex flex-column justify-content-center align-items-center text-center">
          <img class="img-fluid" src="../imgs/features/f6.png" alt="" />
          <h5>F24/7 Support</h5>
        </div>
      </section>
      {/* <!-- Features End  -->
    <!-- Product Sec Start  --> */}
      <section id="product" class="container pt-5">
        <h2 class="display-4 text-center">Featured Products</h2>
        <p class="pt-4 lead text-center">Summer Collection New Modern Design</p>
        <div class="products-cont row justify-content-between py-5">
          <div class="col-12 m-auto col-md-6 card mt-3 pt-3 productCard">
            <img
              src="../imgs/products/1sfhd.jpg"
              id="11"
              class="card-img-top clickToDetails"
            />
            <div class="card-body">
              <h5 class="card-title">TVs</h5>
              <h6 class="card-text productName">Samsung 40 inch FHD Smart</h6>
              <h6 class="card-text">Samsung</h6>
              <h5 class="card-text">5699 EGP</h5>
              <a id="11" class="d-block ms-auto btn btn-info clicktocart">
                <i id="11" class="fa-solid fa-cart-plus parent-count-class"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Sec End  -->
    <!-- Flash-sale Start  --> */}
      <hr />
      <section id="Flashint" class="bg-light py-5">
        <div class="container">
          <div class="row text-center text-md-start justify-content-center align-items-center">
            <div class="col-md-6">
              <h2 class="display-4">
                <strong>Flash Sale</strong>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-lightning-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" />
                </svg>
              </h2>
              <p class="pt-4 lead">Hurry up before sale ends</p>
            </div>
            <div class="col-md-4 text-danger pb-5">
              <div class="display-6" id="deadline"></div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row justify-content-between text-center text-md-start">
          <div class="col-6"></div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide bg-dark"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="slideProducts-cont1 row justify-content-between py-5"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="slideProducts-cont2 row justify-content-between py-5"></div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="slideProducts-cont3 row justify-content-between py-5"></div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- Flash-sale End  -->
    <!-- Banners Start  --> */}
      <section id="banners">
        {/* <!-- Banners 1  --> */}
        <div id="banner-1" class="container-fluid">
          <div class="row text-center text-light pt-5 pb-5 mt-5">
            <h5 class="display-6 fw-normal">Repair Services</h5>
            <h2 class="display-4 fw-normal">
              {" "}
              Up to <span class="text-danger fw-bold">70% Off</span> - All
              Glasses & TV Accessories{" "}
            </h2>
            <a
              class="col-3 col-md-3 btn btn-outline-danger mt-4 pb-0 d-block mx-auto"
              href="#"
            >
              <h5>Explore More</h5>
            </a>
          </div>
        </div>
        {/* <!-- Small banners --> */}
        <div id="banners-container" class="container">
          <div class="row text-start pt-5 pb-5 m-auto justify-content-sm-between">
            <div class="ban-item col-10 col-lg-3 pt-3 pb-5 m-auto mt-5">
              <h2 class="display-6 fw-normal text-light">Season Sale</h2>
              <p class="display-6 fw-normal text-danger">
                {" "}
                Black-Friday Collection - 50% Off{" "}
              </p>
            </div>
            <div class="ban-item col-10 col-lg-4 pt-3 pb-5 m-auto mt-5">
              <h2 class="display-6 fw-normal text-light">NEW LapTops</h2>
              <p class="display-6 fw-normal text-danger">New Gaming Laptops</p>
            </div>
            <div class="ban-item col-10 col-lg-3 pt-3 pb-5 m-auto mt-5">
              <h2 class="display-6 fw-normal text-light">
                {" "}
                New Glasses Collection{" "}
              </h2>
              <p class="display-6 fw-normal text-danger">Best Offers</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banners End  -->
    <!-- Newsletter Start  --> */}
      <section id="subinv" class="bg-light py-5">
        <div class="container py-5">
          <div class="row text-center text-md-start justify-content-center align-items-center">
            <div class="col-md-6">
              <div class="display-2">We offer the best</div>
              <div class="display-4 fw-bolder text-success">Quality</div>
            </div>
            <div class="col-4 col-md-2">
              <img class="img-fluid" src="../imgs/banner/quality.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section
        id="newsletter"
        class="d-flex align-items-center mb-5 justify-content-between pt-4 pb-4"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 text-light">
              <h4 class="display-4">Sign Up For Newsletters</h4>
              <p class="display-6">
                {" "}
                Get E-mail updates about our lastest shop and{" "}
                <span class="text-danger fw-semibold">special offers.</span>
              </p>
            </div>
            <div class="col-12 col-md-6 m-auto">
              <form class="row mt-5 col-12 m-auto">
                <div class="col-10 col-md-9 m-auto">
                  <input
                    type="email"
                    class="p-3 form-control mb-3 d-block m-auto"
                    id="Email"
                    value=""
                  />
                </div>
                <div class="col-12 col-md-3">
                  <input
                    class="d-block m-auto button p-3 mb-3 fw-bold"
                    type="button"
                    value="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
