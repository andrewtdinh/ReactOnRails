export default class TweetList extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <li class="collection-item avatar">
            <i class="material-icons circle">person_pin</i>
            <span class="title">Andrew Dinh</span>
            <p>My #FirstTweet</p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    );
  }
}
