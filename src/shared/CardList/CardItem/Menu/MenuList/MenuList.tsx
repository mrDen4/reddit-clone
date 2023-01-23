import React from 'react'
import { CloseIcon, ReportIcon } from '../../../../icons'
import styles from './menulist.less'

interface IMenuList {
  postId: string
}

export function MenuList({postId}: IMenuList) {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item} onClick={() => console.log(postId)}>
        <CloseIcon />
        Скрыть
      </li>
      <li className={styles.list__item}>
        <ReportIcon />
        Пожаловаться
      </li>
      <li className={styles.list__item}>Закрыть</li>
    </ul>
  )
}
