import React from 'react';
import categories from './categories';
function Searchedthings({ searchvalue }) {
  return (
    <>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className="products">
            {category.products
              .filter((product) =>
                product.model.toLowerCase().includes(searchvalue.toLowerCase())
              )
              .map((filteredProduct) => (
                <div key={filteredProduct.id} className="product">
                  <img src={filteredProduct.image} alt={filteredProduct.model} />
                  <p>Model: {filteredProduct.model}</p>
                  <p>Price: {filteredProduct.price}</p>
                  <button onClick={() => addToCart(filteredProduct)} className="add-button">+</button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Searchedthings;
