import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import isExpired from "../utils/isExpired";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function Header() {
  const [loading, setLoading] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState();

  React.useEffect(() => {
    if (!isExpired("access_expiration"))
      setUserEmail(localStorage.getItem("userEmail"));
    setLoading(true);
  }, []);

  return (
    loading && (
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
        {userEmail ? (
          <Toolbar>
            <PopupState variant="popover" popupId="header-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="text" {...bindTrigger(popupState)}>
                    {userEmail}
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem
                      onClick={() => {
                        popupState.close();
                        window.location.href = "/logout";
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </Toolbar>
        ) : (
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
        )}
      </Box>
    )
  );
}
