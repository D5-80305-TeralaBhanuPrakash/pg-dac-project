// import React from "react";
// import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   marginTop: theme.spacing(4),
//   backgroundColor: theme.palette.primary.light, // Light background color
// }));

// const StyledListItem = styled(ListItem)(({ theme }) => ({
//   borderBottom: `1px solid ${theme.palette.divider}`,
//   backgroundColor: theme.palette.background.paper, // Subtle background color
// }));

// const LoanList = ({ loans }) => {
//   return (
//     <StyledPaper elevation={3}>
//       <Typography variant="h6" gutterBottom>
//         Loan Applications
//       </Typography>
//       {loans.length === 0 ? (
//         <Typography variant="body1">No loan applications available.</Typography>
//       ) : (
//         <List>
//           {loans.map((loan) => (
//             <StyledListItem key={loan.id}>
//               <ListItemText
//                 primary={`Name: ${loan.firstName} ${loan.lastName}`}
//                 secondary={
//                   <React.Fragment>
//                     <div>Phone Number: {loan.phoneNumber}</div>
//                     <div>DOB: {loan.dob}</div>
//                     <div>Address: {loan.address}</div>
//                     <div>Loan Type: {loan.loanType}</div>
//                     <div>Loan Amount: ${loan.loanAmount}</div>
//                     <div>Purpose: {loan.purposeOfLoan}</div>
//                     <div>Term: {loan.loanTerm}</div>
//                   </React.Fragment>
//                 }
//               />
//             </StyledListItem>
//           ))}
//         </List>
//       )}
//     </StyledPaper>
//   );
// };

// export default LoanList;
// LoanList.js
// LoanList.js
import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  backgroundColor: "#e1f5fe", // Light blue background color
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper, // Subtle background color
}));

const HighlightedField = styled("div")(({ theme }) => ({
  fontWeight: "bold",
  color: "#4caf50", // Green highlighted field color
}));

const LoanList = ({ loans }) => {
  return (
    <StyledPaper elevation={3}>
      <Typography variant="h6" gutterBottom>
        Loan Applications
      </Typography>
      {loans.length === 0 ? (
        <Typography variant="body1">No loan applications available.</Typography>
      ) : (
        <List>
          {loans.map((loan) => (
            <StyledListItem key={loan.id}>
              <ListItemText
                primary={
                  <React.Fragment>
                    <HighlightedField>Name:</HighlightedField> {loan.firstName}{" "}
                    {loan.lastName}
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <HighlightedField>Phone Number:</HighlightedField>{" "}
                    {loan.phoneNumber}
                    <br />
                    <HighlightedField>DOB:</HighlightedField> {loan.dob}
                    <br />
                    <HighlightedField>Address:</HighlightedField> {loan.address}
                    <br />
                    <HighlightedField>Loan Type:</HighlightedField>{" "}
                    {loan.loanType}
                    <br />
                    <HighlightedField>Loan Amount:</HighlightedField> $
                    {loan.loanAmount}
                    <br />
                    <HighlightedField>Purpose:</HighlightedField>{" "}
                    {loan.purposeOfLoan}
                    <br />
                    <HighlightedField>Term:</HighlightedField> {loan.loanTerm}
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

export default LoanList;
