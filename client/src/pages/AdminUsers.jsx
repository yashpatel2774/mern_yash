import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const getAllUsersData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/users', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUsers(data);
      } else {
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== id));
        toast('User deleted successfully');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE USER
  const updateUser = async (id) => {
    const { username, email, phone } = formData;

    if (!username || !email || !phone) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/admin/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify({ username, email, phone }),
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(
          users.map((user) =>
            user._id === id ? { ...user, username, email, phone } : user
          )
        );
        toast('User updated successfully');
        setEditingUser(null); // Close modal
      } else {
        toast.error(data.message || 'Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating user');
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <div className="w-full px-4 py-6">
      <div className="rounded-lg w-full p-4">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
          <h2 className="text-center font-bold text-xl mb-4">Admin Users Data</h2>

          <table className="table-auto w-full">
            <thead className="bg-slate-950 text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((currUser, index) => (
                <tr key={index} className="text-center border">
                  <td className="border-y-1 px-5 py-2">{currUser.username}</td>
                  <td className="border-y-1 px-5 py-2">{currUser.email}</td>
                  <td className="border-y-1 px-5 py-2">{currUser.phone}</td>
                  <td>
                    <button
                      className="hover:cursor-pointer bg-green-600 text-white rounded-xl px-6 py-1"
                      onClick={() => {
                        setEditingUser(currUser);
                        setFormData({
                          username: currUser.username,
                          email: currUser.email,
                          phone: currUser.phone,
                        });
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="hover:cursor-pointer bg-red-600 text-white rounded-xl px-3 py-1"
                      onClick={() => deleteUser(currUser._id)}
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

      {editingUser && (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 p-6 rounded-lg w-full max-w-md shadow-xl space-y-4 relative">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Edit User</h2>

            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />

            <div className="flex justify-end space-x-4 pt-2">
              <button
                className="bg-gray-600 hover:bg-gray-400 hover:text-black hover:scale-110 text-white font-semibold px-4 py-2 rounded"
                onClick={() => setEditingUser(null)}
              >
                Cancel
              </button>
              <button
                className="bg-[#646cff] hover:bg-[#4a54e1] hover:scale-110 text-white font-semibold px-4 py-2 rounded"
                onClick={() => updateUser(editingUser._id)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
