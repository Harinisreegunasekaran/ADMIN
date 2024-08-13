// // import React, { useState } from 'react'
// // import './AddProduct.css'
// // import upload_area from '../../assets/upload_area.svg'
// // const AddProduct = () => {
// //     const[image,setImage]=useState(false);
// //     const[productDetails,setProductDetails]=useState({
// //         name:"",
// //         image:"",
// //         catagory:"women",
// //         new_price:"",
// //         old_price:""
// //     })
// //     const imageHandler=(e)=>{
// //         setImage(e.target.files[0]);
// //     }
// //     const changeHandler=(e)=>{
// //         setProductDetails({...productDetails,[e.target.name]:e.target.value})
// //     }
// //     const Add_Product=async ()=>
// //     {
// //         console.log(productDetails);
// //     }
// //   return (
// //     <div className='add-product'>
// //         <div className="addproduct-itemfield">
// //             <p>Product title</p>
// //             <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
// //         </div>
// //         <div className="addproduct-price">
// //             <div className="addproduct-itemfield">
// //                 <p>Price</p>
// //                 <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
// //             </div>
// //             <div className="addproduct-itemfield">
// //                 <p>Offer Price</p>
// //                 <input value={productDetails.new_price} onChange={changeHandler}  type="text" name="new_price" placeholder='Type here' />
// //             </div>
// //         </div>
// //         <div className="addproduct-itemfield">
// //             <p>Product Category</p>
// //             <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
// //                 <option value="women">Women</option>
// //                 <option value="men">Men</option>
// //                 <option value="kid">Kid</option>
// //             </select>
// //         </div>
// //         <div className="addproduct-itemfield">
// //             <label htmlFor="file-input">
// //                 <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumbnail-img'/>
// //             </label>
// //             <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
// //         </div>
// //         <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
// //     </div>
// //   )
// // }

// // export default AddProduct







// import React, { useState } from 'react';
// import './AddProduct.css';
// import upload_area from '../../assets/upload_area.svg';

// const AddProduct = () => {
//     const [image, setImage] = useState(false);
//     const [productDetails, setProductDetails] = useState({
//         name: "",
//         image: "",
//         category: "women", 
//         new_price: "",
//         old_price: ""
//     })

//     //const imageHandler = (e) => {
//     //     const file = e.target.files[0];
//     //     setImage(file);
//     //     setProductDetails({ ...productDetails, image: file }); 
//     // };

//     const imageHandler = (e) => {
//         const file = e.target.files[0];
//         setImage(file);
//         // Correctly update the productDetails with the image file
//         setProductDetails(prevDetails => ({
//             ...prevDetails,
//             image: file
//         }));
//     };

//     const changeHandler = (e) => {
//         setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
//     };
    

//     const Add_Product = async () => {
//         console.log(productDetails);
//         let responseData;
//         let product=productDetails;
//         let formData=new FormData();
//         formData.append('product',image);
//         await fetch('http://localhost:4000/upload',{
//             method:'POST',
//             headers:{
//                 Accept:'application/json',
//             },
//             body:formData,

//         }).then ((resp)=>resp.json()).then((data)=>{responseData=data});
//         if(responseData.success){
//             product.image=responseData.image_url;
//             console.log(product);
//             await fetch('http://localhost:4000/addproduct',{
//                 method:'POST',
//                 headers:{
//                     Accept:'application/json',
//                     'Content-Type':'application/json',
//                 },
//                 body:JSON.stringify(product),
//             }).then((resp)=>resp.json()).then((data)=>{
//                 data.success?alert("Product Added"):alert("Failed")
//             })
//         }
//     };

//     return (
//         <div className='add-product'>
//             <div className="addproduct-itemfield">
//                 <p>Product title</p>
//                 <input 
//                     value={productDetails.name} 
//                     onChange={changeHandler} 
//                     type="text" 
//                     name='name' 
//                     placeholder='Type here' 
//                 />
//             </div>
//             <div className="addproduct-price">
//                 <div className="addproduct-itemfield">
//                     <p>Price</p>
//                     <input 
//                         value={productDetails.old_price} 
//                         onChange={changeHandler} 
//                         type="text" 
//                         name="old_price" 
//                         placeholder='Type here' 
//                     />
//                 </div>
//                 <div className="addproduct-itemfield">
//                     <p>Offer Price</p>
//                     <input 
//                         value={productDetails.new_price} 
//                         onChange={changeHandler}  
//                         type="text" 
//                         name="new_price" 
//                         placeholder='Type here' 
//                     />
//                 </div>
//             </div>
//             <div className="addproduct-itemfield">
//                 <p>Product Category</p>
//                 <select 
//                     value={productDetails.category} 
//                     onChange={changeHandler} 
//                     name="category" 
//                     className='add-product-selector'
//                 >
//                     <option value="women">Women</option>
//                     <option value="men">Men</option>
//                     <option value="kid">Kid</option>
//                 </select>
//             </div>
//             <div className="addproduct-itemfield">
//                 <label htmlFor="file-input">
//                     <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className='addproduct-thumbnail-img'/>
//                 </label>
//                 <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
//             </div>
//             <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
//         </div>
//     );
// };

// export default AddProduct;







import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(false); // Use null instead of false for clarity
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "", // This will be a URL, not a file
        category: "women", 
        new_price: "",
        old_price: ""
    });

    // Handler to update image and productDetails state
    const imageHandler = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // No need to update productDetails with the file directly
    };

    // Handler to update other product details
    const changeHandler = (e) => {
        setProductDetails(prevDetails => ({
            ...prevDetails,
            [e.target.name]: e.target.value
        }));
    };

    // Function to handle adding the product
    const Add_Product = async () => {
        let responseData;
        let formData = new FormData();
        if (image) {
            formData.append('image', image); // Ensure the key matches the backend expectation
        }

        // Upload the image
        await fetch('https://backend-1-e20z.onrender.com/upload', {
            method: 'POST',
            // No 'Content-Type' header needed for FormData
            body: formData,
        })
        .then(resp => resp.json())
        .then(data => {
            responseData = data;
        });

        if (responseData.success) {
            // Update productDetails with the URL of the uploaded image
            const updatedProduct = { ...productDetails, image: responseData.img_url };

            // Send the product details including the image URL
            await fetch('https://backend-1-e20z.onrender.com/addproduct', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            })
            .then(resp => resp.json())
            .then(data => {
                data.success ? alert("Product Added") : alert("Failed");
            });
        } else {
            alert("Image upload failed");
        }
    };

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input 
                    value={productDetails.name} 
                    onChange={changeHandler} 
                    type="text" 
                    name='name' 
                    placeholder='Type here' 
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input 
                        value={productDetails.old_price} 
                        onChange={changeHandler} 
                        type="text" 
                        name="old_price" 
                        placeholder='Type here' 
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input 
                        value={productDetails.new_price} 
                        onChange={changeHandler}  
                        type="text" 
                        name="new_price" 
                        placeholder='Type here' 
                    />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select 
                    value={productDetails.category} 
                    onChange={changeHandler} 
                    name="category" 
                    className='add-product-selector'
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className='addproduct-thumbnail-img'/>
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>
            <button onClick={Add_Product} className='addproduct-btn'>ADD</button>
        </div>
    );
};

export default AddProduct;

