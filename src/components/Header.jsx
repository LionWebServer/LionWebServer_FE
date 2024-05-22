import * as React from "react";
import {
  AppBar,
  Box,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  ListItemButton,
  List,
  ListItem,
  Toolbar,
} from "@mui/material";

export default function Header() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      paddingX={3}
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Pybo
        </Typography>
      </Toolbar>
      <Toolbar>
        <Button
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Signup
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Login
        </Button>
      </Toolbar>
    </Box>
  );
}
