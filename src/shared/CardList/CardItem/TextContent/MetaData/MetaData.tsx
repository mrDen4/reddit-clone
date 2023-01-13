import React from 'react';
import styles from './metadata.less';

export function MetaData() {
  return (
    <div className={styles.metaData}>
    <div className={styles.userLink}>
      <img src="https://cdn.dribbble.com/users/962743/avatars/normal/33025b4a003c62e51916f041984f8dda.png?1615551147" alt="avatar" className={styles.avatar} />
      <a href="#userName" className={styles.username}>Денис Давыдов</a>
    </div>
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>
      4 часа назад
    </span>
  </div>
  );
}
