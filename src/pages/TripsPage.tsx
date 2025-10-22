import { useState } from "react";
import SearchResultsTemplate from "../components/templates/SearchResultsTemplate/SearchResultsTemplate";
import { useFetchTrips } from "../hooks/useFetchTrips";
import Button from "../components/atoms/Button/Button";
import AvailabilityTag from "../components/atoms/AvailabilityTag/AvailabilityTag";

export default function TripsPage() {
  const [searchValues, setSearchValues] = useState<{ origin?: string; destination?: string; date?: string }>({});
  const { trips, loading, error } = useFetchTrips(searchValues);

  const handleSearch = (values: any) => {
    setSearchValues(values);
  };

  

  const headers = ["Origen", "Destino", "Fecha",  "Hora salida", "Precio", "Asientos totales", "Asientos disponibles", "Reservable", ""];

  const rows = trips.map((trip) => [
    trip.origin,
    trip.destination,
    trip.date.split("T")[0],
    trip.date.split("T")[1],
    `${trip.price} €`,
    trip.totalSeats,
    trip.seatsAvailable,
    <AvailabilityTag available={trip.available} />,
    <Button disabled={!trip.available} onClick={() => handleReserve(trip.id)}>Reservar</Button>
  ]);

  return (
     <SearchResultsTemplate
      title={
        searchValues.origin && searchValues.destination
          ? `Viajes desde ${searchValues.origin} hacia ${searchValues.destination}`
          : "Resultados de viajes"
      }
      headers={headers}
      rows={rows}
      isLoading={loading}
      error={error}
      onSearch={handleSearch}
    />
  );
}
