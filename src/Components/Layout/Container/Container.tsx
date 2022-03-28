import React from 'react';
import './Container.scss';

interface Props {
  children: React.ReactNode
}

function Container({ children }: Props) {
  return <div className="_container">{children}</div>;
}

export default Container;
