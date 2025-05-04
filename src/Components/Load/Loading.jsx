import React, { useState, useEffect } from 'react';

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-container">
      {loading ? (
        <div className="loader"></div>
      ) : (
        <p></p>
      )}
      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          font-family: Arial, sans-serif;
        }
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}