import React from 'react'
import styles from './menu.less'
import { Dropdown } from '../../../Dropdown'
import { DropdowIcon } from '../../../icons'
import { MenuList } from './MenuList'

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('opened')}
        isOpen={false}
        button={
          <button className={styles.menuButton}>
            <DropdowIcon />
          </button>
        }
      >
        <MenuList postId='123'/>
      </Dropdown>
    </div>
  )
}
