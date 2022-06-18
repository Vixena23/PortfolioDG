import axios from "axios";
import { useTranslation } from "react-i18next";

const About = (props) => {
    const { t } = useTranslation()


    const newWindow = () => {

         ;
    }

    const pictureImg = require('../img/picture.jpg');
    return(
        <section className="about py-2" id="about">
            <div className="container mt-2 text-center ">
                <div className="row py-2 mx-auto ">
                    <div className="col-lg-4 m-auto">
                            <div className="row fs-3 ">
                                <p className="col mb-0">{t('about.start_desc.first')}</p>
                                <p>              
                                    {t('about.start_desc.second')}
                                </p>
                            </div>
                    </div>
                    <div className="col-lg-4 m-lg-auto mb-3">
                        <div className='circle'>
                            <img src={pictureImg} alt="picture" width={210} height={262}/>
                        </div>
                    </div>
                    <div className="col-lg-4 m-auto">
                            <div className="row">
                                <p className='mt-0'>
                                    {t('about.end_desc.first')}
                                </p>
                                <p className='mb-0'>
                                    {t('about.end_desc.second')}
                                </p>
                            </div>
                    </div>
                </div>
                <div className='col mx-auto mt-4'>
                    
                    <a className="btn1 " type="button" href = {pictureImg} download>{t('about.button.CV')}</a>
                    <a className="btn2 " type="button" href = "https://github.com/Vixena23">{t('about.button.GitHub')} </a>

                </div>
            </div>
        </section>

    );
}

export default About;