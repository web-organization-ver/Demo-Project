import React from "react";

const Showcard = ({ key, cadd, cname, ctid, cowner, cdesc, name, network }) => {
  return (
    <>
      <h1>New NFT</h1>
      <div>{cadd}</div>
      <div>{cname}</div>
      <div>{ctid}</div>
      <div>{cowner}</div>
      <div>{cdesc}</div>
      <div>{name}</div>
      <div>{network}</div>
      <br />
      <br />
    </>
  );
};

export default Showcard;
