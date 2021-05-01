import React from 'react';
import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: IProps) => {
    return (
        <>
            <div>Layout Default</div>
            <div>{children}</div>
        </>
    );
};
export default DefaultLayout;
