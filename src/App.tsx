import React from 'react';
import MainLayout from './Components/Layout/MainLayout';
import './Style/Index.scss';
import './Style/Bootstrap.scss';
import DefinedRoutes from './DefinedRoutes';

function App(): JSX.Element {
  return (
    <MainLayout>
      <DefinedRoutes />
    </MainLayout>
  );
}

export default App;
