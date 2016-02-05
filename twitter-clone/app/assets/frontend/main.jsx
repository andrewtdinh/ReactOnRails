import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {id: 1, name: 'Andrew Dinh', body: 'My #FirstTweet'},
  {id: 2, name: 'Andrew Dinh', body: 'My #SecondTweet'},
  {id: 3, name: 'Andrew Dinh', body: 'My #ThirdTweet'}
];

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetList: mockTweets}
  }

  addTweet(tweetToAdd){
    let newTweetList = this.state.tweetList;
    newTweetList.unshift({id: Date.now(), name: 'Guest', body: tweetToAdd});
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
