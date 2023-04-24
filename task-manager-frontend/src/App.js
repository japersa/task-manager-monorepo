import React from 'react';
import AppRouter from './AppRouter';
import { AuthProvider } from './auth-context';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
