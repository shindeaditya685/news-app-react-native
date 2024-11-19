import CountryList from "@/constants/CountryList";
import { useCallback, useState } from "react";

export const useNewsCountries = () => {
  const [newsCountries, setNewsCountry] = useState(CountryList);

  const toggleNewsCountries = useCallback((id: number) => {
    setNewsCountry((prevNewsCountries) => {
      return prevNewsCountries.map((item, index) => {
        if (index === id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      });
    });
  }, []);

  return {
    newsCountries,
    toggleNewsCountries,
  };
};
