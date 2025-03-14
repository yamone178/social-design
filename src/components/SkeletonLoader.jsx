import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="mt-5 space-y-4">
      {/* Skeleton for the profile image */}
      <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>

      {/* Skeleton for the text */}
      <div className="w-2/3 h-4 bg-gray-200 rounded animate-pulse"></div>
      <div className="w-1/3 h-4 bg-gray-200 rounded animate-pulse"></div>

      {/* Skeleton for the larger content */}
      <div className="w-full h-24 bg-gray-200 rounded animate-pulse"></div>
    </div>
  );
};

export default SkeletonLoader;
