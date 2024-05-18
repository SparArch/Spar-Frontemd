import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the current path
    const currentPath = location.pathname;

    // Retrieve the visit counts from local storage
    const visitCounts = JSON.parse(localStorage.getItem('visitCounts') || '{}');

    // Increment the visit count for the current path
    visitCounts[currentPath] = (visitCounts[currentPath] || 0) + 1;

    // Store the updated visit counts back to local storage
    localStorage.setItem('visitCounts', JSON.stringify(visitCounts));

    // Log the visit count for the current path
    console.log(`Page view for ${currentPath}: ${visitCounts[currentPath]}`);
  }, [location]);

  return null;
};

export default TrackPageViews;
