import React from 'react';

interface IFormErrorProps {
  errorMessage: string;
}

// Form error component
export const FormError: React.FC<IFormErrorProps> = ({ errorMessage }: any) => (
  <span role="alert" className="font-medium text-red-500">
    {errorMessage}
  </span>
);
