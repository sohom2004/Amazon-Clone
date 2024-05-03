import React, { useEffect, useState } from 'react'
import './product.css';
import { useParams } from 'react-router-dom';


const Product = () => {

  const { id } = useParams("");

  const [indData, setIndData] = useState([]);

  const getIndividual = async () => {
    const res = await fetch(`/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json();

    if (res.status !== 201) {
      console.log("no data available");
    } else {
      console.log("getData: ");
      setIndData(data);

    }

  }

  useEffect(() => {
    setTimeout(getIndividual, 1000)
  }, [id]);

  const addToCart = async (id) => {
    console.log(id);
    const checkRes = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        indData
      }),
      credentials: "include"
    });

    const data1 = await checkRes.json();
    console.log(data1 + " FrontEnd Data");

    if (checkRes.status === 401 || !data1) {
      console.log("user invalid");
      alert("user invalid");
    } else {
      alert("data added in your cart");
    }
  }

  return (
    <div className='product_section'>
      <div className='product_container'>
        <div className='product_left'>
          <img src={indData.detailUrl} alt='cart_img' />
          <div className='product_btn'>
            <button className='product_btn1' onClick={() => addToCart(indData.id)}>Add To Cart</button>
            <button className='product_btn2'>Buy Now</button>
          </div>
        </div>
        <div className='product_right'>
          {indData && (
            <>
              <h3>{indData.title?.shortTitle}</h3>
              <h4>{indData.title?.longTitle}</h4>
              <hr />
              <p className="mrp">M.R.P. : ₹{indData.price?.mrp}.00</p>
              <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{indData.price?.cost}.00</span></p>
              <p>You save : <span style={{ color: "#B12704" }}> ₹{indData.price?.mrp - indData.price?.cost} ({indData.price?.discount}) </span></p>

              <div className="discount_box">
                <h5 >Discount : <span style={{ color: "#111" }}>Extra 10% Off</span> </h5>
                <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
              </div>
              <p className="description">About the Item : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{indData.description}</span></p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
