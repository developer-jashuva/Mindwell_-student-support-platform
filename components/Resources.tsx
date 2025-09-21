
import React, { useState } from 'react';
import { RESOURCES } from '../constants';
import { ResourceType } from '../types';

const ResourceIcon = ({ type }: { type: ResourceType }) => {
    let icon;
    switch (type) {
        case ResourceType.Article:
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            );
            break;
        case ResourceType.Video:
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            );
            break;
        case ResourceType.Audio:
            icon = (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.858 15.858a5 5 0 010-7.072m2.828 9.9a9 9 0 010-12.728M12 12a3 3 0 100-6 3 3 0 000 6z" />
                </svg>
            );
            break;
    }
    return <div className="text-primary">{icon}</div>;
};


const Resources: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(RESOURCES.map(r => r.category)))];

  const filteredResources = filter === 'All' ? RESOURCES : RESOURCES.filter(r => r.category === filter);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Resource Hub</h2>
      <p className="text-gray-500 mb-6">Find articles, videos, and audio guides to support your well-being.</p>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                filter === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <div key={resource.id} className="border rounded-lg p-5 flex flex-col hover:shadow-lg transition-shadow bg-gray-50">
            <div className="flex justify-between items-start mb-3">
              <span className="bg-blue-100 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{resource.category}</span>
              <ResourceIcon type={resource.type} />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{resource.title}</h3>
            <p className="text-gray-600 text-sm flex-grow mb-4">{resource.description}</p>
            <a href={resource.link} className="text-primary font-semibold hover:underline mt-auto">
              Access Resource &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
