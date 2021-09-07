import { Row, Col } from 'antd';
import { OrderCard } from 'components/Common';
import { ORDERS } from 'helpers/constants';

import styles from '../styles.module.less';

const Results = () => {
  return (
    <div className={styles.filter_results}>
      <Row gutter={[0, 50]}>
        {ORDERS.map((item, i) => (
          <Col xxl={{ span: 7, offset: i % 3 ? 1 : 0 }} xl={{ span: 11, offset: i % 2 ? 1 : 0 }} lg={{ span: 11, offset: i % 2 ? 1 : 0 }} md={{ span: 24, offset: 0 }}>
            <OrderCard key={item.id} item={item} type="completed" />
          </Col>
        ))}
      </Row>
    </div >
  );
};

export default Results;
