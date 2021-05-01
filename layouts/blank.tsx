import { ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

const BlankLayout = ({ children }: IProps) => <div>{children}</div>;
export default BlankLayout;
