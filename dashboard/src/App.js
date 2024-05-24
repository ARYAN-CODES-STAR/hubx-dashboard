import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Information from "./components/Information";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

function App() {
  Chart.register(ArcElement, Tooltip, Legend);
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Information />
    </div>
  );
}

export default App;
