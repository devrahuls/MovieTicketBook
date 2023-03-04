import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import formCSS from "./form.module.css";

function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const win = window.sessionStorage;

  const handleSubmit = (e) => {
    e.preventDefault();
    win.clear();
    setName("");
    setEmail("");
    setPhone("");
  };

  useEffect(() => {
    if (win.getItem("name")) setName(win.getItem("name"));
    if (win.getItem("email")) setEmail(win.getItem("email"));
    if (win.getItem("phone")) setPhone(win.getItem("phone"));
  }, []);

  useEffect(() => {
    win.setItem("name", name);
    win.setItem("email", email);
    win.setItem("phone", phone);
  }, [name, email, phone]);

  const location = useLocation();
  const data = location.state.data;

  return (
    <>
      <div className={formCSS.container}>
        <section>
          <div className={formCSS.about}>
            <h1>Book your ticket for "{data.formName}" movie</h1>
            <h3>Premiered on: {data.formPremiered != null ? data.formPremiered : "-No Date-" }</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={formCSS.field}>
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={formCSS.field}>
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={formCSS.field}>
              <label htmlFor="">Phone No.</label>
              <br />
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className={formCSS.field}>
              <button type="Submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default Form;
