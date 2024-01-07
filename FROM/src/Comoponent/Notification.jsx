import React, { createPortal } from "react-dom";

function Notification() {
  return createPortal(
    <>
      <h1>Please fix the email errors</h1>,
    </>,
    document.getElementById("not")
  );
}

export default Notification;
