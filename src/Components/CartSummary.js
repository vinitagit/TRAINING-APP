import "./CartSummary.css";
const CartSummary=(props)=>{
    const price = props.price;

    return (
        <div>
        <div className="cartSummary">
               <ul className="cartSummaryUl">
                   <li key="{props.key+1}">SUBTOTAL  <span>{price}</span>
                   </li><br/>
                   <li key="{props.key+2}">DISCOUNT  <span>5%</span></li><br/>
                   <li key="{props.key+3}">TAX   <span>{(2 / 100)*price}</span></li><br/>
                   <li key="{iteprops.key+4}">TOTAL   <span>{price - ((5/100)*price) + ((2/100)*price) }</span></li><br/>
                   </ul>
           </div>
           <button className="checkoutButton">Checkout</button>
           </div>
     )

}

export default CartSummary;