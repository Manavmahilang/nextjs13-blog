import React from 'react';
import BlogContainers from './components/BlogContainers';
import Pagination from './components/ui/pagination';
import Footer from './components/ui/footer';

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <BlogContainers />
      <Pagination />
      <Footer />
      </div>  
  )
}
