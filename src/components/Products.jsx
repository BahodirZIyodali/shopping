import React, { useEffect, useState } from "react";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {Link} from 'react-router-dom'
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch("http://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.clone().json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-md-3 mb-4 placeholderCard">
            <div
              class="card  h-100 text-center p-4"
              aria-hidden="true "
              height="250px"
            >
              <img src="" alt="" height="250px" />
              <div class="card-body">
                <h5 class="card-title placeholder-glow  mb-0">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabindex="-1"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-3 mb-4 placeholderCard">
            <div
              class="card  h-100 text-center p-4"
              aria-hidden="true "
              height="250px"
            >
              <img src="" alt="" height="250px" />
              <div class="card-body">
                <h5 class="card-title placeholder-glow  mb-0">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabindex="-1"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-3 mb-4 placeholderCard">
            <div
              class="card  h-100 text-center p-4"
              aria-hidden="true "
              height="250px"
            >
              <img src="" alt="" height="250px" />
              <div class="card-body">
                <h5 class="card-title placeholder-glow  mb-0">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabindex="-1"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-3 mb-4 placeholderCard">
            <div class="card  h-100 text-center p-4" aria-hidden="true ">
              <img src="" alt="" height="250px" />
              <img src="" alt="" height="250px" />
              <div class="card-body">
                <h5 class="card-title placeholder-glow  mb-0">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a
                  href="#"
                  tabindex="-1"
                  class="btn btn-primary disabled placeholder col-6"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const filterProduct = (cate) => {
    const updateList = data.filter((x) => x.category === cate);
    setFilter(updateList);
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card h-100 text-center p-4 ">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-primary">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  );
};

export default Products;
