import React from "react";
import Client1 from "../../assets/images/client image/Client1.svg";
import Client2 from "../../assets/images/client image/Client2.svg";
import Client3 from "../../assets/images/client image/Client3.svg";
import Client4 from "../../assets/images/client image/Client4.svg";
import Client5 from "../../assets/images/client image/Client5.svg";
import Client6 from "../../assets/images/client image/Client6.svg";
import Client7 from "../../assets/images/client image/Client7.svg";
import Client8 from "../../assets/images/client image/Client8.svg";
import Client9 from "../../assets/images/client image/Client9.svg";

const Clients = () => {
  return (
    <div className="container">

    <div className="service-title-text my-5">
    <div>
      <p className="service-text mb-0">OUR CLIENTS</p>
      <div className="client-border">
        <div className="client-text-line"></div>
      </div>
    </div>
  </div>


      <div className="d-flex align-items-center justify-content-center flex-wrap client-images">
           <img src={Client1} alt='clients' className="img-fluid client-img"></img>
           <img src={Client2} alt='clients' className="img-fluid client-img"></img>
           <img src={Client3} alt='clients' className="img-fluid client-img"></img>
           <img src={Client4} alt='clients' className="img-fluid client-img"></img>
           <img src={Client5} alt='clients' className="img-fluid client-img"></img>
           <img src={Client6} alt='clients' className="img-fluid client-img"></img>
           <img src={Client7} alt='clients' className="img-fluid client-img"></img>
           <img src={Client8} alt='clients' className="img-fluid client-img"></img>
           <img src={Client9} alt='clients' className="img-fluid client-img"></img>
      </div>


    </div>
  );
};

export default Clients;
