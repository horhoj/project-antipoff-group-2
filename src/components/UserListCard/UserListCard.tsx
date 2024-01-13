import { Link } from 'react-router-dom';
import styles from './UserListCard.module.scss';
import { LikeIcon } from '~/assets/icons';

interface UserListCardProps {
  avatarSrc: string;
  fullName: string;
  link: string;
}
export function UserListCard({ fullName, avatarSrc, link }: UserListCardProps) {
  return (
    <Link className={styles.UserListCard} to={link}>
      <img className={styles.avatar} src={avatarSrc} alt={'avatar'} />
      <div className={styles.name}>{fullName}</div>
      <button className={styles.like}>
        <LikeIcon isLike={true} />
      </button>
    </Link>
  );
}
