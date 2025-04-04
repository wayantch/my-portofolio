import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import { IoMdMenu } from 'react-icons/io';

const Blog = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
      <div className="relative">
          <h1 className="text-3xl font-semibold text-white mb-4">Blog</h1>
          <p className="text-gray-300 mb-6">
              Welcome to my blog! Here, I share my thoughts, tutorials, and
              insights on web development and technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Blog Post 1 */}
              <div className="bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-white">
                      Blog Post 1
                  </h2>
                  <p className="text-gray-300">
                      This is a brief description of blog post 1.
                  </p>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-white">
                      Blog Post 2
                  </h2>
                  <p className="text-gray-300">
                      This is a brief description of blog post 2.
                  </p>
              </div>

              {/* Add more blog posts as needed */}
              <div className="bg-gray-700 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-white">
                      Blog Post 3
                  </h2>
                  <p className="text-gray-300">
                      This is a brief description of blog post 3.
                  </p>
              </div>
          </div>
      </div>
  );
}

export default Blog

