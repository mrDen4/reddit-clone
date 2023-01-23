import React from 'react';
import styles from './genericlist.less';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'li' | 'a' | 'div' | 'button';
  href?: string;
}

interface IGenericList {
  list: IItem[],
}

const noop = () => {};

export function GenericList({ list }: IGenericList) {
  return (
    <>
      {list.map(({As = 'div', text, onClick = noop, className, id, href}) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {text}
        </As>
      ))}
    </>
  );
}
