// index.js
import React from "react";
import ReactDOM from "react-dom";
import TransactionDetails from "./TransactionDetails";

const dummyTransactions = [
  {
    id: 1,
    date: "2023-01-15",
    paymentMethod: "Credit Card",
    amount: 50.0,
  },
  {
    id: 2,
    date: "2023-02-10",
    paymentMethod: "PayPal",
    amount: 25.0,
  },
  // Add more dummy transactions as needed
];

ReactDOM.render(
  <React.StrictMode>
    <TransactionDetails transactions={dummyTransactions} />
  </React.StrictMode>,
  document.getElementById("root")
);
