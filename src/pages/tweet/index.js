import TweetForm from "../../components/TweetForm";
import TweetList from "../../components/TweetList";

export default function Tweet() {
  return (
    <div>
      <h1> Post Tweet </h1>
      <TweetForm></TweetForm>
      <TweetList></TweetList>
    </div>
  );
}
