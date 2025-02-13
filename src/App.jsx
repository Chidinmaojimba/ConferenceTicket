import './App.css'
import { Route, Routes } from 'react-router-dom';
import { TicketSelection } from './pages/TicketSelection';
import { TicketDetails } from './pages/TicketDetails';
import { TicketConfirmation } from './pages/TicketConfirmation';
function App() {
  return (
    <Routes>
      <Route path="/" element={<TicketSelection />} />
      <Route path="/ticket-details" element={<TicketDetails />} />
      <Route path="/ticket-confirmation" element={<TicketConfirmation />} />
    </Routes>
  );
}
export default App;









