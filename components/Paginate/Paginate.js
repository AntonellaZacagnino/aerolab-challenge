import ReactPaginate from "react-paginate";
import React, {
    useContext,
  useEffect,
  useState
} from 'react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import styles from './Paginate.module.scss'
import Icon from '@mdi/react'
import { ProductsContext } from "../../context/productsContext";

export default function Paginate({ itemsPerPage }){
    const {products} = useContext(ProductsContext)
    const items = [...products.keys()];
    function Items({ currentItems }) {
      return (
        <div className="items">
        {currentItems && currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
          </div>
      );
    }
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
    }, [itemOffset, itemsPerPage]);
    
    
    // Invoke when user click to request another page.
    const handlePageClick = (page) => {
        console.log(page);
      const newOffset = event.selected * itemsPerPage % items.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };

    return (
      <div style={{display: 'contents'}}>
        <Icon className={styles.prevBtn} onClick={() => handlePageClick(pageCount)}  path={mdiChevronLeft} />
        <span> Page 1 of 2</span>
        <Icon className={styles.nextBtn} onClick={() => handlePageClick(pageCount)} path={mdiChevronRight} />
        {/* <ReactPaginate
          nextLabel={<Icon path={mdiChevronRight} />}
          onPageChange={handlePageClick}
        //   pageRangeDisplayed={0}
        //   marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<Icon path={mdiChevronLeft} />}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.prevBtn}
          previousLinkClassName="page-link"
          nextClassName={styles.nextBtn}
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pages"
          activeClassName="active"
          renderOnZeroPageCount={null}
        > Page {pageCount} </ReactPaginate> */}
      </div>
    );
}





