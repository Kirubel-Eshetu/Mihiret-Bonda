import React from "react";
import "./Products.css";

const Products = () => {
    return (
        <section id="product_service">
            <h2>Products & Services 👕👟</h2>
            <article>
                <p>These are the products and services offered in Mihiret Bonda Store: </p>
                <ul className="services">
                    <li><strong>Adult man and woman bonda cloths</strong></li>
                    <li><strong>Adult man and woman bonda shoes</strong></li>
                    <li><strong>Children shoes and cloths</strong></li>
                    <li><strong>Detergents for cloths and utensils</strong></li>
                    <li><strong>Ethio-telecom airtime and packages with desired amounts</strong></li>
                    <li><strong>Telebirr agent services</strong></li>
                    <li><strong>Safaricom airtime and packages with desired amounts</strong></li>
                    <li><strong>M-Pesa agent services</strong></li>
                    <li><strong>Electricity, water, airlines and National Id printing payments</strong></li>
                </ul>
            </article>
        </section>
    )
};

export default Products;