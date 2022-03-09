import React, { useEffect, useState, useContext } from "react";
import { Card } from "antd";
import Axios from "axios";
import "./style/Products.css";
import { ProductContext } from "./context/ProductContext";

export default function Product() {

  const { cart, setCart } = useContext(ProductContext);

  const [product, setProduct] = useState([]);
  const [adds, setAdds] = useState([]);

  const { Meta } = Card;

  const handleOnClick = (e) => {
    setCart(() => {
      return [...cart, e];
    });
  };

  const add = () => {
    setAdds((id) => {
      return [...adds, id];
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3000/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <h2 className="heading">PRODUCTS</h2>

      <div className="container">
        <div className="productGrid">
          {product.map((data, key) => {
            return (
              <Card
                key={key}
                hoverable={false}
                cover={
                  <img alt="example" src={data.imgdata} className="cardImg" />
                }
                className="productCard"
              >
                <Meta title={data.rname} description={data.address} />
                <button
                  onClick={() => {
                    handleOnClick(data);
                    add(data.id);
                  }}
                >
                  Add to cart
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
