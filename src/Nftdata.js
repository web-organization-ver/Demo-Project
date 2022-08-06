import React, { useEffect } from "react";
import Showcard from "./Showcard";

const Nftdata = ({ nft }) => {
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
    <div>
      {nft.map((onenft, key) => {
        return (
          <Showcard
            key={key}
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
