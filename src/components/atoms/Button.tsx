import React from 'react';
import '../../App.css'
interface ButtonProps {
    title?: string;
    children?: any,
    icon?: any,
    className?: string,
    type?: 'primary' | 'secondary',
    style?: any
  }
const Button: React.FC<ButtonProps> = ({icon, children, className, type, style}) => {

  return (
    <button className={`flex gap-4 items-center bh-btn bh-btn-${type} ${className} justify-between`} style={style}>
        {children}
        {icon}
    </button>
  );
};

export default Button; 
