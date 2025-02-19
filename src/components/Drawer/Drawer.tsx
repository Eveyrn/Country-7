
import React from "react";
import { Drawer, Box, Typography } from "@mui/material";
import CountryList from "../Country/CountryList";

interface Country {
  name: string;
  alpha3Code: string;
}

interface DrawerProps {
  countries: Country[];
  onCountrySelect: (alpha3Code: string) => void;
}

const drawerWidth = 300;

const DrawerComponent: React.FC<DrawerProps> = ({ countries, onCountrySelect }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Box sx={{ padding: 2 }}>

        <CountryList countries={countries} onCountrySelect={onCountrySelect} />
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
