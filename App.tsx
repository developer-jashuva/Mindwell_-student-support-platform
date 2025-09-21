
import React, { useState } from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import Booking from './components/Booking';
import Resources from './components/Resources';
import PeerSupport from './components/PeerSupport';
import AdminDashboard from './components/AdminDashboard';
import LandingPage from './components/LandingPage';
import { View } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>(View.Landing);

  const handleEnterApp = () => {
    setActiveView(View.Chat);
  };

  const renderContent = () => {
    switch (activeView) {
      case View.Chat:
        return <Chatbot />;
      case View.Booking:
        return <Booking />;
      case View.Resources:
        return <Resources />;
      case View.PeerSupport:
        return <PeerSupport />;
      case View.Dashboard:
        return <AdminDashboard />;
      default:
        return <Chatbot />;
    }
  };

  if (activeView === View.Landing) {
    return <LandingPage onEnter={handleEnterApp} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
