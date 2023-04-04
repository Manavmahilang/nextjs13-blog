import React from 'react'

type Props = {}

export default function BlogContainers({}: Props) {
  return (
    <div className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt="Blog 1" />
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">Blog 1</h3>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum neque ac diam malesuada efficitur. Vestibulum consequat malesuada ipsum, vitae fringilla purus.</p>
                        <a className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400" href="#">Read more</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt="Blog 2" />
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">Blog 2</h3>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum neque ac diam malesuada efficitur. Vestibulum consequat malesuada ipsum, vitae fringilla purus.</p>
                        <a className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400" href="#">Read more</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img className="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt="Blog 3" />
                    <div className="p-6">
                        <h3 className="font-bold text-xl mb-2">Blog 3</h3>
                        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum neque ac diam malesuada efficitur. Vestibulum consequat malesuada ipsum, vitae fringilla purus.</p>
                        <a className="mt-4 inline-block px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400" href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
  )
}