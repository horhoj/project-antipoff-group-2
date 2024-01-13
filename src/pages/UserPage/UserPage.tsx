import styles from './UserPage.module.scss';
import { EmailIcon, TelephoneIcon } from '~/assets/icons';
import { Header } from '~/components/Header';

export function UserPage() {
  return (
    <div className={styles.UserPage}>
      <Header>
        <div className={styles.HeaderDataWrap}>
          <img
            src={'https://reqres.in/img/faces/1-image.jpg'}
            className={styles.avatar}
            alt={'avatar'}
          />
          <div>
            <div className={styles.bigTitle}>{'Eve Holt'}</div>
            <div className={styles.title}>Партнер</div>
          </div>
        </div>
      </Header>
      <div className={styles.dataBlock}>
        <div className={styles.textWrap}>
          <div>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </div>
          <div>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: {'"'}Один из самых позитивных моментов — это
            осознание того, что ты помог клиенту перейти на совершенно новый
            уровень компетентности, уверенность в том, что после окончания
            проекта у клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно{'"'}.
          </div>
          <div>
            Помимо разнообразных проектов для клиентов финансового сектора,
            Сорин ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.contactsItem}>
            <TelephoneIcon />
            <span>+7 (954) 333-44-55</span>
          </div>
          <div className={styles.contactsItem}>
            <EmailIcon />
            <span>{'aaaa@aaaaa.ru'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
