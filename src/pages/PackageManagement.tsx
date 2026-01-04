import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Package, Plus, Edit, Trash2, MapPin, DollarSign, Clock, Users } from 'lucide-react';

export default function PackageManagement() {
  const [showAddModal, setShowAddModal] = useState(false);

  const packages = [
    {
      id: 'PKG001',
      name: 'City Tour Package',
      description: 'Explore all major city attractions',
      price: '$149',
      duration: '8 hours',
      locations: ['Downtown', 'Museum', 'Park', 'Shopping Center'],
      maxPassengers: 4,
      bookings: 45,
      status: 'Active'
    },
    {
      id: 'PKG002',
      name: 'Airport Transfer Plus',
      description: 'Premium airport pickup and drop service',
      price: '$89',
      duration: '2 hours',
      locations: ['Any Location', 'Airport'],
      maxPassengers: 6,
      bookings: 128,
      status: 'Active'
    },
    {
      id: 'PKG003',
      name: 'Weekend Getaway',
      description: 'Perfect for weekend trips outside the city',
      price: '$299',
      duration: '2 days',
      locations: ['City Center', 'Mountain Resort', 'Scenic Route'],
      maxPassengers: 4,
      bookings: 23,
      status: 'Active'
    },
    {
      id: 'PKG004',
      name: 'Business Executive',
      description: 'Premium service for business travelers',
      price: '$199',
      duration: 'Full day',
      locations: ['Hotel', 'Business District', 'Conference Center'],
      maxPassengers: 3,
      bookings: 67,
      status: 'Active'
    },
    {
      id: 'PKG005',
      name: 'Night Life Tour',
      description: 'Experience the city nightlife',
      price: '$129',
      duration: '5 hours',
      locations: ['Restaurant', 'Bar District', 'Entertainment Zone'],
      maxPassengers: 6,
      bookings: 34,
      status: 'Inactive'
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex md:flex-row flex-col gap-2  items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Package Management</h1>
            <p className="text-gray-600">Create and manage travel packages</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition shadow-lg shadow-emerald-600/30"
          >
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Create Package</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <Package className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${pkg.status === 'Active' ? 'bg-white bg-opacity-20' : 'bg-gray-800 bg-opacity-30'
                    }`}>
                    {pkg.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-emerald-50 text-sm">{pkg.description}</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <DollarSign className="w-5 h-5 mr-2 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-bold text-lg">{pkg.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{pkg.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 mr-2 text-purple-600" />
                    <span className="text-sm">Max {pkg.maxPassengers} passengers</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-emerald-600">{pkg.bookings}</span> bookings
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Locations:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.locations.map((location, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-2 pt-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Edit className="w-4 h-4" />
                    <span className="text-sm font-medium">Edit</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition">
                    <Trash2 className="w-4 h-4" />
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Create New Package</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Package Name</label>
                <input type="text" placeholder="e.g., City Tour Package" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea rows={3} placeholder="Describe the package..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input type="number" placeholder="149" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input type="text" placeholder="8 hours" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Max Passengers</label>
                  <input type="number" placeholder="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Locations (comma separated)</label>
                <input type="text" placeholder="Downtown, Museum, Park" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
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
                Create Package
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
