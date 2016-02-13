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

  componentDidMount(){
    $.ajax("/tweets")
    .success(data => this.setState({tweetsList: data}))
    .error(error => console.log(error));
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
  let reactNode = document.getElementById('react');
  if (reactNode){
    React.render(<Main />, reactNode);
  }
};

$(documentReady);
