import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaUser, FaHome } from 'react-icons/fa';
import { GrContact } from 'react-icons/gr';

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-4">
  <div className="border-1 border-[#4162FF] rounded-xl overflow-hidden w-full max-w-7xl">
    <div className="min-h-screen flex bg-[#111111] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111111] p-8 border border-[#4162FF]">
        <ul className="space-y-6">
          <li className='hover:scale-110 transition-transform duration-300'>
            <Link to="/admin/users" className="flex items-center gap-3 hover:text-[#4162FF]">
              <FaUser className="text-lg" />
              <span className="text-base font-medium">Users</span>
            </Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-300'>
            <Link to="/admin/contacts" className="flex items-center gap-3 hover:text-[#4162FF]">
              <GrContact className="text-lg" />
              <span className="text-base font-medium">Contacts</span>
            </Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-300'>
            <Link to="/service" className="flex items-center gap-3 hover:text-[#4162FF]">
              <span className="text-lg">🛠️</span>
              <span className="text-base font-medium">Services</span>
            </Link>
          </li>
          <li className='hover:scale-110 transition-transform duration-300'>
            <Link to="/" className="flex items-center gap-3 hover:text-[#4162FF]">
              <FaHome className="text-lg" />
              <span className="text-base font-medium">Home</span>
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center p-8 max-w-full">
        <div className="w-full bg-[#f5f5f5] text-black p-8 border border-gray-400 rounded-lg shadow-md">
          <Outlet />
        </div>
      </main>
    </div>
  </div>
</div>

  );
};

export default AdminLayout;
