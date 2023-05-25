import React, { useState } from 'react';
import Navbar from '../Navbar';
import { registerUser } from '../../api/auth';

function RegisterUsersView() {
  const [users, setUsers] = useState<any>([
    { dni: '', name: '', lastname: '', seniorityId: '', areaId: '' },
  ]);

  const handleChange = (index:any, e:any) => {
    const { name, value } = e.target;
    const updatedUsers = [...users];
    updatedUsers[index][name] = value;
    setUsers(updatedUsers);
  };

  const handleAddUser = () => {
    setUsers([...users, { dni: '', name: '', lastname: '', seniorityId: '', areaId: '' }]);
  };

  const handleRemoveUser = (index:any) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    registerUser(users)
  };

    return (
      <div >
        <Navbar />
        <div className="container mx-auto px-4">
          <div className="bg-white rounded shadow-md p-8 mt-4">
            <form onSubmit={handleSubmit}>
              {users.map((user:any, index:any) => (
                <div key={index} className="mb-4">
                  <input
                    className="border border-gray-300 rounded px-3 py-2 w-48"
                    type="text"
                    name="dni"
                    value={user.dni}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="DNI"
                  />
                  <input
                    className="border border-gray-300 rounded px-3 py-2 w-48 ml-4"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Nombre"
                  />
                  <input
                    className="border border-gray-300 rounded px-3 py-2 w-48 ml-4"
                    type="text"
                    name="lastname"
                    value={user.lastname}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Apellido"
                  />
                  <input
                    className="border border-gray-300 rounded px-3 py-2 w-48 ml-4"
                    type="text"
                    name="seniorityId"
                    value={user.seniorityId}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Seniority ID"
                  />
                  <input
                    className="border border-gray-300 rounded px-3 py-2 w-48 ml-4"
                    type="text"
                    name="areaId"
                    value={user.areaId}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Area ID"
                  />
                  {index > 0 && (
                    <button
                      className="bg-red-500 text-white px-3 py-2 rounded ml-4"
                      type="button"
                      onClick={() => handleRemoveUser(index)}
                    >
                      Remover
                    </button>
                  )}
                </div>
              ))}
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                type="button"
                onClick={handleAddUser}
              >
                Agregar Usuario
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded ml-4"
                type="submit"
              >
                Registrar Usuarios
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default RegisterUsersView;