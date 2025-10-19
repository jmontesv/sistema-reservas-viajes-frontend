export interface Trip {
  id: string;
  origin: string;
  destination: string;
  date: string;
  price: number;
  totalSeats: number;
  seatsAvailable: number;
  available: boolean;
}

// Interfaz que representa los datos tal como los devuelve el backend
interface RawTrip {
  id: string;
  origen: string;
  destino: string;
  fecha: string;
  precio: number;
  asientos_totales: number;
  asientos_disponibles: number;
}

interface FetchTripsParams {
  origin?: string;
  destination?: string;
  date: string;
}

/**
 * Función que consulta el backend y devuelve los viajes
 */
export const fetchTrips = async ({ origin, destination, date }: FetchTripsParams): Promise<Trip[]> => {
  const params = new URLSearchParams();
  if (origin) params.append("origen", origin);
  if (destination) params.append("destino", destination);

  const res = await fetch(`http://localhost:5000/viajes/${date}?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Error al obtener los viajes");
  }

  const data: RawTrip[] = await res.json();
  
  // 🧠 Transformamos los nombres aquí (de español a inglés) y calculamos el campo available al vuelo
  const trips: Trip[] = data.map((item) => ({
    id: item.id,
    origin: item.origen,
    destination: item.destino,
    date: item.fecha,
    price: item.precio,
    totalSeats: item.asientos_totales,
    seatsAvailable: item.asientos_disponibles,
    available: item.asientos_disponibles > 0 
  }));

  return trips;
};
