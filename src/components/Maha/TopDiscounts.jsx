import React from 'react'
import TopDCard from './TopDCard'
import './main.css';


const TopDiscounts = ({productList}) => {
  return (
    <>
      <section className='flash background'>
        <div className="container ">
          <div className='heading f_flex'>
          <i className="fa fa-bolt"></i>
          <h2>flash Deals</h2>
          </div>  
          <TopDCard productList={productList}/>
        </div>
      </section>
    </>
  )
}

export default TopDiscounts
