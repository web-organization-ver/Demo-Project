import React, { useEffect } from "react";
import Showcard from "./Showcard";

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
  }, []);

  return (
    <div>
      {nft.map((onenft, index) => {
        return (
          <Showcard
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
