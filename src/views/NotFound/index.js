import { withRouter } from "react-router";
import { Button, Result } from "antd";

const NotFound = ({ history }) => {

  const onClick = () => {
    history.push('/');
  }

  return (
    <div className="NotFound d-flex j-center a-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={onClick}>Back Home</Button>}
      />
    </div>
  );
};

export default withRouter(NotFound);
