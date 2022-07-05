import { useTranslation } from "react-i18next";

const Home = (props) => {
    const { t } = useTranslation()

    const CV = require('../img/picture.jpg');

    return(
        <section className="home" id="home">
          <div className="">
              <div className="bg-image p-5 shadow-1-strong mb-2 text-white my-auto">
                  <div className="col-xl-6  pt-2">
                    <h2 className="fw-bold mb-4">{t('about.start_desc.first')}</h2>
                    <h4 className="fw-bold">{t('about.start_desc.second')}</h4>
                    <p className='mt-0'>
                            {t('about.end_desc.first')}
                                </p>
                                
                    <div className='col mx-auto  '>
                        <a className="btn2 text-center" type="button" href = {CV} download>{t('about.button.CV')}</a>
                        <p className='mb-0 mt-2'>
                                    {t('about.end_desc.second')}
                                </p>
                        {/* <a className="btn2 text-center" type="button" href = "https://github.com/Vixena23">{t('about.button.GitHub')} </a> */}
                    </div>
                  </div>
              </div>
          </div>
      </section>

    );
}

export default Home;