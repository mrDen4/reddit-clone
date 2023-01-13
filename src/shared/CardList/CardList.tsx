import React from 'react';
import { CardItem } from './CardItem';
import styles from './cardlist.less';

export function CardList() {
  return (
    <ul className={styles.cardList}>
      <CardItem />
    </ul>
  );
}
