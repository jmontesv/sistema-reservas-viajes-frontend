import { useState, useEffect } from "react";
import { type Trip, fetchTrips } from "../services/TripsService";

interface UseFetchTripsProps {
  origin?: string;
  destination?: string;
  date?: string;
}

export const useFetchTrips = ({ origin, destination, date }: UseFetchTripsProps) => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!date) return;

    const getTrips = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchTrips({ origin, destination, date });
        setTrips(data);
      } catch (err: any) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    getTrips();
  }, [origin, destination, date]);

  return { trips, loading, error };
};
