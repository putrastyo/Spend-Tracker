import Balance from "./components/Balance";
import Menu from "./components/Menu";
import RecentTransaction from "./components/RecentTransaction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-sky-500 to-indigo-500 h-dvh w-full md:w-[600px] mx-auto overflow-hidden">
      <Balance />
      <div className="bg-white rounded-t-3xl h-[80%] overflow-hidden p-4 relative">
        <Router>
          <Routes>
            <Route path="/" element={<RecentTransaction />} />
            <Route path="/transaction" element={<Transaction />} />
          </Routes>
          <Menu />
        </Router>
      </div>
    </div>
  );
};

export default App;
