import React, { useState, useEffect } from 'react';

import { ToastContainer } from 'react-toastify';
import Container from './Container/Container';

import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

interface Props {
  children: React.ReactNode
}

function MainLayout({ children }: Props): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className={`app ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="vertical">
          <Container>
            <main>
              {children}
            </main>
          </Container>
          <Footer />
        </div>
      </div>
      <ToastContainer theme="light" />
    </>
  );
}

export default MainLayout;
