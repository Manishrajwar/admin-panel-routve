import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Calendar, Filter, MapPin, Phone, User, Clock, DollarSign, Eye } from 'lucide-react';

export default function BookingManagement() {
  const [selectedBooking, setSelectedBooking] = useState<any>(null);

  const bookings = [
    {
      id: 'BK001',
      customer: 'John Doe',
      phone: '+1234567890',
      email: 'john.doe@email.com',
      pickup: '123 Main St, Downtown',
      destination: 'Airport Terminal 2',
      date: '2024-01-15',
      time: '09:30 AM',
      taxi: 'TX101 - Carlos Martinez',
      fare: '$45.00',
      status: 'Completed',
      paymentStatus: 'Paid',
      notes: 'Customer requested child seat'
    },
    {
      id: 'BK002',
      customer: 'Jane Smith',
      phone: '+1234567891',
      email: 'jane.smith@email.com',
      pickup: '456 Oak Ave, Mall District',
      destination: 'Hotel Plaza',
      date: '2024-01-15',
      time: '02:15 PM',
      taxi: 'TX102 - Maria Garcia',
      fare: '$32.50',
      status: 'In Progress',
      paymentStatus: 'Pending',
      notes: ''
    },
    {
      id: 'BK003',
      customer: 'Mike Johnson',
      phone: '+1234567892',
      email: 'mike.j@email.com',
      pickup: '789 Station Rd',
      destination: 'Office Park, Building A',
      date: '2024-01-15',
      time: '03:45 PM',
      taxi: 'TX103 - Ahmed Hassan',
      fare: '$28.00',
      status: 'Scheduled',
      paymentStatus: 'Paid',
      notes: 'Business trip'
    },
    {
      id: 'BK004',
      customer: 'Sarah Wilson',
      phone: '+1234567893',
      email: 'sarah.w@email.com',
      pickup: '321 Home Street',
      destination: 'Downtown Restaurant',
      date: '2024-01-14',
      time: '07:30 PM',
      taxi: 'TX104 - Lisa Chen',
      fare: '$38.00',
      status: 'Completed',
      paymentStatus: 'Paid',
      notes: ''
    },
    {
      id: 'BK005',
      customer: 'Robert Brown',
      phone: '+1234567894',
      email: 'rob.brown@email.com',
      pickup: 'Shopping Center Entrance',
      destination: '555 Residential Complex',
      date: '2024-01-15',
      time: '11:00 AM',
      taxi: 'TX105 - Robert Johnson',
      fare: '$42.00',
      status: 'In Progress',
      paymentStatus: 'Paid',
      notes: 'Multiple bags'
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-2  items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
            <p className="text-gray-600">View and manage all taxi bookings</p>
          </div>
          <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition shadow-lg shadow-emerald-600/30">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">New Booking</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">1,234</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">In Progress</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
              <div className="bg-amber-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-gray-900">1,189</p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$45.6K</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by booking ID, customer name, or phone..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                <option>All Status</option>
                <option>Scheduled</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Booking ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Route</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date & Time</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Taxi</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Fare</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <span className="font-semibold text-gray-900">{booking.id}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{booking.customer}</p>
                        <p className="text-sm text-gray-500">{booking.phone}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-start text-sm">
                          <MapPin className="w-4 h-4 mr-1 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{booking.pickup}</span>
                        </div>
                        <div className="flex items-start text-sm">
                          <MapPin className="w-4 h-4 mr-1 text-red-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{booking.destination}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-gray-900">{booking.date}</p>
                        <p className="text-sm text-gray-500">{booking.time}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-gray-700">{booking.taxi}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-emerald-600">{booking.fare}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${booking.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                          booking.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                            booking.status === 'Scheduled' ? 'bg-amber-100 text-amber-700' :
                              'bg-gray-100 text-gray-700'
                          }`}>
                          {booking.status}
                        </span>
                        <div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${booking.paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                            }`}>
                            {booking.paymentStatus}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center md:flex-row flex-col gap-2 justify-between mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">Showing 1 to 5 of 1,234 bookings</p>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                Previous
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">Next</button>
            </div>
          </div>
        </div>
      </div>

      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Booking ID</p>
                  <p className="font-semibold text-gray-900">{selectedBooking.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${selectedBooking.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                    selectedBooking.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                    {selectedBooking.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Customer Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p><span className="text-gray-600">Name:</span> <span className="font-medium">{selectedBooking.customer}</span></p>
                  <p><span className="text-gray-600">Phone:</span> <span className="font-medium">{selectedBooking.phone}</span></p>
                  <p><span className="text-gray-600">Email:</span> <span className="font-medium">{selectedBooking.email}</span></p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Route Information
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p><span className="text-gray-600">Pickup:</span> <span className="font-medium">{selectedBooking.pickup}</span></p>
                  <p><span className="text-gray-600">Destination:</span> <span className="font-medium">{selectedBooking.destination}</span></p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                  <p className="font-semibold">{selectedBooking.date}</p>
                  <p className="text-sm text-gray-700">{selectedBooking.time}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Fare</p>
                  <p className="text-2xl font-bold text-emerald-600">{selectedBooking.fare}</p>
                  <p className={`text-sm ${selectedBooking.paymentStatus === 'Paid' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {selectedBooking.paymentStatus}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Assigned Taxi</p>
                <p className="font-semibold">{selectedBooking.taxi}</p>
              </div>

              {selectedBooking.notes && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Notes</p>
                  <p className="text-gray-700">{selectedBooking.notes}</p>
                </div>
              )}
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setSelectedBooking(null)}
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
