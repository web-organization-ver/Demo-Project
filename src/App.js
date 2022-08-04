import React, { useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

const [data, setdata] = useState({
	address: "",
	Balance: null,
});

const btnhandler = () => {

	if (window.ethereum) {

	window.ethereum
		.request({ method: "eth_requestAccounts" })
		.then((res) => accountChangeHandler(res[0]));
	} else {
	alert("install metamask extension!!");
	}
};


const getbalance = (address) => {

	
	window.ethereum
	.request({
		method: "eth_getBalance",
		params: [address, "latest"]
	})
	.then((balance) => {
	
		setdata({
		Balance: ethers.utils.formatEther(balance),
		});
	});
};


const accountChangeHandler = (account) => {
	
	setdata({
	address: account,
	});

	getbalance(account);
};

return (
	<div className="App">


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
}

export default App;
