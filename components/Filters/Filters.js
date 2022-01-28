import Icon from '@mdi/react'
import styles from './Filters.module.scss'
// import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from '../../context/productsContext';
import Paginate from '../Paginate/Paginate';

export default function Filters() {
    const [filter, setFilter] = useState(0)
    const {products, sortLowest, sortHighest, sortRecent, filterCategory} = useContext(ProductsContext);
    const [category, setCategory] = useState('')
    
    function handleFilter(number, type){
      setFilter(number);
      switch (type) {
        case 'recent':
          sortRecent(products)
          break;
        case 'lowest':
          sortLowest(products)
          break;
        case 'highest':
          sortHighest(products)
        default:
          break;
      }
    }
      
      useEffect(() =>{
        filterCategory(category)
    }, [category])
    return (
        <ul className={styles.filterNav}>
          <li className={styles.filter}>
            <span>Filter by:</span>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option >All products</option>
              <option >Gaming</option>
              <option >Phones</option>
              <option> Phone Accessories</option>
              <option >Laptops</option>
              <option >Cameras</option>
              <option >Audio</option>
              <option >Smart Home</option>
              <option >Monitors & TV</option>
            </select>
          </li>
          <li className={styles.sort}>
            <span>Sort by:</span>
            <button className={filter == 1 ? styles.active : styles.filterBtn} onClick={() => handleFilter(1, 'recent')} id='recent'>
              <span>
                Most Recent
              </span>
              </button>
            <button className={filter == 2 ? styles.active : styles.filterBtn} onClick={() => handleFilter(2, 'lowest')} id='lowest'>
              <span>
                Lowest Price
              </span>
              </button>
            <button className={filter == 3 ? styles.active : styles.filterBtn} onClick={() => handleFilter(3, 'highest')} id='highest'>
              <span>
                Highest Price
              </span>
              </button>
          </li>
          <li className={styles.pages}>
            <Paginate itemsPerPage={16}  />
          </li>
          {/* <li className={styles.pages}>
            <Icon className={styles.prevBtn}  path={mdiChevronLeft} />
            <span> Page 1 of 2</span>
            <Icon className={styles.nextBtn} path={mdiChevronRight} />
          </li> */}
        </ul>
    )
}