// src/components/NameDisplay.jsx
import React from 'react';

/**
 * Componente reutilizable NameDisplay para mostrar el nombre generado.
 * @param {string} name - El nombre generado aleatoriamente.
 */
const NameDisplay = ({ name }) => {
  return (
    <div className="mt-4 text-3xl font-bold text-gray-800">
      {name ? name : 'Generate a random name!'}
    </div>
  );
};

export default NameDisplay;
