import { Avatar } from 'src/modules/common/components';
import Container from './styles';

export default function Suggestions() {
  return (
    <Container>
      <h4>Suggestions pour vous</h4>
      <div className="sub-container">
        <Avatar
          alt="Photo de profil de netflixfr"
          src="https://instagram.fcdg2-1.fna.fbcdn.net/v/t51.2885-19/244354502_461128625151710_8369321622925992570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcdg2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WdMgmZa1wqQAX8f3gyM&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-CnkN34TwaVxTGI38DK0vvHkoKQ3VHbTSyM7rTYC629Q&oe=62256580&_nc_sid=9a90d6"
        />
        <div className="text">
          <span>netlfixfr</span>
          <span>Netflix France</span>
          <span>Populaire</span>
        </div>
        <button type="button">
          <span>S&apos;abonner</span>
        </button>
      </div>
    </Container>
  );
}
