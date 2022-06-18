import Slider from "react-slick";
import Portfolio from "./Slicker_Sections/Portfolio";
import FoodProductAggregator from "./Slicker_Sections/FoodProductAggregator"
import TestComponent from "./Slicker_Sections/TestComponent";





const Projects = (props) => {



  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    
    arrows: false
  };
  
    return(
        <section className="projects " id="projects">
            <div className="container text-center">
              <div className="row">
                  <div className="col-lg-8 mx-auto pt-5">
                    
                    <div className="text-start slicker ">
                      <h1 >Projekty</h1>
                      <Slider {...settings}>
                        <div>
                          
                          <Portfolio />

                        </div>
                        <div>
                          
                          <FoodProductAggregator  />

                        </div>
                        <div>
                          
                          <TestComponent />

                        </div>
                        <div>
                          
                          <TestComponent />
                        
                        </div>
                      </Slider>
                    </div>
                  
                  </div>
                </div>
              </div>
        </section>

    );
}

export default Projects;