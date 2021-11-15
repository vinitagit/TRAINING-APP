import Header from "./Header";
import store from "./../store";
import {connect} from "react-redux";
import Product from "./Product";
import Cart from "./Cart";
import {useState} from "react";
import ReactPaginate from "react-paginate";
import "./WomenClothing.css";


function WomenClothing({womenClothing}){
    const[items, setItems]=useState(womenClothing);
    const [pageNumber, setPageNumber]= useState(0);
    const itemsPerPage = 6
    const pagesVisited = pageNumber*itemsPerPage
    const displayItems=items.slice(pagesVisited, pagesVisited+itemsPerPage).map((cloth)=>
    <Product productData={cloth}/>)
    console.log('Items.length'+ items.length);
    console.log('Items'+ itemsPerPage);

    const PageCount = Math.ceil(items.length / itemsPerPage);
    const changePage = ({selected})=>{
        setPageNumber(selected);
    };


    return (
       <div>
          <Header className="header" headerName="Shopify" headerName1="Women Apparel" isCartPresent={true}/>
            {displayItems}
            <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={PageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}/>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        womenClothing : state.shop.womenClothing
    };
};

export default connect(mapStateToProps)(WomenClothing);