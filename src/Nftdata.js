import React, { useEffect, useState } from "react";
import Showcard from "./Showcard";
import Temp from "./Temp";

const Nftdata = ({ nft }) => {
  const [val, setval] = useState(0);

  useEffect(() => {
    nft.map((onenft) => {
      if (onenft.collectionName === "Raccoons") {
        setval(val + 1);
      }
    });

    console.log(val);
    if (val !== 0) {
      return <Temp />;
    }
  }, []);

  return (
    <div>
      {nft.map((onenft, key) => {
        if (onenft.collectionName === "Raccoons" && val === 0) {
          return <Temp />;
        }
        return (
          <Showcard
            key={onenft.collectionTokenId}
            cadd={onenft.collectionAddress}
            cname={onenft.collectionName}
            ctid={onenft.collectionTokenId}
            cowner={onenft.currentOwner}
            cdesc={onenft.description}
            name={onenft.name}
            network={onenft.network}
          />
        );
      })}
    </div>
  );
};

export default Nftdata;
