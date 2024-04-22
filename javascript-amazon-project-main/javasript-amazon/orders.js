// import {cart,} from '../data/cart.js';
// import {products,getProduct} from '../data/products.js';
// import {formatCurrency} from './utils/money.js';

// let productPriceCents=0;
// function renderPaymentSummary(){
    
//     cart.forEach((cartItem)=>{
//       const product=getProduct(cartItem.productId);
// productPriceCents+= product.priceCents*cartItem.quantity;
//     });
//     console.log(productPriceCents);
// }
// renderPaymentSummary();
// let cartSummaryHTML = '';

// cart.forEach((cartItem) => {
//   const productId = cartItem.productId;

//   const matchingProduct=getProduct(productId);

//   cartSummaryHTML += `

//   <div class="orders-grid">
//         <div class="order-container js-order-container">
          
//           <div class="order-header">
//             <div class="order-header-left-section">
//               <div class="order-date">
//                 <div class="order-header-label">Order Placed:</div>
//                 <div>August 12</div>
//               </div>
//               <div class="order-total">
//                 <div class="order-header-label">Total:</div>
//                 <div>$${formatCurrency(productPriceCents)}</div>
//               </div>
//             </div>

//             <div class="order-header-right-section">
//               <div class="order-header-label">Order ID:</div>
//               <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
//             </div>
//           </div>

//           <div class="order-details-grid">
//             <div class="product-image-container">
//             <img class="product-image"
//             src="${matchingProduct.image}">
//             </div>

//             <div class="product-details">
//             <div class="product-name">
//             ${matchingProduct.name}
//           </div>
//               <div class="product-delivery-date">
//                 Arriving on: August 15
//               </div>
//               <div class="product-quantity">
//                 Quantity: 1
//               </div>
//               <button class="buy-again-button button-primary">
//                 <img class="buy-again-icon" src="images/icons/buy-again.png">
//                 <span class="buy-again-message">Buy it again</span>
//               </button>
//             </div>

//             <div class="product-actions">
//               <a href="tracking.html">
//                 <button class="track-package-button button-secondary">
//                   Track package
//                 </button>
//               </a>
//             </div>

//         </div>
//       </div>
//     </div>
//   `;
// });

// document.querySelector('.js-order-container')
//   .innerHTML = cartSummaryHTML;
// import { cart } from '../data/cart.js';
// import { products, getProduct } from '../data/products.js';
// import { formatCurrency } from './utils/money.js';

// // Function to calculate the total price of products in the cart
// function calculateTotalPrice() {
//     let totalPrice = 0;
//     cart.forEach((cartItem) => {
//         const product = getProduct(cartItem.productId);
//         totalPrice += product.priceCents * cartItem.quantity;
//     });
//     return totalPrice;
// }

// // Function to render the payment summary
// function renderPaymentSummary() {
//     // Calculate the total price
//     const totalPrice = calculateTotalPrice();

//     // Render the total price to the UI
//     const totalElement = document.querySelector('.order-total-price');
//     if (totalElement) {
//         totalElement.textContent = formatCurrency(totalPrice);
//     }
// }

// // Generate the cart summary HTML
// let cartSummaryHTML = '';
// cart.forEach((cartItem) => {
//     const productId = cartItem.productId;
//     const matchingProduct = getProduct(productId);

//     cartSummaryHTML += `
//         <div class="order-details-grid">
//             <div class="product-image-container">
//                 <img class="product-image" src="${matchingProduct.image}">
//             </div>
//             <div class="product-details">
//                 <div class="product-name">${matchingProduct.name}</div>
//                 <div class="product-delivery-date">Arriving on: Tuesday, June 21</div>
//                 <div class="product-quantity">Quantity: ${cartItem.quantity}</div>
//                 <button class="buy-again-button button-primary">
//                     <img class="buy-again-icon" src="images/icons/buy-again.png">
//                     <span class="buy-again-message">Buy it again</span>
//                 </button>
//                 <a href="tracking.html">
//                     <button class="track-package-button button-secondary">Track package</button>
//                 </a>
//             </div>
//         </div>
//     `;
// });

// // Set the generated HTML to the order container
// const orderContainer = document.querySelector('.js-order-container');
// if (orderContainer) {
//     orderContainer.innerHTML = `
//         <div class="order-header">
//             <div class="order-header-left-section">
//                 <div class="order-date">
//                     <div class="order-header-label">Order Placed:</div>
//                     <div>August 12</div>
//                 </div>
//                 <div class="order-total">
//                     <div class="order-header-label">Total:</div>
//                     <div class="order-total-price">$0.00</div>
//                 </div>
//             </div>
//             <div class="order-header-right-section">
//                 <div class="order-header-label">Order ID:</div>
//                 <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
//             </div>
//         </div>
//         ${cartSummaryHTML}
//     `;
// }

// // Render the payment summary
// renderPaymentSummary();

import { cart } from '../data/cart.js';
import { products, getProduct } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

// Function to calculate the total price of products in the cart
function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        totalPrice += product.priceCents * cartItem.quantity;
    });
    return totalPrice;
}

// Function to render the payment summary
function renderPaymentSummary() {
    // Calculate the total price
    const totalPrice = calculateTotalPrice();

    // Render the total price to the UI
    const totalElement = document.querySelector('.order-total-price');
    if (totalElement) {
        totalElement.textContent = formatCurrency(totalPrice);
    }
}

// Generate the cart summary HTML
let cartSummaryHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);

    cartSummaryHTML += `
        <div class="order-details-grid">
            <div class="product-image-container">
                <img class="product-image" src="${matchingProduct.image}">
            </div>
            <div class="product-details">
                <div class="product-name">${matchingProduct.name}</div>
                <div class="product-delivery-date">Arriving on: Tuesday, June 21</div>
                <div class="product-quantity">Quantity: ${cartItem.quantity}</div>
                <button class="buy-again-button button-primary">
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                </button>
            </div>
        </div>
    `;
});

// Set the generated HTML to the order container
const orderContainer = document.querySelector('.js-order-container');
if (orderContainer) {
    orderContainer.innerHTML = `
        <div class="order-header">
            <div class="order-header-left-section">
                <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    <div>August 12</div>
                </div>
                <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div class="order-total-price">$0.00</div>
                </div>
            </div>
            <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
        </div>
        ${cartSummaryHTML}
        <div class="product-actions">
            <a href="tracking.html">
                <button class="track-package-button button-secondary">Track package</button>
            </a>
        </div>
    `;
}

// Render the payment summary
renderPaymentSummary();
