import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const AdminContacts = () => {
   const [contacts, setContacts] = useState([]);
   const { authorizationToken } = useAuth();

    const getAllContactData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/contacts', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setContacts(data);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const deleteContact = async (id) => {
    try { 
      const response = await fetch(`http://localhost:3000/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        toast('Contact deleted successfully');
      } else {
        toast.error("Could not delete contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactData();
  }, []);


  return (
    <div className="w-full px-4 py-6">
      <div className="rounded-lg w-full p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
          <h2 className="text-center font-bold text-xl mb-4">Admin Contact Data</h2>

          <table className="table-auto w-full">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((currContact, index) => (
                <tr key={index} className="text-center border">
                  <td className="border-y-1 px-5 py-2">{currContact.username}</td>
                  <td className="border-y-1 px-5 py-2">{currContact.email}</td>
                  <td className="border-y-1 px-5 py-2">{currContact.message}</td>
                  <td>
                    <button
                      className="hover:cursor-pointer bg-red-600 text-white rounded-xl px-3 py-1"
                      onClick={() => deleteContact(currContact._id)}
                    >
                      Delete
                    </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
  )
}

export default AdminContacts
