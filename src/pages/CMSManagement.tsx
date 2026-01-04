import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FileText, Plus, Edit, Trash2, Eye, Image, Video, Calendar } from 'lucide-react';

export default function CMSManagement() {
  const [activeTab, setActiveTab] = useState<'pages' | 'blog' | 'media'>('pages');
  const [showEditor, setShowEditor] = useState(false);



  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Safe Taxi Travel',
      author: 'Admin User',
      category: 'Safety',
      status: 'Published',
      publishDate: '2024-01-12',
      views: 4521,
      comments: 23
    },
    {
      id: 2,
      title: 'How to Book a Taxi: Complete Guide',
      author: 'Admin User',
      category: 'Guide',
      status: 'Published',
      publishDate: '2024-01-10',
      views: 6789,
      comments: 45
    },
    {
      id: 3,
      title: 'New Routes Added to RouteVe Network',
      author: 'Admin User',
      category: 'News',
      status: 'Published',
      publishDate: '2024-01-08',
      views: 3214,
      comments: 12
    },
    {
      id: 4,
      title: 'Benefits of Using RouteVe for Business',
      author: 'Admin User',
      category: 'Business',
      status: 'Draft',
      publishDate: '2024-01-15',
      views: 0,
      comments: 0
    }
  ];

  const mediaFiles = [
    { id: 1, name: 'hero-banner.jpg', type: 'Image', size: '2.4 MB', uploaded: '2024-01-14', usedIn: 'Home Page' },
    { id: 2, name: 'taxi-fleet.jpg', type: 'Image', size: '1.8 MB', uploaded: '2024-01-13', usedIn: 'Services' },
    { id: 3, name: 'promo-video.mp4', type: 'Video', size: '15.2 MB', uploaded: '2024-01-12', usedIn: 'About Us' },
    { id: 4, name: 'driver-profile.jpg', type: 'Image', size: '890 KB', uploaded: '2024-01-11', usedIn: 'Multiple' },
    { id: 5, name: 'city-map.jpg', type: 'Image', size: '3.1 MB', uploaded: '2024-01-10', usedIn: 'Contact' }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">CMS Management</h1>
            <p className="text-gray-600">Manage website content, blog posts, and media</p>
          </div>
          <button
            onClick={() => setShowEditor(true)}
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition shadow-lg shadow-emerald-600/30"
          >
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Create New</span>
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex space-x-4 p-2">

              <button
                onClick={() => setActiveTab('blog')}
                className={`px - 6 py - 3 rounded - lg font - medium transition ${activeTab === 'blog'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50'
                  } `}
              >
                Blog Posts
              </button>
              <button
                onClick={() => setActiveTab('media')}
                className={`px - 6 py - 3 rounded - lg font - medium transition ${activeTab === 'media'
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-50'
                  } `}
              >
                Media Library
              </button>
            </div>
          </div>

          <div className="p-6">


            {activeTab === 'blog' && (
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-4">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <div className="flex space-x-3">
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                      <option>All Categories</option>
                      <option>Safety</option>
                      <option>Guide</option>
                      <option>News</option>
                      <option>Business</option>
                    </select>
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                      <option>All Status</option>
                      <option>Published</option>
                      <option>Draft</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition">
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className={`px - 3 py - 1 rounded - full text - xs font - medium ${post.status === 'Published'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                          } `}>
                          {post.status}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>

                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.publishDate}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{post.views} views</span>
                          <span>{post.comments} comments</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg transition">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-4">
                  <input
                    type="text"
                    placeholder="Search media files..."
                    className="flex-1 max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                  <button className="flex items-center space-x-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition">
                    <Plus className="w-4 h-4" />
                    <span className="font-medium">Upload</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {mediaFiles.map((file) => (
                    <div key={file.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition">
                      <div className="aspect-square bg-gray-200 flex items-center justify-center">
                        {file.type === 'Image' ? (
                          <Image className="w-12 h-12 text-gray-400" />
                        ) : (
                          <Video className="w-12 h-12 text-gray-400" />
                        )}
                      </div>
                      <div className="p-4">
                        <p className="font-medium text-gray-900 text-sm mb-1 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500 mb-2">{file.size}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">{file.uploaded}</span>
                          <button className="p-1 text-red-600 hover:bg-red-50 rounded transition">
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Content Editor</h2>
              <button
                onClick={() => setShowEditor(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea rows={10} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                    <option>Draft</option>
                    <option>Published</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none">
                    <option>Select category</option>
                    <option>Safety</option>
                    <option>Guide</option>
                    <option>News</option>
                    <option>Business</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button
                onClick={() => setShowEditor(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium">
                Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
