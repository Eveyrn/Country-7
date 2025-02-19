import React from "react";
import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";


interface Country {
  name: string;
  alpha3Code: string;
}

interface CountryListProps {
  countries: Country[];
  onCountrySelect: (alpha3Code: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ countries, onCountrySelect }) => {
  return (
    <>
      <Typography variant="h6">Выберите страну:</Typography>
      <List>
        {countries.map((country) => (
          <ListItem key={country.alpha3Code}>
            <ListItemButton onClick={() => onCountrySelect(country.alpha3Code)}>
              <ListItemText primary={country.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CountryList;

