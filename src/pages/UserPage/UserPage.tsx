import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './UserPage.module.scss';
import { getParams } from './UserPage.helpers';
import { EmailIcon, TelephoneIcon } from '~/assets/icons';
import { Header } from '~/components/Header';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { usersSlice } from '~/store/usersSlice';
import { Spinner } from '~/ui/Spinner';
import { ErrorView } from '~/components/ErrorView';

export function UserPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { id: userId } = getParams(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (userId !== null) {
      dispatch(usersSlice.thunks.fetchUserThunk({ userId }));
    }
    return () => {
      dispatch(usersSlice.actions.fetchUserRequestClear());
    };
  }, [userId]);

  const fetchUserRequest = useAppSelector(
    (state) => state.userList.fetchUserRequest,
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Spinner isShow={fetchUserRequest.isLoading} />
      <ErrorView error={fetchUserRequest.error} />
      <div className={styles.UserPage}>
        <Header onBack={handleBack}>
          {fetchUserRequest.data && (
            <div className={styles.HeaderDataWrap}>
              <img
                src={fetchUserRequest.data.data.avatar}
                className={styles.avatar}
                alt={'avatar'}
              />
              <div>
                <div
                  className={styles.bigTitle}
                >{`${fetchUserRequest.data.data.first_name} ${fetchUserRequest.data.data.last_name}`}</div>
                <div className={styles.title}>Партнер</div>
              </div>
            </div>
          )}
        </Header>
        {fetchUserRequest.data && (
          <div className={styles.dataBlock}>
            <div className={styles.textWrap}>
              <div>
                Клиенты видят в нем эксперта по вопросам разработки комплексных
                решений финансовых продуктов, включая такие аспекты, как
                организационная структура, процессы, аналитика и ИТ-компоненты.
                Он помогает клиентам лучше понимать структуру рисков их бизнеса,
                улучшать процессы за счет применения новейших технологий и
                увеличивать продажи, используя самые современные аналитические
                инструменты.
              </div>
              <div>
                В работе с клиентами недостаточно просто решить конкретную
                проблему или помочь справиться с трудностями. Не менее важно
                уделять внимание обмену знаниями: {'"'}Один из самых позитивных
                моментов — это осознание того, что ты помог клиенту перейти на
                совершенно новый уровень компетентности, уверенность в том, что
                после окончания проекта у клиента есть все необходимое, чтобы
                дальше развиваться самостоятельно{'"'}.
              </div>
              <div>
                Помимо разнообразных проектов для клиентов финансового сектора,
                Сорин ведет активную предпринимательскую деятельность. Он
                является совладельцем сети клиник эстетической медицины в
                Швейцарии, предлагающей инновационный подход к красоте, а также
                инвестором других бизнес-проектов.
              </div>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contactsItem}>
                <TelephoneIcon />
                <span>+7 (954) 333-44-55</span>
              </div>
              <div className={styles.contactsItem}>
                <EmailIcon />
                <span>{fetchUserRequest.data.data.email}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
