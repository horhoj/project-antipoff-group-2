import styles from './UserListCard.module.scss';
import { LikeIcon } from '~/assets/icons';

interface UserListCardProps {
  children?: React.ReactNode;
}
export function UserListCard({ children }: UserListCardProps) {
  return (
    <div className={styles.UserListCard}>
      <img
        className={styles.avatar}
        src={'https://reqres.in/img/faces/1-image.jpg'}
        alt={'avatar'}
      />
      <div className={styles.name}>George Bluthi</div>
      <button className={styles.like}>
        <LikeIcon isLike={true} />
      </button>
    </div>
  );
}
