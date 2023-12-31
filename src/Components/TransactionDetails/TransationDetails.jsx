// TransactionDetails.jsx
import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  backgroundColor: "#f3e5f5", // Light purple background color
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper, // Subtle background color
}));

const HighlightedField = styled("div")(({ theme }) => ({
  fontWeight: "bold",
  color: "#7e57c2", // Purple highlighted field color
}));

const TransactionDetails = ({ transactions }) => {
  return (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>
        Transaction Details
      </Typography>
      {transactions.length === 0 ? (
        <Typography variant="body1">No transactions available.</Typography>
      ) : (
        <List>
          {transactions.map((transaction) => (
            <StyledListItem key={transaction.id}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <HighlightedField>Transaction Date:</HighlightedField>{" "}
                    {transaction.date}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <HighlightedField>Payment Method:</HighlightedField>{" "}
                    {transaction.paymentMethod}
                    <br />
                    <HighlightedField>Transaction Amount:</HighlightedField> $
                    {transaction.amount}
                    {/* Add more transaction details as needed */}
                  </React.Fragment>
                }
              />
            </StyledListItem>
          ))}
        </List>
      )}
    </StyledPaper>
  );
};

export default TransactionDetails;
