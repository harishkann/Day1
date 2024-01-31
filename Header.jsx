import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import DrawerComp from "./Drawer";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <HouseSharpIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                GIFT FASHION
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ fontSize: "2.1rem", flexGrow: 1, textAlign: "center" }}>
                GIFT FASHION
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Products" />
                <Tab label="Services" />
                <Tab label="About Us" />
                <Tab label="Contact" />
              </Tabs>
              <Button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  LOGIN
                </Link>
              </Button>
              <Button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  transition: "background-color 0.3s ease",
                }}
              >
                <Link to="/signup" style={{ textDecoration: "none", color: "#fff" }}>
                  SIGN UP
                </Link>
              </Button>

              {/* New code added here */}
              <div style={{ display: "flex", marginLeft: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontFamily: '"Brush Script MT", cursive',
                    marginRight: "20px",
                  }}
                >
                  <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
                    About Us
                  </Link>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontFamily: '"Brush Script MT", cursive',
                  }}
                >
                  <Link to="/blog" style={{ color: "inherit", textDecoration: "none" }}>
                    Blog
                  </Link>
                </Typography>
              </div>
              {/* End of new code */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
