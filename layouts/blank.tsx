import React from 'react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

const BlankLayout = ({ children }: IProps) => {
    return (
        <div className="theme-default theme-blank loading-area">
            <div className="main-blank">
                {children}
            </div>
        </div>
    );
};
export default BlankLayout;
