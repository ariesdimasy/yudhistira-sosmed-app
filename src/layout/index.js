import { Layout } from "antd";
import Header from "./Header";
import Footer from "./Footer";

import "./index.css";

const { Content } = Layout;

export default function Index(props) {
  return (
    <div>
      <Header></Header>
      <Content className="content">{props.children}</Content>
      <Footer></Footer>
    </div>
  );
}
