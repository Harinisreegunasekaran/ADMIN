// import React,{useEffect,useState} from 'react'
// import './ListProduct.css'
// import cross_icon from '../../assets/cross_icon.png'
// const ListProduct = () => {

//     const [allproducts,setAllProducts]=useState([]);
//     const fetchInfo=async()=>{
//       await fetch('http://localhost:4000/allproducts')
//       .then((res)=>res.json())
//       .then((data)=>{setAllProducts(data)});
//     }
//     useEffect(()=>{
//       fetchInfo()
//     },[])

//     const remove_product=async()=>{
//       await fetch ('http://localhost:4000/removeproduct',{
//         method:'POST',
//         headers:{
//           Accept:'application/json',
//           'Content-Type':'application/json',

//         },
//         body:JSON.stringify({id:id})
//       })

//       await fetchInfo();
//     }

//   return (
//     <div className='list-product'>
//       <h1>All Products List</h1>
//       <div className="listproduct-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>
//       <div className="listproduct-allproducts">
//         <hr />
//         {allproducts.map((product,index)=>{
//           return <> <div key={index} className="listproduct-format-main listproduct-format">
//             {/* <img src={product.image} alt="" className="listproduct-product-icon" /> */}
//             <img src={product.image} alt={product.name} className="listproduct-product-icon" />

//             <p>{product.name}</p>
//             <p>Rs.{product.old_price}</p>
//             <p>Rs.{product.new_price}</p>
//             <p>{product.category}</p>
//             <img onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt="" />
//           </div>
//           <hr/>
//           </>
//         })}
//       </div>
//     </div>
//   )
// }

// export default ListProduct


import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproducts');
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      // Refresh the product list after removal
      fetchInfo();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className="listproduct-format-main listproduct-format">
              <img src={product.image} alt={product.name} className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>Rs.{product.old_price}</p>
              <p>Rs.{product.new_price}</p>
              <p>{product.category}</p>
              <img 
                onClick={() => removeProduct(product.id)} 
                className="listproduct-remove-icon" 
                src={cross_icon} 
                alt="Remove" 
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;

