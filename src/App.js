import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardwallet from "./cardwallet";
import Success from "./Success";
import Nftdata from "./Nftdata";
import Telegram from "./Telegram";

function App() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const [nft, setnft] = useState(null);
  const [val, setval] = useState(0);
  useEffect(() => {
    console.log("NFT : ", nft);
    // if (nft != null) {
    // console.log(nft[0].chain);
    // console.log(nft[0].collectionAddress);
    // console.log(nft[0].collectionName);
    // console.log(nft[0].collectionTokenId);
    // console.log(nft[0].currentOwner);
    // console.log(nft[0].description);
    // console.log(nft[0].imageUrl);
    // console.log(nft[0].name);
    // console.log(nft[0].network);
    // }
  }, [nft]);

  useEffect(() => {
    console.log("Value : ", val);
  }, [val]);

  return (
    <div className="App">
      {data.address === "" ? (
        <Cardwallet data={data} setdata={setdata} nft={nft} setnft={setnft} />
      ) : nft === null ? (
        <Success data={data} />
      ) : val === 0 ? (
        <>
          <Success data={data} />
          <Nftdata nft={nft} val={val} setval={setval} />
        </>
      ) : (
        <>
          <Success data={data} />
          <Telegram />
          <Nftdata nft={nft} val={val} setval={setval} />
        </>
      )}
    </div>
  );
}

export default App;
