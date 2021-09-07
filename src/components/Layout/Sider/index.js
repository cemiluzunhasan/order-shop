import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import menuItems from './menuItems';

import styles from './styles.module.less';

const Sider = () => {
  const history = useHistory();
  const [active, setActive] = useState(history.location.pathname);

  const onClick = (item) => {
    history.push(item.path);
  }

  useEffect(() => {
    return history.listen(location => {
      setActive(location.pathname);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Layout.Sider width={422}>
      <img src="https://www.pikselmutfak.com/wp-content/uploads/2020/04/piksel-mutfak-logo-88.png" className="logo" alt="logo" />
      <Menu mode="inline" activeKey={active}>
        {menuItems.map(x =>
          <Menu.Item key={x.path} onClick={() => onClick(x)}>
            {x.text}
          </Menu.Item>
        )}
      </Menu>
      <Button type="link" className={styles.btn_logout}>Logout</Button>
    </Layout.Sider>
  );
};

export default Sider;
