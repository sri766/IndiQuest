import React, { Suspense } from 'react';
import { Loader } from 'lucide-react';

const LoaderInstance = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Loader size={128} color="pink" />
    </div>
  );
};

const LoaderPage = ({ children }) => {
  return (
    <Suspense fallback={<LoaderInstance />}>
      {children}
    </Suspense>
  );
};

export default LoaderPage;
