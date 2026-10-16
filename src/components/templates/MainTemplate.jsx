import React from 'react';

const MainTemplate = ({ children }) => {
  return (
    <div className="container py-5">
      {children}
    </div>
  );
};

export default MainTemplate;