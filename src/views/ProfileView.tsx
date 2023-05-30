import { useState } from 'react'
import Navbar from '../components/Navbar';
import { getCookie } from '../api/cookie';
import { changePassword } from '../api/auth';

export default function Home() {
    const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFormSubmit = (event:any) => {
    event.preventDefault();

    // Validar la contraseña antes de enviar el formulario
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      // Enviar el formulario o realizar otras acciones
      const data = {
          new_password: newPassword,
          old_password: currentPassword
      }

      changePassword(data)
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-8 mx-auto w-full max-w-md">
            <div className="bg-white py-8 px-4 shadow rounded-lg px-10">
        <h2 className="text-2xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
            <label htmlFor="currentPassword" className="block mb-2">Current Password:</label>
            <input
              type="password"
              id="currentPassword"
              className="border border-gray-300 px-4 py-2 rounded"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block mb-2">New Password:</label>
            <input
              type="password"
              id="newPassword"
              className="border border-gray-300 px-4 py-2 rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">Confirm the new password:</label>
            <input
              type="password"
              id="confirmPassword"
              className="border border-gray-300 px-4 py-2 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
          <button type="submit" className="bg-[#009879] hover:bg-[#0bb894] text-white px-4 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
}
