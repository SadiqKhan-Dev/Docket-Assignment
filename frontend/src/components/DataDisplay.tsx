// frontend/src/components/DataDisplay.tsx
import React, { useState, useEffect } from 'react';
import { fetchData, DataResponse } from '../services/dataService';

type DataDisplayProps = {
  apiUrl?: string;
};

export default function DataDisplay({ apiUrl }: DataDisplayProps) {
  const [data, setData] = useState<DataResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchData();
        
        if (response.error) {
          setError(response.error);
        } else if (response.data) {
          setData(response.data);
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className="data-display">
      <h2>{data.message}</h2>
      <ul>
        {data.data.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .data-display {
          margin: 2rem 0;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .loading, .error {
          padding: 1rem;
          text-align: center;
        }
        
        .error {
          color: #d32f2f;
        }
        
        ul {
          list-style: none;
          padding: 0;
        }
        
        li {
          padding: 1rem;
          border-bottom: 1px solid #eee;
        }
        
        li:last-child {
          border-bottom: none;
        }
        
        h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }
        
        p {
          margin: 0;
          color: #666;
        }
      `}</style>
    </div>
  );
}