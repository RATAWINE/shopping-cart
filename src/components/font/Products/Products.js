import React from 'react'
import "./Products.css";


const Products = ({productItems, handleAddProduct}) => {
    return (
        <div className="products">
            {productItems.map((productItem) =>
            <div className="card">
                <div className="image-container">
                <img src={productItem.image} alt=""className="product-image"/>
                </div>
                <div>
                    <h3 className="product-name">
                        {productItem.name}
                    </h3>
                </div>
                <div className="product-price">{productItem.price}</div>
                
                    <div className="">
                    <button className="product-add-to-card" onClick={ () =>handleAddProduct(productItem)}>Add to Cart</button>
                    </div>
                </div>
            
            )}
        </div>
    );
}

export default Products
