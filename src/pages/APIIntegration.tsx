import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { Check, X, RefreshCw, Settings, Key, Globe } from 'lucide-react';

export default function APIIntegration() {
  const [selectedProvider, setSelectedProvider] = useState<any>(null);

  const providers = [
    {
      id: 'google-maps',
      name: 'Google Maps API',
      description: 'Location services and route optimization',
      status: 'Connected',
      icon: '🗺️',
      lastSync: '2 minutes ago',
      apiKey: 'AIzaSyC...............xyz',
      endpoints: [
        { name: 'Geocoding', status: 'Active', calls: '12,456' },
        { name: 'Directions', status: 'Active', calls: '8,932' },
        { name: 'Distance Matrix', status: 'Active', calls: '5,234' }
      ]
    },
    {
      id: 'stripe',
      name: 'Stripe Payment',
      description: 'Payment processing and transactions',
      status: 'Connected',
      icon: '💳',
      lastSync: '5 minutes ago',
      apiKey: 'sk_live_...............xyz',
      endpoints: [
        { name: 'Charges', status: 'Active', calls: '3,456' },
        { name: 'Customers', status: 'Active', calls: '2,123' },
        { name: 'Refunds', status: 'Active', calls: '234' }
      ]
    },
    {
      id: 'twilio',
      name: 'Twilio SMS',
      description: 'SMS notifications and alerts',
      status: 'Connected',
      icon: '📱',
      lastSync: '1 hour ago',
      apiKey: 'AC...............xyz',
      endpoints: [
        { name: 'Messages', status: 'Active', calls: '1,234' },
        { name: 'Notifications', status: 'Active', calls: '987' }
      ]
    },
    {
      id: 'sendgrid',
      name: 'SendGrid Email',
      description: 'Email notifications and marketing',
      status: 'Disconnected',
      icon: '📧',
      lastSync: 'Never',
      apiKey: 'Not configured',
      endpoints: []
    },
    {
      id: 'firebase',
      name: 'Firebase Push',
      description: 'Push notifications for mobile apps',
      status: 'Connected',
      icon: '🔔',
      lastSync: '10 minutes ago',
      apiKey: 'AIza...............xyz',
      endpoints: [
        { name: 'Cloud Messaging', status: 'Active', calls: '4,567' }
      ]
    },
    {
      id: 'aws-s3',
      name: 'AWS S3 Storage',
      description: 'Document and image storage',
      status: 'Connected',
      icon: '☁️',
      lastSync: '30 minutes ago',
      apiKey: 'AKIA...............xyz',
      endpoints: [
        { name: 'Upload', status: 'Active', calls: '890' },
        { name: 'Download', status: 'Active', calls: '2,345' }
      ]
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">API Provider Integration</h1>
          <p className="text-gray-600">Manage third-party service integrations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{provider.icon}</div>
                  <div className="flex items-center space-x-2">
                    <span className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${provider.status === 'Connected'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-gray-100 text-gray-700'
                      }`}>
                      {provider.status === 'Connected' ? (
                        <Check className="w-3 h-3 mr-1" />
                      ) : (
                        <X className="w-3 h-3 mr-1" />
                      )}
                      {provider.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{provider.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{provider.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    <span>Last sync: {provider.lastSync}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Key className="w-4 h-4 mr-2" />
                    <span className="font-mono text-xs">{provider.apiKey}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedProvider(provider)}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Configure</span>
                  </button>
                  {provider.status === 'Connected' && (
                    <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition">
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {provider.endpoints.length > 0 && (
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Active Endpoints</p>
                  <div className="space-y-1">
                    {provider.endpoints.map((endpoint, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">{endpoint.name}</span>
                        <span className="font-semibold text-gray-900">{endpoint.calls} calls</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      
      </div>

      {selectedProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{selectedProvider.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProvider.name}</h2>
                  <p className="text-sm text-gray-600">{selectedProvider.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProvider(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                <input
                  type="text"
                  defaultValue={selectedProvider.apiKey}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">API Secret</label>
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none font-mono text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Environment</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option>Production</option>
                  <option>Staging</option>
                  <option>Development</option>
                </select>
              </div>

              {selectedProvider.endpoints.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Endpoint Status</h3>
                  <div className="space-y-2">
                    {selectedProvider.endpoints.map((endpoint: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{endpoint.name}</p>
                          <p className="text-sm text-gray-500">{endpoint.calls} API calls today</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Changes to API configuration will take effect immediately. Make sure to test the integration after updating credentials.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-between">
              <button className="px-6 py-2 text-red-600 border border-red-300 rounded-lg hover:bg-red-50 font-medium">
                Disconnect
              </button>
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedProvider(null)}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
