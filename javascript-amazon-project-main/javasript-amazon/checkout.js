// import {cart,removeFromCart} from '../data/cart.js';
// import { products } from '../data/products.js';
// import { formatCurrency } from './utils/money.js';

// let cartSummaryHTML='';

// cart.forEach((cartItem)=>{
//     const productId=cartItem.productId;
//     let matchingProduct;

//     products.forEach((product)=>{
//         if(product.id===productId){
//             matchingProduct=product;
//         }
//     });
//     cartSummaryHTML+=
//     `
//     <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
//     <div class="delivery-date">
//       Delivery date: Tuesday, June 21
//     </div>

//     <div class="cart-item-details-grid">
//       <img class="product-image"
//         src="${matchingProduct.image}">

//       <div class="cart-item-details">
//         <div class="product-name">
//         ${matchingProduct.name}
//         </div>
//         <div class="product-price">
//           $${formatCurrency(matchingProduct.priceCents)}
//         </div>
//         <div class="product-quantity">
//           <span>
//             Quantity: <span class="quantity-label">${cartItem.quantity}</span>
//           </span>
//           <span class="update-quantity-link link-primary">
//             Update
//           </span>
//           <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
//             Delete
//           </span>
//         </div>
//       </div>

//       <div class="delivery-options">
//         <div class="delivery-options-title">
//           Choose a delivery option:
//         </div>
//         <div class="delivery-option">
//           <input type="radio" checked
//             class="delivery-option-input"
//             name="delivery-option-${matchingProduct.id}">
//           <div>
//             <div class="delivery-option-date">
//               Tuesday, June 21
//             </div>
//             <div class="delivery-option-price">
//               FREE Shipping
//             </div>
//           </div>
//         </div>
//         <div class="delivery-option">
//           <input type="radio"
//             class="delivery-option-input"
//             name="delivery-option-${matchingProduct.id}">
//           <div>
//             <div class="delivery-option-date">
//               Wednesday, June 15
//             </div>
//             <div class="delivery-option-price">
//               $4.99 - Shipping
//             </div>
//           </div>
//         </div>
//         <div class="delivery-option">
//           <input type="radio"
//             class="delivery-option-input"
//             name="delivery-option-${matchingProduct.id}">
//           <div>
//             <div class="delivery-option-date">
//               Monday, June 13
//             </div>
//             <div class="delivery-option-price">
//               $9.99 - Shipping
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     `
//     ;
// });

// document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;
// document.querySelectorAll('.js-delete-link').forEach((link)=>{
//   link.addEventListener('click',()=>{
//     const productId=link.dataset.productId;
//     removeFromCart(productId);
//     console.log(cart);

//     const container =document.querySelector(`.js-cart-item-container-${productId}`);
//   });
// });
// console.log(cartSummaryHTML);
import {cart, removeFromCart,calculateCartQuantity} from '../data/cart.js';
import {products,getProduct} from '../data/products.js';
import {formatCurrency} from './utils/money.js';


let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  const matchingProduct=getProduct(productId);

  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link"
            data-product-id="${matchingProduct.id}">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

      
      </div>
    </div>
  `;
});

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
console.log(cart);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      function updateCartQuantity() {
        const cartQuantity = calculateCartQuantity();
        document.querySelector('.js-return-to-home-link')
          .innerHTML = `${cartQuantity} items`;
      }
      
      updateCartQuantity();
    });
  });
  let cartQuantity = 0;

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});


document.querySelector('.js-return-to-home-link')
  .innerHTML = `${cartQuantity} items`;


function renderPaymentSummary(){
    let productPriceCents=0;
    cart.forEach((cartItem)=>{
      const product=getProduct(cartItem.productId);
productPriceCents+= product.priceCents*cartItem.quantity;
    });
    console.log(productPriceCents);

     
    const PaymentSummaryHTML=`
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$$5</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)+formatCurrency(productPriceCents)*0.01}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$52.51</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;
          document.querySelector('.js-payment-summary')
  .innerHTML = PaymentSummaryHTML;
  }
  
  renderPaymentSummary();
  
// import {cart, removeFromCart,
//   calculateCartQuantity} from '../data/cart.js';
// import {products} from '../data/products.js';
// import {formatCurrency} from './utils/money.js';

// let cartSummaryHTML = '';

// cart.forEach((cartItem) => {
//   const productId = cartItem.productId;

//   let matchingProduct;

//   products.forEach((product) => {
//     if (product.id === productId) {
//       matchingProduct = product;
//     }
//   });

//   cartSummaryHTML += `
//     <div class="cart-item-container
//       js-cart-item-container-${matchingProduct.id}">
//       <div class="delivery-date">
//         Delivery date: Tuesday, June 21
//       </div>

//       <div class="cart-item-details-grid">
//         <img class="product-image"
//           src="${matchingProduct.image}">

//         <div class="cart-item-details">
//           <div class="product-name">
//             ${matchingProduct.name}
//           </div>
//           <div class="product-price">
//             $${formatCurrency(matchingProduct.priceCents)}
//           </div>
//           <div class="product-quantity">
//             <span>
//               Quantity: <span class="quantity-label">${cartItem.quantity}</span>
//             </span>
//             <span class="update-quantity-link link-primary js-update-link"
//               data-product-id="${matchingProduct.id}">
//               Update
//             </span>
//             <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
//               Delete
//             </span>
//           </div>
//         </div>

//         <div class="delivery-options">
//           <div class="delivery-options-title">
//             Choose a delivery option:
//           </div>
//           <div class="delivery-option">
//             <input type="radio" checked
//               class="delivery-option-input"
//               name="delivery-option-${matchingProduct.id}">
//             <div>
//               <div class="delivery-option-date">
//                 Tuesday, June 21
//               </div>
//               <div class="delivery-option-price">
//                 FREE Shipping
//               </div>
//             </div>
//           </div>
//           <div class="delivery-option">
//             <input type="radio"
//               class="delivery-option-input"
//               name="delivery-option-${matchingProduct.id}">
//             <div>
//               <div class="delivery-option-date">
//                 Wednesday, June 15
//               </div>
//               <div class="delivery-option-price">
//                 $4.99 - Shipping
//               </div>
//             </div>
//           </div>
//           <div class="delivery-option">
//             <input type="radio"
//               class="delivery-option-input"
//               name="delivery-option-${matchingProduct.id}">
//             <div>
//               <div class="delivery-option-date">
//                 Monday, June 13
//               </div>
//               <div class="delivery-option-price">
//                 $9.99 - Shipping
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// });

// document.querySelector('.js-order-summary')
//   .innerHTML = cartSummaryHTML;

// document.querySelectorAll('.js-delete-link')
//   .forEach((link) => {
//     link.addEventListener('click', () => {
//       const productId = link.dataset.productId;
//       removeFromCart(productId);

//       const container = document.querySelector(
//         `.js-cart-item-container-${productId}`
//       );
//       container.remove();

//       updateCartQuantity();
//     });
//   });

// function updateCartQuantity() {
//   const cartQuantity = calculateCartQuantity();

//   document.querySelector('.js-return-to-home-link')
//     .innerHTML = `${cartQuantity} items`;
// }

// updateCartQuantity();

// document.querySelectorAll('.js-update-link')
//   .forEach((link) => {
//     link.addEventListener('click', () => {
//       const productId = link.dataset.productId;
//       console.log(productId);
//     });
//   });