import React from 'react';
import '../../App.css'
interface TypographyProps {
    children?: any,
    icon?: any,
    className?: string,
    type?: 'primary' | 'secondary'
  }
const Typography: React.FC<TypographyProps> = ({ children, type, className}) => {

  return (
   <span className={`bh-text-${type} ${className}`}> {children}</span>
  );
};

export default Typography; 
