import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import {ImageData} from '../../data/ImageData';
import 'react-awesome-slider/dist/styles.css';

const AutoPlaySlider = withAutoPlay(AwesomeSlider);

const SwiperSlider = () =>{
  return <AutoPlaySlider  play={true} cancelOnInteraction={false} interval={5000} >
  { ImageData.map(i => (
    <div title="Karbel Çelik Galerisi" id="karbel_çelik_galerisi_mobil" key={i} > <img key={i} src={"/assets/" + i} alt=""/> </div>
  )) }
  </AutoPlaySlider>
}

export default SwiperSlider;