import TweetBox from './components/TweetBox';
import TweetList from './components/TweetList';

let mockTweets = [
  {id: 1, name: 'Andrew Dinh', body: 'My #FirstTweet'},
  {id: 2, name: 'Andrew Dinh', body: 'My #SecondTweet'},
  {id: 3, name: 'Andrew Dinh', body: 'My #ThirdTweet'}
];

class Main extends React.Component {
  addTweet(tweetToAdd){
    // mockTweets.unshift({...})
  },
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={this.addTweet.bind(this)}/>
        <TweetList tweets={mockTweets}/>
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
