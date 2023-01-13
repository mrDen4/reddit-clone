import React from 'react';
import styles from './title.less';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-link" className={styles.postLink}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil id vero dolor? 
      </a>
    </h2>
  );
}
