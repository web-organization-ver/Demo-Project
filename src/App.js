import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardwallet from "./cardwallet";
import Success from "./Success";

function App() {
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  return (
    <div className="App">
      {data.address === "" ? (
        <Cardwallet data={data} setdata={setdata} />
      ) : (
        <Success data={data} />
      )}
    </div>
  );
}

export default App;
