// LoanApplicationForm.js
import React, { useState } from "react";
import { TextField, Button, Paper, Typography, MenuItem } from "@mui/material";

const LoanApplicationForm = ({ onLoanSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: "",
    address: "",
    loanType: "",
    loanAmount: "",
    purposeOfLoan: "",
    loanTerm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have some validation logic here

    // Create a new loan object
    const newLoan = {
      id: new Date().getTime(),
      ...formData,
    };

    // Call the parent component's submit function
    onLoanSubmit(newLoan);

    // Clear the form data
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dob: "",
      address: "",
      loanType: "",
      loanAmount: "",
      purposeOfLoan: "",
      loanTerm: "",
    });
  };

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Typography variant="h6" gutterBottom>
        Loan Application Form
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* Address Section */}
        <TextField
          label="Address"
          name="address"
          multiline
          rows={3}
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        {/* Loan Information Section */}
        <TextField
          select
          label="Loan Type"
          name="loanType"
          value={formData.loanType}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="personal">Personal Loan</MenuItem>
          <MenuItem value="mortgage">Mortgage</MenuItem>
          <MenuItem value="car">Car Loan</MenuItem>
          {/* Add more loan types as needed */}
        </TextField>
        <TextField
          label="Loan Amount"
          name="loanAmount"
          type="number"
          value={formData.loanAmount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Purpose of Loan"
          name="purposeOfLoan"
          value={formData.purposeOfLoan}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Desired Loan Term"
          name="loanTerm"
          value={formData.loanTerm}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Application
        </Button>
      </form>
    </Paper>
  );
};

export default LoanApplicationForm;
