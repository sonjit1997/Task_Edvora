import React, { useState } from "react";
import "../Style/Start.css";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const [name, setName] = useState("");
  const [id, setid] = useState("");

  const navigate = useNavigate();

  const handelClick = () => {
    if (name == "" || id == "") {
      alert("Enter your shop details first");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("userId", id);
      navigate("/home");
    }
  };

  return (
    <div className=" text">
      <img
        className="card-img"
        src="https://wallpapercave.com/wp/wp6974484.jpg"
        alt="Home page background"
        height={"745 px"}
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container">
          <h1 className="card-title">
            First we eat, then we do everything else.
          </h1>
          <div className="start mt-4">
            <form>
              <input
                className=" m-2 p-2 "
                type="text"
                placeholder="Enter Shop name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className=" m-2 p-2"
                type="text"
                placeholder="Enter your shop id"
                id="userId"
                value={id}
                onChange={(e) => setid(e.target.value)}
              />

              <button
                className="btn  btn-danger mt-2  ms-3"
                onClick={handelClick}
              >
                <h4 className="text text-light">Get Started</h4>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
