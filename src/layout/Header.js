import { Layout, Menu } from "antd";
import "./Header.css";

const { Header } = Layout;

export default function MyHeader() {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo">Yudhistira Media</div>
      <Menu
        theme="dark"
        mode="vertical"
        items={[
          {
            label: <a href="/tweets">Tweets</a>,
            key: "tweet",
          },
        ]}
      />
    </Header>
  );
}
