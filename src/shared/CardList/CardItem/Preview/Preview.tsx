import React from 'react';
import styles from './preview.less';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/userupload/4278708/file/original-2ddf812a21d5f8db3a9d5d25d812a73e.jpg?compress=1&amp;resize=752x" alt="" className={styles.previewImg} />
    </div>
  );
}
