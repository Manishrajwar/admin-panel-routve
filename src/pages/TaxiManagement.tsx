import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Car, Plus, Edit, Trash2, MapPin, Phone, Star, Filter } from 'lucide-react';

export default function TaxiManagement() {
  const [showAddModal, setShowAddModal] = useState(false);

  const taxis = [
    {
      id: 'TX101',
      driver: 'Carlos Martinez',
      phone: '+1234567890',
      vehicle: 'Toyota Camry 2023',
      plate: 'ABC-1234',
      location: 'Downtown Area',
      status: 'Available',
      rating: 4.8,
      trips: 245,
      earnings: '$12,450'
    },
    {
      id: 'TX102',
      driver: 'Maria Garcia',
      phone: '+1234567891',
      vehicle: 'Honda Accord 2023',
      plate: 'XYZ-5678',
      location: 'Airport Zone',
      status: 'Busy',
      rating: 4.9,
      trips: 312,
      earnings: '$15,890'
    },
    {
      id: 'TX103',
      driver: 'Ahmed Hassan',
      phone: '+1234567892',
      vehicle: 'Hyundai Elantra 2023',
      plate: 'DEF-9012',
      location: 'City Center',
      status: 'Available',
      rating: 4.7,
      trips: 189,
      earnings: '$9,780'
    },
    {
      id: 'TX104',
      driver: 'Lisa Chen',
      phone: '+1234567893',
      vehicle: 'Nissan Altima 2023',
      plate: 'GHI-3456',
      location: 'Shopping District',
      status: 'Offline',
      rating: 4.6,
      trips: 156,
      earnings: '$8,120'
    },
    {
      id: 'TX105',
      driver: 'Robert Johnson',
      phone: '+1234567894',
      vehicle: 'Ford Fusion 2023',
      plate: 'JKL-7890',
      location: 'Business District',
      status: 'Available',
      rating: 4.9,
      trips: 298,
      earnings: '$14,670'
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-2 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Taxi Management</h1>
            <p className="text-gray-600">Manage your fleet of taxis and drivers</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition shadow-lg shadow-emerald-600/30"
          >
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Add New Taxi</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by taxi ID, driver name, or plate number..."
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
                <option>Available</option>
                <option>Busy</option>
                <option>Offline</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Taxi ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Driver</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Vehicle</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rating</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Trips</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Earnings</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {taxis.map((taxi) => (
                  <tr key={taxi.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <Car className="w-4 h-4 text-emerald-700" />
                        </div>
                        <span className="font-semibold text-gray-900">{taxi.id}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{taxi.driver}</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {taxi.phone}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-gray-900">{taxi.vehicle}</p>
                        <p className="text-sm text-gray-500">{taxi.plate}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                        {taxi.location}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${taxi.status === 'Available' ? 'bg-emerald-100 text-emerald-700' :
                          taxi.status === 'Busy' ? 'bg-amber-100 text-amber-700' :
                            'bg-gray-100 text-gray-700'
                        }`}>
                        {taxi.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 mr-1" />
                        <span className="font-medium text-gray-900">{taxi.rating}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-medium text-gray-900">{taxi.trips}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-emerald-600">{taxi.earnings}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center md:flex-row flex-col gap-2 justify-between mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">Showing 1 to 5 of 87 taxis</p>
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                Previous
              </button>
              <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Add New Taxi</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Driver Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Model</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plate Number</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium">
                Add Taxi
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
