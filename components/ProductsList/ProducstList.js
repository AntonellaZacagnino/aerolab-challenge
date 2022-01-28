import React, { useContext, useState, useEffect } from "react";
import styles from './ProductsList.module.scss'
import Image from "next/image";
import icon from '../../public/images/redeem-icon.svg'
import notAvaiable from '../../public/images/not-avaiable-icon.svg'
import { CoinsContext } from "../../context/coinsContext";
import { ProductsContext } from "../../context/productsContext";

export const ProductsList = () => {
    const {coins} = useContext(CoinsContext);
    const {products, getProducts} = useContext(ProductsContext);
    
   useEffect(() =>{
      handleProducts();
  }, [])   
    function handleProducts() {
            getProducts()
    }
    
    return (
        <ul className={styles.products}  >
            { products.length > 0 ?
              products.map((product) => 
                <li className={styles.productContainer} key={product._id}> 
                    <div className={styles.card}>
                        <img className={styles.image} src={product.img.url} alt={product.name}/>
                        <div className={styles.description}>
                            <h6>{product.name}</h6>
                            <span>{product.category}</span>
                        </div>
                    </div>
                    <div>
                        {coins > product.cost ? 
                            <button className={styles.redeem}> 
                                Redeem for <Image className={styles.image} src={icon} alt='coin-icon'/> {product.cost}
                            </button>
                            :
                            <button className={styles.notAvaiable}> 
                               You need <Image className={styles.image} src={notAvaiable} alt='coin-icon' /> {product.cost - coins}
                            </button>
                        }
                    </div>
                </li>)
            :
            <p>Loading...</p>
            }
        </ul>
    )
}   