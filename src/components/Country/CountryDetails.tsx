import React from "react";
import { Box, Typography } from "@mui/material";
import "./CountryDetails.css";

interface Country {
  name: string;
  capital: string;
  population: number;
  borders?: string[];
  flag: string;
}

interface CountryDetailsProps {
  country: Country | null;
  countryMap: Record<string, string>;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, countryMap }) => {
  if (!country) {
    return <Typography variant="h6">Выберите страну, чтобы увидеть детали</Typography>;
  }

  const borderCountries = country.borders?.map((code) => countryMap[code] || code) || [];

  return (
    <Box className="country-container">
      <Typography className="country-title">{country.name}</Typography>
      <div>
        <img className="country-flag" src={country.flag} alt={`Флаг ${country.name}`} />
      </div>
      <Typography className="country-info">
        <strong>Столица:</strong> {country.capital}
      </Typography>
      <Typography className="country-info">
        <strong>Население:</strong> {country.population.toLocaleString()}
      </Typography>
      <Typography className="country-info">
        <strong>Граничит с:</strong>{" "}
        {borderCountries.length > 0 ? borderCountries.join(", ") : "Нет соседей"}
      </Typography>
    </Box>
  );
};

export default CountryDetails;
