import React, { useState, useEffect } from "react";
import User from "./User";

function Product() {
  const [array, setArray] = useState([]);
  const [electronic, setElectronic] = useState(false);
  const [food, setFood] = useState(false);
  const [skin, setSkin] = useState(false);

  const onProduct = (obj) => {
    setArray((prev) => [obj, ...prev]);
  };

  useEffect(() => {
    let electronicFlag = false;
    let foodFlag = false;
    let skinFlag = false;

    array.forEach((obj) => {
      if (obj.usercategory === "Electronic items") {
        electronicFlag = true;
      } else if (obj.usercategory === "Food items") {
        foodFlag = true;
      } else if (obj.usercategory === "Skincare items") {
        skinFlag = true;
      }
    });

    array.map((obj) => {
      localStorage.setItem(obj.userid, JSON.stringify(obj));
    });

    setElectronic(electronicFlag);
    setFood(foodFlag);
    setSkin(skinFlag);
  }, [array]);

  const handleDelete = (id) => {
    setArray((prev) => prev.filter((obj) => obj.userid !== id));
    localStorage.removeItem(id);
  };

  return (
    <>
      <User onuserfunction={onProduct} />
      <div>
        <h1>Electronic Items</h1>
        {electronic &&
          array
            .filter((obj) => obj.usercategory === "Electronic items")
            .map((obj) => (
              <div key={obj.userid}>
                Product id: {obj.userid} Product price: {obj.userprice} Product
                Name: {obj.userproductname}
                <button onClick={() => handleDelete(obj.userid)}>
                  Delete Product
                </button>
              </div>
            ))}
      </div>

      <div>
        <h1>Food Items</h1>
        {food &&
          array
            .filter((obj) => obj.usercategory === "Food items")
            .map((obj) => (
              <div key={obj.userid}>
                Product id: {obj.userid} Product price: {obj.userprice} Product
                Name: {obj.userproductname}
                <button onClick={() => handleDelete(obj.userid)}>
                  Delete Product
                </button>
              </div>
            ))}
      </div>

      <div>
        <h1>Skincare items</h1>
        {skin &&
          array
            .filter((obj) => obj.usercategory === "Skincare items")
            .map((obj) => (
              <div key={obj.userid}>
                Product id: {obj.userid} Product price: {obj.userprice} Product
                Name: {obj.userproductname}
                <button onClick={() => handleDelete(obj.userid)}>
                  Delete Product
                </button>
              </div>
            ))}
      </div>
    </>
  );
}

export default Product;
