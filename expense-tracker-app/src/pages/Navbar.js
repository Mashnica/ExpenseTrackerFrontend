import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const routes = ["/dashboard", "/groupListPage", "/listPage"];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <nav>
        <Toolbar className={styles.error}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={"/"}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              scrollButtons
            >
              <Tab
                label="Dashboard"
                value={value}
                component={Link}
                to={routes[0]}
              />
              <Tab
                label="GroupList"
                value={value}
                component={Link}
                to={routes[1]}
              />
              <Tab
                label="ListPage"
                value={value}
                component={Link}
                to={routes[2]}
              />
            </Tabs>
          </Box>
        </Toolbar>
      </nav>
    </AppBar>
  );
};

export default Navbar;
