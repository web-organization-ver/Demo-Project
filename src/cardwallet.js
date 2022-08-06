import React from "react";
import { Button, Card } from "react-bootstrap";
import { ethers } from "ethers";
import "./wallet.css";

const Cardwallet = ({ data, setdata, nft, setnft }) => {
  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = async (account) => {
    // setdata({
    //   address: account,
    // });

    setdata({
      address: "0x1c61461794df20b0Ed8C8D6424Fd7B312722181f",
    });
    getbalance(account);
    let heads;
    const provider = new ethers.providers.JsonRpcProvider(
      "https://virulent-wispy-river.discover.quiknode.pro/83b5ac469c2960fc40964054f3903aa892a27e07/"
    );
    heads = await provider.send("qn_fetchNFTs", {
      wallet: "0x1c61461794df20b0Ed8C8D6424Fd7B312722181f",
    });
    setnft(heads.assets);
  };

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
  return (
    <div className="walletcard">
      <Card className="text-center">
        <Card.Header>
          <strong>Address: </strong>
          {data.address}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Balance: </strong>
            {data.Balance}
          </Card.Text>
          <Button onClick={btnhandler} variant="primary">
            Connect to wallet
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardwallet;
