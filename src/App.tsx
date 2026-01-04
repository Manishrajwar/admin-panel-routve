import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import TaxiManagement from "./pages/TaxiManagement";
import PackageManagement from "./pages/PackageManagement";
import BookingManagement from "./pages/BookingManagement";
import APIIntegration from "./pages/APIIntegration";
import CMSManagement from "./pages/CMSManagement";


function App() {
 return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />
      <Route path="/taxis" element={<TaxiManagement />} />
      <Route path="/packages" element={<PackageManagement />} />
      <Route path="/bookings" element={<BookingManagement />} />
      <Route path="/api" element={<APIIntegration />} />
      <Route path="/cms" element={<CMSManagement />} />
    </Routes>

 )
}

export default App;

