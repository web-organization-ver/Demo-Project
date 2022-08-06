import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardwallet from "./cardwallet";
import Success from "./Success";

function App() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const [nft , setnft] = useState(null);

  return (
    <div className="App">
      {data.address === "" ? (
        <Cardwallet data={data} setdata={setdata} nft={nft} setnft={setnft} />
      ) : (
        <Success data={data} />
      )}
    </div>
  );
}

export default App;
