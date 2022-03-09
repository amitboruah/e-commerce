import React from "react";
import { useNavigate } from "react-router-dom"; 


export default function Error() {
const navigate = useNavigate()

  const redirect = () => {
    navigate("/")
  }


  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img src="./404.svg" alt="404" style={{ width: "600px", }} />
        <h1>404</h1>
        <h2>We are sorry, Page not Found!</h2>
        <p>
          The Page your are looking for might have been removed had its name
          changed and its temporarly unavailable
        </p>
        <button className="btn btn-primary col-lg-6" onClick={() => redirect()}>
          Home
        </button>
      </div>
    </>
  );
}
