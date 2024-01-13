import styles from './UserListPage.module.scss';
import { getUUID } from '~/utils/getUUID';
import { Header } from '~/components/Header';
import { UserListCard } from '~/components/UserListCard';
import { Paginator } from '~/components/Paginator';

const USER_LIST = Array(6)
  .fill(null)
  .map(() => getUUID());

export function UserListPage() {
  return (
    <div className={styles.UserListPage}>
      <Header>
        <div className={styles.titleWrapper}>
          <div className={styles.bigTitle}>Наша команда</div>
          <div className={styles.title}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </div>
        </div>
      </Header>
      <div className={styles.userList}>
        {USER_LIST.map((id) => (
          <UserListCard key={id} />
        ))}
      </div>
      <Paginator />
    </div>
  );
}
