import Pacient from "./Pacient";

function PacientsList({ pacientes }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-3">
      <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
      <p className="text-xl mt-5 mb-4 text-center">
        Administra tus {""}
        <span className="text-indigo-500 font-bold">Pacientes y Citas</span>
      </p>

      {pacientes.map((paciente) => (
        <Pacient key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
}

export default PacientsList;
