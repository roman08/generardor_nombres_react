// src/components/NameGenerator.jsx
import React, { useState } from 'react';
import Button from './Button';
import NameDisplay from './NameDisplay';

/**
 * Componente principal NameGenerator que maneja la lógica para generar un nombre aleatorio.
 */
const NameGenerator = () => {
  // Estado para almacenar el nombre generado.
  const [name, setName] = useState('');

  // Lista de nombres aleatorios para elegir.
  const names = ['John', 'Alice', 'Robert', 'Sophia', 'James', 'Emma', 'Oliver', 'Isabella'];

  /**
   * Función para generar un nombre aleatorio.
   */
  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length); // Selecciona un índice aleatorio.
    setName(names[randomIndex]); // Actualiza el estado con el nombre aleatorio.
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-10 rounded-lg shadow-lg">
      {/* Componente NameDisplay muestra el nombre generado */}
      <NameDisplay name={name} />

      {/* Componente Button reutilizable para generar un nuevo nombre */}
      <Button text="Generate Name" onClick={generateRandomName} />
    </div>
  );
};

export default NameGenerator;
