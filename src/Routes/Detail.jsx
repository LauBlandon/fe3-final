import React from 'react';
import { useParams } from 'react-router-dom';
import { useDentistContext } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { state } = useDentistContext();
  const dentist = state.dentists.find((u) => u.id === parseInt(id));

  return (
      <div>
        <h1>Detail Dentist {dentist.id}</h1>
        <table>
          <thead>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio web</th>
          </thead>
          <tbody>
              <tr>
                <td>{dentist.name}</td>
                <td>{dentist.email}</td>
                <td>{dentist.phone}</td>
                <td>{dentist.website}</td>
              </tr>
          </tbody>

        </table>
      </div>
  )
}

export default Detail