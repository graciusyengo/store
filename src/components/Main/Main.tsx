
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Main.css';

// import required modules
import { Navigation } from 'swiper/modules';
import './Main.css'

function Main() {
    return (

        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <SwiperSlide className="background-slide"
                    style={{ backgroundImage: `url("../img/Summer.jpeg")` }}
                >
                    <div className='text'>
                        <h1 className='title'>Bienvenu Chez nous </h1>
                        <p className='description'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, soluta dolor sint fuga doloribus molestias impedit praesentium at, illum quidem illo. Ullam magni eos assumenda dolorem quisquam eum possimus dicta?</p>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>

            </Swiper>
        </>



    )
}

export default Main