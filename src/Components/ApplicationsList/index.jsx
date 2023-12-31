import React, { useState } from "react";
import LoanApplications from "./applicationsList";

const LoanAppContainer = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: 1,
      firstName: "Bhanu",
      lastName: "Prakash",
      phoneNumber: "123-456-7890",
      dob: "1990-01-01",
      address: "123 Main St, City",
      loanType: "personal",
      loanAmount: 5000,
      purposeOfLoan: "Home Improvement",
      loanTerm: "12 months",
    },
    {
      id: 2,
      firstName: "Bhanu",
      lastName: "Prakash",
      phoneNumber: "987-654-3210",
      dob: "1985-05-15",
      address: "456 Oak St, Town",
      loanType: "mortgage",
      loanAmount: 8000,
      purposeOfLoan: "Debt Consolidation",
      loanTerm: "24 months",
    },
    // Add more dummy data as needed
  ]);

  return <LoanApplications initialData={dummyData} />;
};

export default LoanAppContainer;
