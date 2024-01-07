import { useState } from "react";

const User = (props) => {
  const [id, Setid] = useState(0);
  const [price, Setprice] = useState(0);
  const [productname, Setproductname] = useState("");
  const [Category, SetCategory] = useState("");

  const get_the_user_id = (event) => {
    Setid(event.target.value);
  };

  const get_the_price = (event) => {
    Setprice(event.target.value);
  };

  const get_the_product_name = (event) => {
    Setproductname(event.target.value);
  };

  const get_the_category = (e) => {
    SetCategory(e.target.value);
  };

  const submit_the_from = (e) => {
    e.preventDefault();
    const obj = {
      userid: String(id),
      userprice: String(price),
      userproductname: String(productname),
      usercategory: String(Category),
    };
    if (
      obj.userid.trim().length === 0 ||
      obj.userprice.trim().length === 0 ||
      obj.userproductname.trim().length === 0 ||
      obj.usercategory.trim().length === 0
    ) {
      return;
    } else {
      props.onuserfunction(obj);
    }
  };

  return (
    <>
      <div>
        <div>
          <label htmlFor="productid">PRODUCT ID :</label>
          <input id="productid" type="number" onChange={get_the_user_id} />

          <label htmlFor="selling">Selling Price :</label>
          <input type="text" id="number" onChange={get_the_price} />

          <label htmlFor="productname">Product Name :</label>
          <input type="text" id="productname" onChange={get_the_product_name} />

          <label htmlFor="choose">Choose a Category:</label>

          <select id="choose" onChange={get_the_category}>
            <option>Electronic items</option>
            <option>Food items</option>
            <option>Skincare items</option>
          </select>

          <div>
            <button onClick={submit_the_from}>Add item</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
