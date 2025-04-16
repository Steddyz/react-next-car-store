import { CarProps } from "@types";

export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "fd5515951amsh90fd82b61dde406p162034jsn9fe7a7e76057",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}

export const generateCarImage = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { year, make, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
