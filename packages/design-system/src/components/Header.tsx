import React from 'react';

interface HeaderProps {
  classNames?: string;
  children: React.ReactNode;
  isBig?: boolean;
}

export const Header = ({ children, classNames, isBig }: HeaderProps) => {
  return (
    <div>
      <div className={`font-body ${isBig ? 'text-[90px]' : 'text-[20px]'} ${classNames}`}>
        {children}
      </div>
    </div>
  );
};
