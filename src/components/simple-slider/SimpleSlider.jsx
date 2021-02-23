import Slider from 'react-slick';

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slides'
};

export default function SimpleSlider(data) {
  return (
    <Slider {...settings}>
      {data &&
        data?.data?.map(({ image, title, subtitle }, index) => {
          return (
            <div key={index} className="slider-cont">
              <img src={image} alt={`alt-${index}`} height="400" width="70%" className="m-auto" />
              <div className="slide-caption">
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
            </div>
          );
        })}
    </Slider>
  );
}
