import React from 'react'
import TopDiscounts from './TopDiscounts';
import './main.css';


const Upper = ({productList}) => {
  return (
    <>
    <section className='upper'>
        <div className="container d_block">
            <TopDiscounts productList={productList}/>
        </div>

    </section>
    </>
  )
}

export default Upper