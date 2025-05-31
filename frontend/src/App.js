import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Components
import Navbar from './components/Navbar';
import GlobalStats from './components/GlobalStats';
import Dashboard from './components/Dashboard';
import AgentProfile from './components/AgentProfile';
import FamilyTree from './components/FamilyTree';
import AgentBreeding from './components/AgentBreeding';
import LandingPage from './components/LandingPage';

// Styles
import GlobalStyle from './styles/GlobalStyle';
import { darkTheme } from './styles/themes';

// Basic content for debugging
const BasicContent = () => (
  <div style={{ 
    padding: '2rem', 
    color: 'white', 
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  }}>
    <h1>AgentBattle.space</h1>
    <p>Debug mode is active. The application is running with minimal components to identify issues.</p>
    
    <div style={{ 
      background: '#1e293b', 
      padding: '2rem', 
      borderRadius: '1rem',
      marginTop: '2rem',
      textAlign: 'left'
    }}>
      <h2>Troubleshooting Information</h2>
      <p>The application is currently in debug mode to identify rendering issues.</p>
      <p>Browser: {navigator.userAgent}</p>
      <p>React is rendering correctly if you can see this message.</p>
      <p>The Navbar, GlobalStats, and Dashboard components have been added back. If you can see them, they're working correctly.</p>
    </div>
  </div>
);

function App() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading to ensure all components are properly initialized
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Add error logging
  console.log('App component rendering');
  
  // Loading screen
  if (isLoading) {
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          color: 'white',
          background: darkTheme.background
        }}>
          <h1 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            background: darkTheme.gradientPrimary,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            AgentBattle.space
          </h1>
          <p>Loading application...</p>
        </div>
      </ThemeProvider>
    );
  }
  
  try {
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            {/* Landing page as the main route */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Demo routes with the original app functionality */}
            <Route path="/demo" element={
              <div className="app-container">
                <Navbar />
                <GlobalStats />
                <Dashboard setSelectedAgent={setSelectedAgent} />
              </div>
            } />
            <Route path="/agent/:id" element={
              <div className="app-container">
                <Navbar />
                <GlobalStats />
                <AgentProfile selectedAgent={selectedAgent} />
              </div>
            } />
            <Route path="/family-tree" element={
              <div className="app-container">
                <Navbar />
                <GlobalStats />
                <FamilyTree setSelectedAgent={setSelectedAgent} />
              </div>
            } />
            <Route path="/breeding" element={
              <div className="app-container">
                <Navbar />
                <GlobalStats />
                <AgentBreeding />
              </div>
            } />
            
            {/* Fallback route */}
            <Route path="*" element={<BasicContent />} />
          </Routes>
        </Router>
      </ThemeProvider>
    );
  } catch (error) {
    console.error('Error in App component:', error);
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
          <h1>Error in Application</h1>
          <p>There was an error rendering the application:</p>
          <pre style={{ 
            background: '#1e293b', 
            padding: '1rem', 
            borderRadius: '0.5rem',
            textAlign: 'left',
            maxWidth: '800px',
            margin: '1rem auto',
            overflow: 'auto'
          }}>
            {error.toString()}
          </pre>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
