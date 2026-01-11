// frontend/tests/DataDisplay.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DataDisplay from '../src/components/DataDisplay';

// Mock the data service
jest.mock('../src/services/dataService', () => ({
  fetchData: jest.fn(() => Promise.resolve({
    data: {
      message: 'Sample data retrieved successfully',
      data: [
        { id: 1, name: 'Sample Item 1', description: 'This is a sample item' },
        { id: 2, name: 'Sample Item 2', description: 'This is another sample item' }
      ]
    },
    status: 200
  }))
}));

describe('DataDisplay Component', () => {
  it('renders loading state initially', () => {
    render(<DataDisplay />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders data after loading', async () => {
    render(<DataDisplay />);
    
    await waitFor(() => {
      expect(screen.getByText('Sample data retrieved successfully')).toBeInTheDocument();
    });
    
    expect(screen.getByText('Sample Item 1')).toBeInTheDocument();
    expect(screen.getByText('This is a sample item')).toBeInTheDocument();
    expect(screen.getByText('Sample Item 2')).toBeInTheDocument();
    expect(screen.getByText('This is another sample item')).toBeInTheDocument();
  });
});