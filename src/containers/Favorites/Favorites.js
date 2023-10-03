import './Favorites.scss';
import Wrapper from '../../hoc/Wrapper';
import FavoritesLayer from '../../components/layers/FavoriteLayer';

function Favorites() {
  return (
    <Wrapper class='favorites'>
      <FavoritesLayer />
    </Wrapper>
  )
}

export default Favorites;