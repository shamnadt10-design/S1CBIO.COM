// Vercel Speed Insights initialization
// This script initializes Speed Insights for tracking web vitals
(function() {
  'use strict';
  
  // Initialize the Speed Insights tracking
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
  
  // Load the Speed Insights script
  // Note: This will be automatically configured when deployed to Vercel
  // The script path /_vercel/speed-insights/script.js is provided by Vercel after enabling Speed Insights
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  
  // Add error handling
  script.onerror = function() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Speed Insights: Not loaded in development mode');
    }
  };
  
  document.head.appendChild(script);
})();
