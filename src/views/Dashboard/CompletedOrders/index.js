import Filter from './Filter';
import Results from './Results';
import styles from './styles.module.less';

const CompletedResults = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <Results />
    </div>
  )
};

export default CompletedResults;
