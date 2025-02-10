'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
  const router = useRouter();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
};

export default NotFound;
