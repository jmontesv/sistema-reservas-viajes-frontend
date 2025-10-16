import { useState } from "react";
import Button from "./components/atoms/Button/Button";
import Input from "./components/atoms/Input/Input";
import FormField from "./components/molecules/FormField/FormField";
import FormSearch from "./components/organisms/FormSearch/FormSearch";
import { Table } from "./components/organisms/Table/Table";

const headers = ["Origen", "Destino", "Fecha salida", "Hora salida", "Asientos totales", "Asientos disponibles", "Reservable", ""];
const rows = [
  ["New York", "Madrid", "2025-11-01", "18:00", "180", "35", "Reservable", <Button>Reservar</Button>],
  ["New York", "Madrid", "2025-11-01", "18:00", "180", "35", "Reservable", <Button>Reservar</Button>],
  ["New York", "Madrid", "2025-11-01", "18:00", "180", "35", "Reservable", <Button>Reservar</Button>],
];

export default function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "" });

    const [date, setDate] = useState("");
    return (
      <div style={{ padding: "2rem" }}>
        <Button variant="primary">Guardar</Button>
        <Button variant="secondary">Cancelar</Button>
        <Button variant="danger">Eliminar</Button>
        <Button disabled>Deshabilitado</Button>

        <Input placeholder="Nombre completo" />
        <Input placeholder="Correo electrónico" />
        <Input placeholder="Contraseña" type="password" />
        <Input placeholder="Deshabilitado" disabled />

        <form style={{ display: "flex", margin: "2rem auto" }}>
          <FormField
            label="Nombre completo"
            id="name"
            placeholder="Introduce tu nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />

          <FormField
            label="Correo electrónico"
            id="email"
            placeholder="Introduce tu email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <Button>Enviar</Button>
        </form>
        <FormSearch onSubmit={() => console.log("submit")}/>
        <div style={{width: "70%", margin: "100px auto"}}>
          <Table headers={headers} rows={rows} />
        </div>
      </div>
    );
}