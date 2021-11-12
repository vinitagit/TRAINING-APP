import CartProduct from "./CartProduct";
import deleteIcon from "./../assets/DeleteImage.png";
import {connect} from "react-redux";
import Header from "./Header";
import CartSummary from "./CartSummary";
import {useEffect, useState} from "react";
const CartItem =({cartValue})=>{
    const [totalPrice, setTotalPrice]= useState(0);
    const [totalItems, setTotalItems]= useState(0);
    
    useEffect(()=>{
     let items= 0;
     let price = 0;
     cartValue.forEach(item => {
         items += item.qty;
         price += item.qty * item.price;
     });
     setTotalPrice(price);
     setTotalItems(items);
    },[cartValue,totalPrice,totalItems ])
    return (
        <div>
            <Header className="header" headerName="Cart" isCartPresent={false}/>
            <div className="productTable" style={{float:"left"}}>
            <table style={{marginTop:"20px"}} width="60%">
                <thead><tr>
                    <th>  
                        Item
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Item price
                    </th>
                    <th>
                        Total
                    </th>
        </tr></thead>
        <tbody></tbody>
      </table>
           { cartValue.map((cloth)=><CartProduct productData={cloth} img={deleteIcon}/>)}
           </div>
           <div style={{float:"right"}}>
         <CartSummary price={totalPrice} items={totalItems}/>
           </div>

        </div>

    )

}

const mapStateToProps=(state)=>{
    return {
        cartValue: state.shop.cart
    }
}
export default connect(mapStateToProps)(CartItem);