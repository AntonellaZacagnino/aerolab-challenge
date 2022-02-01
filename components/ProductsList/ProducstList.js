import React, { useContext, useState, useEffect } from "react";
import styles from './ProductsList.module.scss'
import Image from "next/image";
import icon from '../../public/images/redeem-icon.svg'
import notAvaiable from '../../public/images/not-avaiable-icon.svg'
import { CoinsContext } from "../../context/coinsContext";
import { ProductsContext } from "../../context/productsContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BarLoader from "react-spinners/BarLoader";

export const ProductsList = () => {
    const {coins, removeCoins} = useContext(CoinsContext);
    const {products, getProducts, itemsPerPage, itemOffset, currentItems, loading} = useContext(ProductsContext);
    const [redeemIsActive, setRedeemIsActive] = useState(0)
    const [item, setItem] = useState([])
    const [ev, setEv] = useState()

    const override = `
        display: block;
        margin: 100px auto;
        border-color: red;
    `;

    const endOffset = itemOffset + itemsPerPage;

    function handleProducts() {
        getProducts()
    }
    
    function handleRedeem(product, event){
        setItem(product)
        setEv(event)
        setRedeemIsActive(redeemIsActive == 0 ? 1 : 0)
    }


    function redeemItem(product,ev){
        removeCoins(product.cost)
        toast.success( 
                <div>
                    <span style={{ fontWeight: "bold", color: "#252F3D" }}>{product.name}</span>{" "}
                    redeemed successfully
                </div>)
        setRedeemIsActive(0)
    }
    useEffect(() =>{
        handleProducts();
        if ( item.length != 0){
            redeemItem(item, ev)
        }
   }, [item, ev, itemOffset])   

   return (
        <ul className={styles.products}  >
            { !loading ?
              products.slice(itemOffset, endOffset).map((product) => 
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
                            <button onClick={(e) => handleRedeem(product, e)} className={styles.redeem}> 
                                <p className={styles.redeemText}>
                                    Redeem for <Image className={styles.image} src={icon} alt='coin-icon'/> {product.cost}
                                </p>
                            </button>
                            :
                            <button className={styles.notAvaiable}> 
                               You need <Image className={styles.image} src={notAvaiable} alt='coin-icon' /> {product.cost - coins}
                            </button>
                        }
                        <ToastContainer position="bottom-left" autoClose={3000} hideProgressBar newestOnTop={false} closeOnClick={false} rtl={false} draggable={false} pauseOnHover={false}/>
                    </div>
                </li>)
            :
            <BarLoader color={"#8FA3BF"} loading={loading} css={override} height={5} width={300} speedMultiplier={3} />
            }
        </ul>
    )
}   