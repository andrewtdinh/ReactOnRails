import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetList: []}
  }

  addTweet(tweetToAdd){
    let newTweetList = this.state.tweetList;
    newTweetList.unshift({id: Date.now(), name: 'Guest', body: tweetToAdd});
    this.setState({tweetList: newTweetList})
  }

  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={this.state.tweetList}/>
      </div>
    );
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
