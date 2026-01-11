// frontend/src/components/HealthIndicator.tsx
import React, { useState, useEffect } from 'react';

type HealthIndicatorProps = {
  apiUrl?: string;
};

export default function HealthIndicator({ apiUrl }: HealthIndicatorProps) {
  const [status, setStatus] = useState<string>('checking...');
  const [lastChecked, setLastChecked] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const healthUrl = apiUrl ? `${apiUrl}/health` : '/health';
        const response = await fetch(healthUrl);
        
        if (response.ok) {
          const data = await response.json();
          setStatus(data.status);
          setLastChecked(data.timestamp);
          setError(null);
        } else {
          throw new Error(`Health check failed with status: ${response.status}`);
        }
      } catch (err: any) {
        setError(err.message);
        setStatus('unhealthy');
      }
    };

    checkHealth();
    
    // Check health every 30 seconds
    const interval = setInterval(checkHealth, 30000);
    
    return () => clearInterval(interval);
  }, [apiUrl]);

  return (
    <div className={`health-indicator ${status}`}>
      <div className="status">
        <span className="label">Backend Status:</span>
        <span className={`value ${status}`}>{status}</span>
      </div>
      {lastChecked && (
        <div className="last-checked">
          Last checked: {new Date(lastChecked).toLocaleTimeString()}
        </div>
      )}
      {error && (
        <div className="error">
          Error: {error}
        </div>
      )}

      <style jsx>{`
        .health-indicator {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          margin: 1rem 0;
        }
        
        .status {
          display: flex;
          align-items: center;
        }
        
        .label {
          font-weight: bold;
          margin-right: 0.5rem;
        }
        
        .value {
          font-weight: bold;
        }
        
        .healthy {
          background-color: #e8f5e9;
          color: #2e7d32;
        }
        
        .unhealthy {
          background-color: #ffebee;
          color: #c62828;
        }
        
        .checking {
          background-color: #e3f2fd;
          color: #1565c0;
        }
        
        .last-checked {
          font-size: 0.8rem;
          color: #666;
          margin-top: 0.25rem;
        }
        
        .error {
          color: #c62828;
          font-size: 0.8rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}