import styles from './Filters.module.scss'
import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from '../../context/productsContext';
import ReactPaginate from "react-paginate";

function Filters() {
    const [filter, setFilter] = useState(0)
    const {products, sortLowest, sortHighest, sortRecent, filterCategory, itemsPerPage, setItemOffset, itemOffset, setLoading} = useContext(ProductsContext);
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

    
    const pageCount = Math.ceil(products.length / itemsPerPage)
    
    function pageLabel(page){
      return 'Page ' + page + ' of ' + pageCount;
    }
    function handlePageClick(event) {
      const newOffset = event.selected * itemsPerPage % products.length;
      setLoading(true);
      setItemOffset(newOffset);
    };
      useEffect(() =>{
        filterCategory(category)
    }, [category, itemOffset,itemsPerPage])
    return (
        <ul className={styles.filterNav}>
          <div className={styles.filterContainer}>
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
            <div>
              <button className={filter == 1 ? styles.active : styles.filterBtn} onClick={() => handleFilter(1, 'recent')} id='recent'>
                <span className={`${styles.filterResponsive} ${styles.filterNew}`}></span>
                <span className={styles.filterDesktop}>
                  Most Recent
                </span>
              </button>
              <button className={filter == 2 ? styles.active : styles.filterBtn} onClick={() => handleFilter(2, 'lowest')} id='lowest'>
                <span className={`${styles.filterResponsive} ${styles.filterLow}`}></span>
                <span className={styles.filterDesktop}>
                  Lowest Price
                </span>
              </button>
              <button className={filter == 3 ? styles.active : styles.filterBtn} onClick={() => handleFilter(3, 'highest')} id='highest'>
                <span className={`${styles.filterResponsive} ${styles.filterHigh}`}></span>
                <span className={styles.filterDesktop}>
                  Highest Price
                </span>
              </button>
            </div>
          </li>
          </div>
          <ReactPaginate
            nextLabel=""
            onPageChange={handlePageClick}
            pageRangeDisplayed={0}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            previousLabel=''
            pageClassName={styles.pageCount}
            previousLinkClassName={styles.prevBtn}
            nextLinkClassName={styles.nextBtn}
            pageLabelBuilder={(pageCount) => pageLabel(pageCount)}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={styles.pages}
            activeClassName="active"
          />
        </ul>
    )
}

export default Filters
