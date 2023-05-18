import { Card } from "antd";
import TweetList from "../../components/TweetList";

export default function Profile() {
  const gridStyle = { width: "50%", textAlign: "left" };

  return (
    <div>
      <Card title="User1 Profile">
        <Card.Grid style={gridStyle}>Name </Card.Grid>
        <Card.Grid style={gridStyle}>
          <b>User1 Name</b>
        </Card.Grid>
        <Card.Grid style={gridStyle}>Username </Card.Grid>
        <Card.Grid style={gridStyle}>
          <b>User1</b>
        </Card.Grid>
        <Card.Grid style={gridStyle}>Email </Card.Grid>
        <Card.Grid style={gridStyle}>
          <b>user1@gmail.com</b>
        </Card.Grid>
      </Card>
      <TweetList></TweetList>
    </div>
  );
}
