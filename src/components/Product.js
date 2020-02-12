import React from "react";

import { Link } from "react-router-dom";
import Moment from "react-moment";

function Product({ product }) {
  const productLink = "/offer/" + product._id;

  return (
    <Link to={productLink}>
      <li>
        <div className="product-ima">
          {product.pictures[0] ? (
            <img src={product.pictures[0]} alt="no image" />
          ) : (
            <img
              src="https://advancepetproduct.com/wp-content/uploads/2019/04/no-image.png"
              alt={product.title}
            />
          )}
        </div>
        <div className="product-infos">
          <div>
            <h2>{product.title}</h2>
            {product.price > 0 && <span>{product.price} €</span>}
          </div>
          <div>
            <Moment format="DD/MM/YYYY à h:m:s">{product.created}</Moment>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default Product;
