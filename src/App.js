import React, { useState } from "react";
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
