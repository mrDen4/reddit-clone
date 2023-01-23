import React from 'react'
import { CloseIcon, CommentsIcon, ReportIcon, SaveIcon, ShareIcon } from '../../../../icons'
import styles from './menulist.less'
import classnames from 'classnames';

interface IMenuList {
  postId: string
}

export function MenuList({postId}: IMenuList) {
  return (
    <ul className={styles.list}>
      <li className={classnames(styles.list__item, styles.list__item_desktop)} onClick={() => console.log(postId)}>
        <CommentsIcon />
        Комментарии
      </li>
      <li className={classnames(styles.list__item, styles.list__item_desktop)} onClick={() => console.log(postId)}>
        <ShareIcon />
        Поделиться
      </li>
      <li className={styles.list__item} onClick={() => console.log(postId)}>
        <CloseIcon />
        Скрыть
      </li>
      <li className={classnames(styles.list__item, styles.list__item_desktop)} onClick={() => console.log(postId)}>
        <SaveIcon />
        Сохранить
      </li>
      <li className={styles.list__item}>
        <ReportIcon />
        Пожаловаться
      </li>
      <li className={classnames(styles.list__item, styles.list__item_mobile)}>Закрыть</li>
    </ul>
  )
}
