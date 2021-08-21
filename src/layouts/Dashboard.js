import { Layout } from 'antd';

import RouteProvider from 'routes/RouteProvider';
import dashboard from 'routes/dashboard';

// import Header from 'components/Header';
import Sider from 'components/Layout/Sider';

const { Content, Footer } = Layout;


const Dashboard = () => {
  return (
    <Layout>
      <Sider />
      <Layout className="site-layout">
        {/* <Header /> */}
        <Content className="Dashboard">
          <RouteProvider routes={dashboard} />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Piksel Mutfak</Footer>
      </Layout>
    </Layout>
  )
};

export default Dashboard;
