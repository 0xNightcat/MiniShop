import './Loading.scss';
import { useSelector } from 'react-redux';

function Loading() {
   const publicReducer = useSelector((state) => state.public);
   const { loader } = publicReducer;

  return (
    <div className='loading' style={
      loader ? {'display':'block'} : {'display':'none'}
    }>
      <span className='loader'></span>
    </div>
  )
}

export default Loading;