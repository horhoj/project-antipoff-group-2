import styles from './App.module.scss';
import { Router } from '~/router';

export function App() {
  return (
    <div className={styles.App}>
      <Router />
    </div>
  );
}
