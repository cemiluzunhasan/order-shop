import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Drawer, Input, Menu } from "antd";
import { MenuFoldOutlined } from '@ant-design/icons';
import menuItems from "components/Layout/Sider/menuItems";

import styles from '../styles.module.less';

const Filter = () => {

  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const onClickMenu = () => {
    setVisible(true);
  }

  const onClickMenuItem = (item) => {
    setVisible(false);
    history.push(item.path);
  }

  return (
    <div className={styles.filter}>
      <Input className={styles.filter_input} placeholder="Search Order Number#" />
      <MenuFoldOutlined className={styles.btn_hamburger} onClick={onClickMenu} style={{ fontSize: 22, paddingRight: 20 }} />
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <Menu mode="inline" className={styles.hamburger_menu} activeKey={history.location.pathname}>
          {menuItems.map(x =>
            <Menu.Item key={x.path} onClick={() => onClickMenuItem(x)}>
              {x.text}
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Filter;
