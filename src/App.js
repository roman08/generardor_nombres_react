// src/App.js
import React from 'react';
import NameGenerator from './components/NameGenerator';

/**
 * Componente principal App que renderiza el componente NameGenerator.
 */
function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {/* Componente principal NameGenerator */}
      <NameGenerator />
    </div>
  );
}

export default App;
