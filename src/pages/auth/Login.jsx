import * as React from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import auth from "../../api/accountAPI.js";
import moment from "moment";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submitData = Object.fromEntries(formData);
    console.log("signin submitdata", submitData);
    auth
      .login(submitData)
      .then((res) => {
        console.log("login res", res);

        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem(
          "access_expiration",
          moment().add(30, "minute").format("yyyy-MM-DD HH:mm:ss")
        );
        localStorage.setItem("userEmail", submitData.userEmail);

        alert("로그인 성공!");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 401) {
          alert("유효하지 않은 회원정보입니다.");
        }
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="userEmail"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="rememberId" color="primary" />}
                label="아이디 기억하기"
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            로그인
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
