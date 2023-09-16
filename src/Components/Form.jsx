import React, { useState } from "react";

function Form({onAddUsuario}){
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [datosInvalidos, setDatosInvalidos] = useState("");

  const validacionDatos = (nombre, email) => {
    if (nombre.length >= 5 && email.length >= 6) {
      return true
    } else {
      setDatosInvalidos("Por favor verifique su información nuevamente")
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const datosValidos = validacionDatos(nombre, email)
    if (datosValidos) {
        onAddUsuario({nombre, email});
        setNombre("");
        setEmail("");
        setDatosInvalidos("");
    }
  }
  
  return (
    <div className="form">
      <form onSubmit={handleSubmit} >
          <input type="text" placeholder="Ingresa tu nombre completo" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
          <input type="email" placeholder="Ingresa tu email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <button type="submit">Enviar</button>
      </form>
      <p>
          {datosInvalidos} 
      </p>
    </div>
  );
};

export default Form;


