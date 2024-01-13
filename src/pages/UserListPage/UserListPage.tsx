import { useEffect } from 'react';
import { generatePath, useSearchParams } from 'react-router-dom';
import styles from './UserListPage.module.scss';
import { getSearchParams } from './userListPage.helpers';
import { Header } from '~/components/Header';
import { UserListCard } from '~/components/UserListCard';
import { Paginator } from '~/components/Paginator';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { Spinner } from '~/ui/Spinner';
import { ErrorView } from '~/components/ErrorView';
import { usersSlice } from '~/store/usersSlice';
import { ROUTES } from '~/router';

export function UserListPage() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { page } = getSearchParams(searchParams);

  useEffect(() => {
    dispatch(usersSlice.thunks.fetchUserListThunk({ page }));
  }, [page]);

  const fetchUserListRequest = useAppSelector(
    (state) => state.userList.fetchUserListRequest,
  );

  const handlePaginate = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <>
      <Spinner isShow={fetchUserListRequest.isLoading} />
      <ErrorView error={fetchUserListRequest.error} />
      <div className={styles.UserListPage}>
        <Header>
          <div className={styles.titleWrapper}>
            <div className={styles.bigTitle}>Наша команда</div>
            <div className={styles.title}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся на их плечи, и умеющие находить выход из любых,
              даже самых сложных ситуаций.
            </div>
          </div>
        </Header>
        {fetchUserListRequest.data && (
          <>
            <div className={styles.userList}>
              {fetchUserListRequest.data.data.map((user) => (
                <UserListCard
                  key={user.id}
                  fullName={`${user.first_name} ${user.last_name}`}
                  avatarSrc={user.avatar}
                  link={generatePath(ROUTES.USER, { id: user.id.toString() })}
                />
              ))}
            </div>
            <Paginator
              onPaginate={handlePaginate}
              maxPage={fetchUserListRequest.data.total_pages}
              currentPage={fetchUserListRequest.data.page}
            />
          </>
        )}
      </div>
    </>
  );
}
