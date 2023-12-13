import PacientsList from "./components/PacientsList";
import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <Form pacientes={pacientes} setPacientes={setPacientes} />
        <PacientsList pacientes={pacientes} />
      </div>
    </div>
  );
}

export default App;
