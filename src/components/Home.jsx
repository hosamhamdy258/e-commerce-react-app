import React from "react";
import Button from "react-bootstrap/Button";
import Mycarousel from "./Mycarousel";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../store/cartSlice";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function Home({ productList }) {
  console.log(productList);
  const dispatch = useDispatch();

  const addButton = (item) => {
    dispatch(addProduct(item));
    // dispatch(getCart());
  };
  const removeButton = (item) => {
    dispatch(removeProduct(item));
    // dispatch(getCart());
  };
  return (
    <>
      {/* Start Slider */}

      <section className="slider_section ">
        <div className="slider_bg_box">
          <img src="assist/images/slider-bg.jpg" alt="" />
        </div>
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <NavLink className="nav-link btn1" to="/Products">
                          Shop Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <NavLink className="nav-link btn1" to="/Products">
                          Shop Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container ">
                <div className="row">
                  <div className="col-md-7 col-lg-6 ">
                    <div className="detail-box">
                      <h1>
                        <span>Sale 20% Off</span>
                        <br />
                        On Everything
                      </h1>
                      <p>
                        Explicabo esse amet tempora quibusdam laudantium,
                        laborum eaque magnam fugiat hic? Esse dicta aliquid
                        error repudiandae earum suscipit fugiat molestias,
                        veniam, vel architecto veritatis delectus repellat modi
                        impedit sequi.
                      </p>
                      <div className="btn-box">
                        <NavLink className="nav-link btn1" to="/Products">
                          Shop Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>

      {/* End Slider */}

      {/* why section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Why Shop With Us</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box"></div>
                <div className="detail-box">
                  <h5>Fast Delivery</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box"></div>
                <div className="detail-box">
                  <h5>Free Shiping</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box ">
                <div className="img-box"></div>
                <div className="detail-box">
                  <h5>Best Quality</h5>
                  <p>variations of passages of Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end why section  */}

      {/* arrival section */}
      <section className="arrival_section">
        <div className="container">
          <div className="box">
            <div className="arrival_bg_box w-50">
              <img src="assist/images/arrival-bg.png" alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="heading_container remove_line_bt">
                  <h2>#NewArrivals</h2>
                </div>
                <p>
                  Vitae fugiat laboriosam officia perferendis provident aliquid
                  voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic?
                  Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem
                  similique ex unde!
                </p>
                <NavLink className="nav-link btn1" to="/Products">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end arrival section */}

      {/* {productList &&
        productList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })} */}

      {/* <!-- Slider Start  --> */}
      <Mycarousel />
      {/* <!-- Slider End  --> */}

      {/* <!-- Banners Start  --> */}

      <section id="banners">
        {/* <!-- Banners 1  --> */}
        <div id="banner-1" className="container-fluid">
          <div className="row text-center text-light pt-5 pb-5  mt-5">
            <h5 className="display-6 fw-normal">Repair Services</h5>
            <h2 className="display-4 fw-normal">
              Up to <span className="text-danger fw-bold">70% Off</span> - All
              Glasses & TV Accessories
            </h2>
            <a
              className="col-3 col-md-3  btn btn-outline-danger mt-4 pb-0 d-block mx-auto "
              href="#"
            >
              <h5>Explore More</h5>
            </a>
          </div>
        </div>
        {/* <!-- Small banners --> */}
        <div id="banners-container" className="container">
          <div className="row text-start pt-5 pb-5 m-auto justify-content-sm-between">
            <div className="ban-item col-10 col-lg-3 pt-3 pb-5 m-auto mt-5">
              <h2 className="display-6 fw-normal text-light">Season Sale</h2>
              <p className="display-6 fw-normal  text-danger">
                Black-Friday Collection - 50% Off
              </p>
            </div>
            <div className="ban-item col-10 col-lg-4 pt-3 pb-5 m-auto mt-5">
              <h2 className="display-6 fw-normal text-light">NEW LapTops</h2>
              <p className="display-6 fw-normal  text-danger">
                New Gaming Laptops
              </p>
            </div>
            <div className="ban-item col-10 col-lg-3 pt-3 pb-5 m-auto mt-5">
              <h2 className="display-6 fw-normal text-light">
                New Glasses Collection
              </h2>
              <p className="display-6 fw-normal  text-danger">Best Offers</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Banners End  --> */}

      {/* <!-- Newsletter Start  --> */}
      <section id="subinv" className="bg-light py-5">
        <div className="container-fluid py-5 ">
          <div className="row text-center text-md-start justify-content-center align-items-center">
            <div className="col-md-6 ">
              <div className="display-2">We offer the best</div>
              <div className="display-4 fw-bolder text-success">Quality</div>
            </div>

            <div className="col-4 col-md-2">
              <img
                className="img-fluid"
                src="assist/imgs/banner/quality.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="newsletter"
        className="d-flex align-items-center mb-5 justify-content-between pt-4 pb-4"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 text-light">
              <h4 className="display-4">Sign Up For Newsletters</h4>
              <p className="display-6">
                Get E-mail updates about our lastest shop and
                <span className="text-danger fw-semibold">special offers.</span>
              </p>
            </div>
            <div className=" col-12 col-md-6 m-auto">
              <form className="row mt-5 col-12  m-auto">
                <div className="col-10 col-md-9 m-auto">
                  <input
                    type="email"
                    className="p-3 form-control mb-3 d-block m-auto"
                    id="Email"
                    defaultValue=""
                  />
                </div>

                <div className=" col-12 col-md-3">
                  <input
                    className="d-block m-auto outline-danger p-3 mb-3 fw-bold"
                    type="button"
                    defaultValue="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Newsletter End  --> */}

      {/* end arrival section */}

      {/* Products section */}
      <div className="container mt-5">
        <div className="row">
          {productList &&
            productList.slice(1, 13).map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-3 card m-2 bg-opacity-10 bg-primary"
                  style={{ height: "600px" }}
                >
                  <NavLink className="nav-link" to={`/products/${item.id}`}>
                    <div>
                      <img
                        src={item.images[0]}
                        className="card-img-top"
                        alt={item.title}
                      />
                    </div>
                  </NavLink>

                  <div className="card-body">
                    <h5 className="card-title slideProductName">
                      {item.title}
                    </h5>
                    <Card.Text className="card-text pb-4">
                      {item.description}
                    </Card.Text>
                    <h4 className="card-text card-price">{item.price} EGP</h4>
                    <Button
                      variant="primary card-cart"
                      onClick={() => addButton(item)}
                    >
                      <i className="fa-solid fa-cart-plus"></i>
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* End Products section */}
    </>
  );
}
