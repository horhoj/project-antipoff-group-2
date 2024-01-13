import classNames from 'classnames';
import styles from './Header.module.scss';
import { HeaderBackIcon, HeaderExitIcon } from '~/assets/icons';

interface HeaderProps {
  children?: React.ReactNode;
}
export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.Header}>
      <button className={classNames(styles.button, styles.backButton)}>
        <span className={styles.buttonText}>Назад</span>
        <span className={styles.buttonIcon}>
          <HeaderBackIcon />
        </span>
      </button>
      <button className={classNames(styles.button, styles.exitButton)}>
        <span className={styles.buttonText}>Выход</span>
        <span className={styles.buttonIcon}>
          <HeaderExitIcon />
        </span>
      </button>
      {children}
    </div>
  );
}
