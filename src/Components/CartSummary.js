import "./CartSummary.css";
const CartSummary=(props)=>{
    const price = props.price;

    return (
        <div>
        <div className="cartSummary">
               <ul className="cartSummaryUl">
                   <li>SUBTOTAL  <span>{price}</span>
                   </li><br/>
                   <li>DISCOUNT  <span>5%</span></li><br/>
                   <li>TAX   <span>{(2 / 100)*price}</span></li><br/>
                   <li>TOTAL   <span>{price - ((5/100)*price) + ((2/100)*price) }</span></li><br/>
                   </ul>
           </div>
           <button className="checkoutButton">Checkout</button>
           </div>
     )

}

export default CartSummary;