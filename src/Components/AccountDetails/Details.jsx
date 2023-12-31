// AccountDetails.js
import React from "react";
import {
  Typography,
  Paper,
  Container,
  Grid,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const theme = createTheme();

const AccountDetails = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Account Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                square
                sx={{ padding: "20px", marginBottom: "20px" }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  Account Information
                </Typography>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    Account Number:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    1234567890
                  </Paper>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    Balance:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    $5000.00
                  </Paper>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    Account Type:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Savings
                  </Paper>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    Credit Limit:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    $10000.00
                  </Paper>
                </div>
                {/* Add more account information fields as needed */}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                elevation={0}
                square
                sx={{ padding: "20px", marginBottom: "20px" }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  Personal Information
                </Typography>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    First Name:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    John
                  </Paper>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    Last Name:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    Doe
                  </Paper>
                </div>
                <div>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "150px",
                    }}
                  >
                    Email:
                  </Typography>
                  <Paper
                    elevation={0}
                    square
                    style={{
                      display: "inline-block",
                      padding: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    john.doe@example.com
                  </Paper>
                </div>
                {/* Add more personal information fields as needed */}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Button
                startIcon={<EditIcon />}
                variant="outlined"
                color="primary"
              >
                Edit Account Details
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default AccountDetails;
