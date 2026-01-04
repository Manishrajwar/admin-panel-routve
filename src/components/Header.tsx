import { Bell, Search, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-gray-200 px-3 md:px-6 py-3 md:py-4">
      <div className="flex items-center  justify-between gap-2 md:gap-0">
        {/* Search - Hidden on mobile */}
        <div className="hidden md:block  flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-sm"
            />
          </div>
        </div>

        <div className="flex md:w-fit w-full items-center justify-end space-x-2 md:space-x-4 md:ml-6">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition touch-target">
            <Bell className="w-8 h-8" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

       <div className='flex items-center gap-2'>
            {/* User Info - Responsive */}
          <div className="flex items-center space-x-2 md:space-x-3 pl-2 md:pl-4 border-l border-gray-200">
            <div className=" text-right">
              <p className="text-xs md:text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500 ">admin@routeve.com</p>
            </div>
            <div className="bg-emerald-100 p-1.5 md:p-2 rounded-lg">
              <User className="w-4 h-4 md:w-5 md:h-5 text-emerald-700" />
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition touch-target"
            title="Logout"
          >
            <LogOut className="w-4 h-4 md:w-5 md:h-5" />
          </button>
       </div>
        </div>
      </div>
    </header>
  );
}
