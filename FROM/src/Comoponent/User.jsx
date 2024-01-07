import React, { useReducer, useState } from "react";
import Notification from "./Notification";

const reducer = (state, action) => {
  if (action.type === "input") {
    return { value: action.value, isValid: action.value.trim().includes("@") };
  }
  return state;
};

const User = (props) => {
  const [name, setName] = useState("");
  const [email, dispatch] = useReducer(reducer, { value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: false });

  const user_name = (e) => {
    setName(e.target.value);
  };

  const user_email = (e) => {
    dispatch({ type: "input", value: e.target.value });
  };

  const user_password = (e) => {
    const value = e.target.value;
    setPassword({ value, isValid: value.trim().length > 7 });
  };

  const submit_the_form = (e) => {
    e.preventDefault();

    const obj = {
      Username: name,
      Useremail: email.value,
      Userpassword: password.value,
    };

    props.ondataUser(obj);
    setName("");
    dispatch({ type: "input", value: "" });
    setPassword({ value: "", isValid: false });
  };

  return (
    <>
      {!email.isValid && <Notification />}
      <div>
        <form onSubmit={submit_the_form}>
          <label htmlFor="user-name">User Name :</label>
          <input type="text" id="user-name" value={name} onChange={user_name} />
          <br />
          <br />
          <label htmlFor="email">Email id :</label>
          <input
            type="text"
            id="email"
            onChange={user_email}
            value={email.value}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Please put your password here"
            onChange={user_password}
            value={password.value}
          />
          <br />
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default User;
