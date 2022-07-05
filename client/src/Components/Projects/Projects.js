import Slider from "react-slick";
import ProjectComponent from "./Slicker_Sections/ProjectComponent";

import { useTranslation } from "react-i18next";



const Projects = (props) => {
  const { t } = useTranslation()



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
                  <div className="mx-auto pt-5">
                    
                    <div className="text-start slicker ">
                      <h1 >Projekty</h1>
                      <Slider {...settings}>
                        <div>
                          
                          <ProjectComponent 
                            header={t('project2.header')}
                            desc={t('project2.desc')}
                            in_progress = {t('project2.in_progress')}
                            learn_more = {t('learn_more')}
                            link = {t('project2.link')}/>

                        </div>
                        <div>
                          
                          <ProjectComponent 
                            header={t('project1.header')}
                            desc={t('project1.desc')}
                            in_progress = {t('project1.in_progress')}
                            learn_more = {t('learn_more')}
                            link = {t('project1.link')}/>

                        </div>
                        <div>
                          
                        <ProjectComponent 
                            header={t('project3.header')}
                            desc={t('project3.desc')}
                            in_progress = {t('project3.in_progress')}
                            learn_more = {t('learn_more')}
                            link = {t('project3.link')}/>
                        </div>

                        <div>
                          
                        <ProjectComponent 
                            header={t('project4.header')}
                            desc={t('project4.desc')}
                            in_progress = {t('project4.in_progress')}
                            learn_more = {t('learn_more')}
                            link = {t('project4.link')}/>
                        </div>

                      </Slider>
                    </div>
                  
                  </div>
                </div>
                <div className="col mt-5 text-start">
                  {t('small_projects.desc')}
                    <div className="row ms-3 ">
                      <ul>
                        <li>{t('small_projects.1')}</li>
                        <li>{t('small_projects.2')}</li>
                      </ul>
                    </div>
                </div>
              </div>
        </section>

    );
}

export default Projects;