import React, { useState, useEffect } from "react";
import { useParams,Link ,useNavigate} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
const Product = () => {
   const goBack = useNavigate() 
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const result = await fetch(`http://fakestoreapi.com/products/${id}`);
      setProduct(await result.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () =>{
    return (
       <>
       <div className="col-md-6">
      <Skeleton height={400}/>
       </div>
       <div className="col-md-6" style={{lineHeight:"2"}}>
       <Skeleton height={50} width={300}/>
       <Skeleton height={75}/>
       <Skeleton height={25} width={150}/>
       <Skeleton height={50}/>
       <Skeleton height={150}/>
       <Skeleton height={50} width={100}/>
       <Skeleton height={50} width={100} style={{marginLeft:6}}/> 
       </div>
       </>
    )
  }
  const ShowProduct = () =>{
    return (
  <>
        <div className="col-md-6">
      <img src={product.image} alt={product.title} height='400px'width='400px'  />
       </div>
       <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">
            {product.category}
        </h4>
        <h1 className="display-5">
            {product.title}
        </h1>
        <p className="lead fw-bolder">
            Rating{product.rating && product.rating.rate}
            <i className="fa fa-star "> </i>
        </p>
        <h3 className="display-6 fw-bold my-4 ">
            ${product.price}
        </h3>
        <p className="lead "> {product.description}</p>
        <button className="btn btn btn-outline-dark"  >
            Add to Cart</button>
            <Link to='/cart' className="btn btn btn-dark px-4 py-2">
            Go to Cart</Link>
            <button onClick={()=>goBack(-1)} className="btn btn btn-outline-success">
            <i class="fa-solid fa-left"></i>  Go back </button>
       </div>
  </>
    )
  }


  return <div className="container">
    <div className="row py-5">
        {loading?<Loading/>: <ShowProduct/>}
    </div>
  </div>;
};

export default Product;
