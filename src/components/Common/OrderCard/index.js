import { useCallback } from 'react';
import { Row, Col, Divider, Button } from 'antd';
import styles from './styles.module.less';

/*
 * type: completed || uncompleted  
*/
const OrderCard = ({ item, type }) => {

  const Action = useCallback(() => {
    if (type === 'active') {
      return <Button type="info" className={styles.btn}>Mark as completed</Button>
    } else if (type === 'completed') {
      return <Button type="danger" className={styles.btn}>Mark as uncompleted</Button>
    } else {
      return <Button type="info" className={styles.btn}>Mark as completed</Button>
    }
  }, [type]);

  return (
    <div className={styles.container}>
      <Row>
        <Col span={12}>
          <h2 className={styles.table_name}>{item.tableName}</h2>
          <p className={styles.date}>{item.date}</p>
        </Col>
        <Col span={12}>
          <h2 className={styles.order_name}>{item.orderName}</h2>
        </Col>
        <Col span={24}>
          {item.products.map(product => (
            <Row className={styles.product} key={product.id}>
              <Col span={12}>
                <h3 className={styles.product_name}>{product.name}</h3>
              </Col>
              <Col span={12}>
                <h3 className={styles.product_quantity}>Qty{product.quantity}</h3>
              </Col>
              <Col span={24}>
                <p className={styles.product_notes}>Notes: {product.notes}</p>
              </Col>
              <Divider />
            </Row>
          ))}
        </Col>
        <Col xxl={{ span: 15, offset: 9 }} xl={{ span: 15, offset: 9 }} lg={{ span: 12, offset: 12 }} md={{ span: 24 }} className={styles.btn_container}>
          {Action()}
        </Col>
      </Row>
    </div>
  );
}

export default OrderCard;
