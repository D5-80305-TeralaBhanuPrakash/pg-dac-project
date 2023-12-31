// LoanApplications.js
import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  Container,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import LoanList from "./LoanList";

const theme = createTheme();

const LoanApplications = ({ initialData }) => {
  const [loanApplications, setLoanApplications] = useState([]);

  useEffect(() => {
    setLoanApplications(initialData);
  }, [initialData]);

  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
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

  const handleLoanSubmission = () => {
    // Assuming you have some validation logic here

    // Create a new loan object
    const newLoan = {
      id: new Date().getTime(),
      ...formData,
    };

    // Update the loan applications state
    setLoanApplications([...loanApplications, newLoan]);

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

    // Close the dialog
    setAddDialogOpen(false);
  };

  const handleOpenAddDialog = () => {
    setAddDialogOpen(true);
  };

  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Loan Applications
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <LoanList loans={loanApplications} />
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<AddIcon />}
                variant="outlined"
                color="primary"
                onClick={handleOpenAddDialog}
              >
                Add Loan Application
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Dialog
        open={isAddDialogOpen}
        onClose={handleCloseAddDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Loan Application</DialogTitle>
        <DialogContent>
          {/* Input fields for loan application */}
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLoanSubmission} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default LoanApplications;
