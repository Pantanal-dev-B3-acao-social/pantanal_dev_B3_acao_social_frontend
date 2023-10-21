import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
