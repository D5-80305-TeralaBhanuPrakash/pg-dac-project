import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import BankDetails from "./Details"; // Adjust the import path accordingly

const theme = createTheme();

const AccountDetails = () => {
  const userAccount = {
    name: "John Doe",
    accountNumber: "1234567890",
    balance: "$5000.00",
    // Add more details as needed
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <BankDetails accountHolder={userAccount} />
        {/* Add other components or features of your bank application */}
      </div>
    </ThemeProvider>
  );
};

export default AccountDetails;
