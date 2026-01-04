import AdminLayout from '../components/AdminLayout';
import { Car, Package, Calendar, DollarSign, TrendingUp, Users, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Bookings', value: '1,234', change: '+12.5%', icon: Calendar, color: 'bg-blue-500' },
    { label: 'Active Taxis', value: '87', change: '+5.2%', icon: Car, color: 'bg-emerald-500' },
    { label: 'Revenue', value: '$45,678', change: '+18.3%', icon: DollarSign, color: 'bg-amber-500' },
    { label: 'Active Users', value: '2,456', change: '+8.1%', icon: Users, color: 'bg-purple-500' },
  ];

  const recentBookings = [
    { id: 'BK001', customer: 'John Doe', pickup: 'Downtown', destination: 'Airport', status: 'Completed', time: '2 hours ago' },
    { id: 'BK002', customer: 'Jane Smith', pickup: 'Mall', destination: 'Hotel Plaza', status: 'In Progress', time: '30 mins ago' },
    { id: 'BK003', customer: 'Mike Johnson', pickup: 'Station', destination: 'Office Park', status: 'Pending', time: '10 mins ago' },
    { id: 'BK004', customer: 'Sarah Wilson', pickup: 'Home', destination: 'Restaurant', status: 'Completed', time: '3 hours ago' },
  ];

  const activeTaxis = [
    { id: 'TX101', driver: 'Carlos Martinez', location: 'Downtown Area', status: 'Available', trips: 12 },
    { id: 'TX102', driver: 'Maria Garcia', location: 'Airport Zone', status: 'Busy', trips: 8 },
    { id: 'TX103', driver: 'Ahmed Hassan', location: 'City Center', status: 'Available', trips: 15 },
    { id: 'TX104', driver: 'Lisa Chen', location: 'Shopping District', status: 'Busy', trips: 10 },
  ];

  return (
    <AdminLayout>
      <div className="space-y-4 md:space-y-6">
        <div>
          <h1>Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className={`${stat.color} p-2 md:p-3 rounded-lg`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <span className="flex items-center text-xs md:text-sm font-medium text-emerald-600">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
              <button
                onClick={() => navigate('/bookings')}
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900">{booking.id}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                        booking.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{booking.customer}</p>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {booking.pickup} → {booking.destination}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-1" />
                      {booking.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Active Taxis</h2>
              <button
                onClick={() => navigate('/taxis')}
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {activeTaxis.map((taxi) => (
                <div key={taxi.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="bg-emerald-100 p-2 rounded-lg">
                      <Car className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{taxi.id} - {taxi.driver}</p>
                      <p className="text-sm text-gray-600">{taxi.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${taxi.status === 'Available' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                      {taxi.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{taxi.trips} trips today</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-6">
          <h2>Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-4 md:mt-6">
            <button
              onClick={() => navigate('/bookings')}
              className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition text-left"
            >
              <Calendar className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">New Booking</h3>
              <p className="text-sm text-gray-600">Create a new taxi booking</p>
            </button>
            <button
              onClick={() => navigate('/taxis')}
              className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition text-left"
            >
              <Car className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Add Taxi</h3>
              <p className="text-sm text-gray-600">Register a new taxi to the fleet</p>
            </button>
            <button
              onClick={() => navigate('/packages')}
              className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition text-left"
            >
              <Package className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">Create Package</h3>
              <p className="text-sm text-gray-600">Add a new travel package</p>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
