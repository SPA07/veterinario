import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ pacientes, setPacientes }) {
  const [name, setName] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, propietario, email, alta, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");
      setError(true);

      return;
    }

    setError(false);

    const generarID = () => {
      const random = Math.random.toString(36)
      const fecha = Date.now().toString(36)

      return random + fecha
    }

    const pacientObject = {
      name,
      propietario,
      email,
      alta,
      sintomas,
      id: generarID()
    };

    setPacientes([...pacientes, pacientObject]);

    setName("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mt-5 mx-5">
      <h2 className="font-black text-3xl text-center mb-5">
        Seguimiento pacientes
      </h2>
      <p className="text-xl mt-5 mb-4 text-center">
        Añade pacientes y {""}
        <span className="text-indigo-500 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-2 px-2"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="nombre"
            className="block text-gray-600 uppercase font-bold"
          >
            Nombre mascota
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full mt-2 placeholder:gray-400 rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-600 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full mt-2 placeholder:gray-400 rounded-md p-2"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-600 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full mt-2 placeholder:gray-400 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-600 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            placeholder="Email contacto del propietario"
            className="border-2 w-full mt-2 placeholder:gray-400 rounded-md p-2"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-600 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full mt-2 placeholder:gray-400 rounded-md p-2"
            placeholder="Describe síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-500 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-colors mb-3"
          value="Agregar paciente"
        />
      </form>
    </div>
  );
}

export default Form;
