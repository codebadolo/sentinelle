// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages publiques
import Accueil from './pages/Accueil';
import ContactPublic from './pages/ContactPublic';

// Layout admin avec sidebar et topbar togglables
import DashboardLayout from './pages/admin/DashboardLayout';

// Composants globaux

function App() {
  return (
    <Router>
      {/* Barre de navigation publique */}
   
      <Routes>
        {/* Routes publiques */}
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<ContactPublic />} />

        {/* Routes admin */}
        <Route path="/admin/*" element={<DashboardLayout />} />
      </Routes>

      {/* Pied de page global */}
   
    </Router>
  );
}

export default App;
