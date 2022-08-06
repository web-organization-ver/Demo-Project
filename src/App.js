import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardwallet from "./cardwallet";
import Success from "./Success";
import Nftdata from "./Nftdata";

function App() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const [nft, setnft] = useState(null);
  useEffect(() => {
    console.log(nft);
    if (nft != null) {
      console.log(nft[0].chain);
      console.log(nft[0].collectionAddress);
      console.log(nft[0].collectionName);
      console.log(nft[0].collectionTokenId);
      console.log(nft[0].currentOwner);
      console.log(nft[0].description);
      console.log(nft[0].imageUrl);
      console.log(nft[0].name);
      console.log(nft[0].network);
    }
  }, [nft]);
  return (
    <div className="App">
      {data.address === "" ? (
        <Cardwallet data={data} setdata={setdata} nft={nft} setnft={setnft} />
      ) : nft === null ? (
        <Success data={data} />
      ) : (
        <>
          <Success data={data} />
          <Nftdata nft={nft} />
        </>
      )}
    </div>
  );
}

export default App;
