import classNames from 'classnames';
import styles from './Paginator.module.scss';
import { getUUID } from '~/utils/getUUID';

interface PaginatorProps {
  children?: React.ReactNode;
}

const BTNS_LIST = Array(6)
  .fill(null)
  .map(() => getUUID());

export function Paginator({ children }: PaginatorProps) {
  return (
    <div className={styles.Paginator}>
      {BTNS_LIST.map((id, index) => (
        <button
          key={id}
          className={classNames(
            styles.button,
            index === 0 && styles.buttonActive,
          )}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
