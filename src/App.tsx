import React, { useEffect, useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import Drawer from "./components/Drawer/Drawer";
import CountryDetails from "./components/Country/CountryDetails";
import { Country } from "./types";

const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countryMap, setCountryMap] = useState<Record<string, string>>({}); 

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v2/all?fields=alpha3Code,name,independent"
        );
        const data = await response.json();

       
        const map: Record<string, string> = {};
        data.forEach((country: Country) => {
          map[country.alpha3Code] = country.name;
        });

        setCountries(data);
        setCountryMap(map); 
      } catch (error) {
        console.error("Ошибка при загрузке списка стран:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleCountrySelect = (alpha3Code: string) => {
    fetch(`https://restcountries.com/v2/alpha/${alpha3Code}`)
      .then((response) => response.json())
      .then((data) => setSelectedCountry(data))
      .catch((error) => console.error("Ошибка при загрузке данных о стране:", error));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer countries={countries} onCountrySelect={handleCountrySelect} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <CountryDetails country={selectedCountry} countryMap={countryMap} />
      </Box>
    </Box>
  );
};

export default App;
