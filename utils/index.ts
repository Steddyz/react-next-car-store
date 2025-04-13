export async function fetchCars() {
  const headers = {
    "x-rapidapi-key": "fd5515951amsh90fd82b61dde406p162034jsn9fe7a7e76057",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
