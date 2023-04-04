import React from 'react';

const Pagination: React.FC = () => {
    return (
        <div className="flex justify-center mt-8">
        <nav className="inline-flex rounded-md shadow">
          <a href="#" className="px-4 py-2 rounded-l-md bg-white text-gray-700 hover:text-gray-900">
            Previous
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 hover:text-gray-900">
            1
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 hover:text-gray-900">
            2
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 hover:text-gray-900">
            3
          </a>
          <a href="#" className="px-4 py-2 bg-white text-gray-700 hover:text-gray-900">
            Next
          </a>
        </nav>
      </div>

    );
};

export default Pagination;

{/* Pagination */ }
