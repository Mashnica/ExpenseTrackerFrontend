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
        <Toolbar className={styles.navb}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              scrollButtons
            >
              <Tab
                className={styles.m}
                label="Dashboard"
                value={routes[0]}
                component={Link}
                to={routes[0]}
              />
              <Tab
                className={styles.m}
                label="GroupList"
                value={routes[1]}
                component={Link}
                to={routes[1]}
              />
              <Tab
                className={styles.m}
                label="ListPage"
                value={routes[2]}
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
