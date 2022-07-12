import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default function Home({ productList }) {
  // console.log(productList);
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

      {/* Products section */}
      <div className="container mt-5">
        <div className="row">
          {productList &&
            productList.map((item) => {
              return (
                <div className="col-3 card mt-2" style={{ height: "600px" }}>
                  <img
                    id={item.id}
                    src={item.images[0]}
                    className="card-img-top clickToDetails2 img-thumbnail"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title slideProductName">
                      {item.title}
                    </h5>
                    <Card.Text className="card-text pb-4">
                      {item.description}
                    </Card.Text>
                    <h4 className="card-text card-price">{item.price} EGP</h4>
                    <Button variant="primary card-cart">
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
