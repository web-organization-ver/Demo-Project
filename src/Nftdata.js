import React, { useEffect, useState } from "react";
import Showcard from "./Showcard";
import Temp from "./Temp";

const Nftdata = ({ nft, val, setval }) => {
  useEffect(() => {
    if (val === 0) {
      nft.map((onenft) => {
        if (onenft.collectionName === "Raccoons" && val === 0) {
          setval(1);
        }
        return val;
      });
    }
    console.log('====================================');
    console.log(val);
    console.log('====================================');
  }, []);

  return (
    <div>
      {nft.map((onenft, key) => {
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
