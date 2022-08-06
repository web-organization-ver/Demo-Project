import React, { useState, useEffect } from "react";

const Success = ({ data }) => {
  const [address, setaddress] = useState("");
  const [balance, setbalance] = useState(-10.0);
  useEffect(() => {
    if (address === "") {
      setaddress(data.address);
    }
    setbalance(data.Balance);
  }, [data]);

  let sliceval, xval;
  xval = 21;
  sliceval = address.length - xval;
  return (
    <div>
      {data.balance === "" ? (
        <h1>Just a moment</h1>
      ) : (
        <div>
          <h1>Success</h1>
          <div>
            Your details
            <h3>
              {address.slice(0, sliceval)}
              {[...Array(xval)].map((elementInArray, index) => (
                <span key={index}>X</span>
              ))}
            </h3>
            <h3>{address}</h3>
            <h3>{balance}</h3>
          </div>
          <button onClick={() => console.log(address + " " + balance)}>
            Show
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
