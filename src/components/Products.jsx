import React, { Component } from 'react'
import ProductItem from "./ProductItem";
import products from '../data/Productdata'
import { useState } from 'react';


const Products  =()=> {
  const [style1,setStyle1] = useState('d-flex');
  const [style2,setStyle2] = useState('d-none');
  const [style3,setStyle3] = useState('d-none');
    return (
      <div className='container mt-5'>
        <div className="row">
          <div className='d-flex flex-column justify-content-center align-items-center mb-2'>
            <h6 className='text-dark'>WOODEN ACCESSORIES</h6>
            <h4 className='text-dark fw-bold my-3'>FEATURED PRODUCTS</h4>
          </div>
          <div className='d-flex justify-content-center align-items-center mb-4'>
          <button onClick={()=>{setStyle1('d-flex');setStyle2('d-none');setStyle3('d-none')}} type="button" className="btn border-0 fw-semibold underline underline_c">BEST SELLERS</button>
          <button onClick={()=>{setStyle1('d-none');setStyle2('d-flex');setStyle3('d-none')}} type="button" className="btn border-0 fw-semibold underline underline_c">FEATURED</button>
          <button onClick={()=>{setStyle1('d-none');setStyle2('d-none');setStyle3('d-flex')}} type="button" className="btn border-0 fw-semibold underline underline_c">SALES</button>
          </div>
            

            <div className={style1}>
            {products[0].map((fd)=>{
              return <ProductItem photo1={fd.img} photo2={fd.img1} title={fd.title} model={fd.model} price={fd.price} text={fd.text} button={fd.button}
              icon1="fa-regular fa-heart" icon3="fa-solid fa-magnifying-glass" />
            })}
            </div>  
            <div className={style2}>
            {products[1].map((fd)=>{
              return <ProductItem photo1={fd.img} photo2={fd.img1} title={fd.title} model={fd.model} price={fd.price} text={fd.text} button={fd.button}
              icon1="fa-regular fa-heart" icon3="fa-solid fa-magnifying-glass" />
            })}
            </div>  
            <div className={style3}>
            {products[2].map((fd)=>{
              return <ProductItem photo1={fd.img} photo2={fd.img1} title={fd.title} model={fd.model} price={fd.price} text={fd.text} button={fd.button}
              icon1="fa-regular fa-heart" icon3="fa-solid fa-magnifying-glass" />
            })}
            </div>  


        
        </div>
      </div>
    )
  }

export default Products;