import React, { useState } from 'react'
import Form from '../Components/Form'


function Contact() {
  const [usuarios, setUsuarios] = useState([]);

  const addUsuario = (usuario) => {
    setUsuarios([usuario])
  };

  return (
    <div className='contact'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onAddUsuario={addUsuario} />
      <div>
        {usuarios.map((usuario, index) => (
          <div key={index}>
            <h2>Gracias {usuario.nombre}, te contactaremos cuando antes a tu mail: {usuario.email} </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
