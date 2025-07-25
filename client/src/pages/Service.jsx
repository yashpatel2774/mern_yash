import React from 'react';
import { useAuth } from '../store/auth';

const Services = () => {
  const { services } = useAuth();

  return (
    <section className="flex items-center justify-center flex-col mt-4 px-4">
      <div className="text-3xl font-bold mt-2 mb-6">
        <h1>Services</h1>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(services) && services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;

          return (
            <div
              key={index}
              className="bg-transparent text-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/images/design.png"
                alt="Service"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{service}</h2>
              <p className="text-sm text-gray-400 mb-2">{description}</p>
              <p className="text-sm font-medium mb-1">💰 {price}</p>
              <p className="text-sm text-gray-500">📦 {provider}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
