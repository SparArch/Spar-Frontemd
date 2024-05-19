import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BACKEND_URL from '../helper';

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    // Fetch current visit counts
    axios.get(`${BACKEND_URL}/api/visits`)
      .then(response => {
        const visitCounts = response.data;
        const currentPath = location.pathname;
        const currentDate = new Date().toISOString();

        // Increment visit count and add the current date
        if (visitCounts[currentPath]) {
          visitCounts[currentPath].count += 1;
          visitCounts[currentPath].dates.push(currentDate);
        } else {
          visitCounts[currentPath] = { count: 1, dates: [currentDate] };
        }

        // Update visit counts on the server
        axios.post(`${BACKEND_URL}/api/visits`, visitCounts)
          .then(() => console.log(`Page view: ${currentPath} at ${currentDate}`))
          .catch(error => console.error('Error updating visit counts:', error));
      })
      .catch(error => console.error('Error fetching visit counts:', error));
  }, [location]);

  return null;
};

export default TrackPageViews;
