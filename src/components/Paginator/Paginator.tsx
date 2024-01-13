import classNames from 'classnames';
import { useMemo } from 'react';
import styles from './Paginator.module.scss';
import { getUUID } from '~/utils/getUUID';

interface PaginatorProps {
  onPaginate: (page: number) => void;
  maxPage: number;
  currentPage: number;
}

export function Paginator({
  currentPage,
  maxPage,
  onPaginate,
}: PaginatorProps) {
  const btnsList = useMemo(
    () =>
      Array(maxPage)
        .fill(null)
        .map(() => getUUID()),
    [maxPage],
  );

  return (
    <div className={styles.Paginator}>
      {btnsList.map((id, index) => (
        <button
          onClick={() => onPaginate(index + 1)}
          key={id}
          className={classNames(
            styles.button,
            index + 1 === currentPage && styles.buttonActive,
          )}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
