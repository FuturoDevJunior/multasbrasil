import React from 'react';

export const ViolationsSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg">
            <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
            <div className="h-6 w-32 bg-gray-300 rounded" />
          </div>
        ))}
      </div>

      <div className="flex items-center mb-4">
        <div className="h-6 w-40 bg-gray-200 rounded mr-2" />
        <div className="h-6 w-8 bg-gray-100 rounded-full" />
      </div>

      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-24 bg-gray-300 rounded" />
              </div>
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-24 bg-gray-300 rounded" />
              </div>
              <div className="col-span-2">
                <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-full bg-gray-300 rounded" />
              </div>
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-20 bg-gray-300 rounded" />
              </div>
              <div>
                <div className="h-4 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-24 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};