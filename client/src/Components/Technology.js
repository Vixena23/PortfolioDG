import { useTranslation } from "react-i18next";


const Technology = (props) => {
    const { t } = useTranslation()

  function updateProgressBar(progressBar, value) {
    
    var p = progressBar.querySelector(".platform-1");
    var val = 200;


    if(p === null){
      val = 100;
      p = progressBar.querySelector(".platform-2");
    }

    if(p === null){
      val = 150;
      p = progressBar.querySelector(".platform-3");
    }

    p.style.height=`${value}%`;
    if(value === 0){
      p.querySelector(".progress__fill").style.height = `${val}px`;
    }
    else{
      p.querySelector(".progress__fill").style.height = `${0}px`;
    }
    
    
  }

  function reveal() {
    var reveals = document.querySelectorAll(".platform");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
      if (elementTop < windowHeight - elementVisible) {
        updateProgressBar(reveals[i], 0);
      } else {
        updateProgressBar(reveals[i], 100);
      }
    }
  }
  window.addEventListener("scroll", reveal);




    return(
        <section className="technology pt-5" id="technology">
            <div className="container text-center py-5">
              <p className="fw-bold">{t('tech.small_header')}</p>
              <h1>{t('tech.header')}</h1>
              <div className="row pt-5 box ">
                  <div className="col-lg-3 d-flex flex-column-reverse ">
                    <div className="justify-content-center d-none d-lg-block">
                      <div className="platform">
                        <div className=" platform-1">
                          <div className="progress__fill"></div>
                        </div>
                      </div>
                    </div>
                    
                    <p>{t('tech.platform_1.details')}</p>
                    <h5>{t('tech.platform_1.header')}</h5>
                    
                    <div className="justify-content-center">
                      <div id="icon"><span>C#</span></div>
                    </div>    
                  </div>
                  <div className="col-lg-3 d-flex flex-column-reverse ">
                    <div className="justify-content-center d-none d-lg-block">
                      <div className="platform">
                        <div className=" platform-3">
                          <div className="progress__fill"></div>
                        </div>
                      </div>
                    </div>
                    
                    <p>{t('tech.platform_2.detalis2')}</p>
                    <p className="mb-0 pb-0">{t('tech.platform_2.details1')}</p>
                    <h5>{t('tech.platform_2.header')}</h5>
                    
                    <div className="justify-content-center">
                      <div id="icon"><span>JS</span></div>
                    </div>    
                  </div>
                  <div className="col-lg-3 d-flex flex-column-reverse">
                    <div className="justify-content-center d-none d-lg-block">
                      <div className="platform">
                        <div className=" platform-2">
                          <div className="progress__fill"></div>
                        </div>
                      </div>
                    </div>
                    
                    <p>{t('tech.platform_3.details')}</p>
                    <h5>{t('tech.platform_3.header')}</h5>
                    
                    <div className="justify-content-center">
                      <div id="icon"><span>Py</span></div>
                    </div>    
                  </div>
                  <div className="col-lg-3 d-flex flex-column-reverse">
                    <div className="justify-content-center d-none d-lg-block">
                      <div className="platform">
                        <div className=" platform-2">
                          <div className="progress__fill"></div>
                        </div>
                      </div>
                    </div>
                    
                    <p>{t('tech.platform_4.details')}</p>
                    <h5>{t('tech.platform_4.header')}</h5>
                    
                    <div className="justify-content-center">
                      <div id="icon"><span>DB</span></div>
                    </div>    
                  </div>
              </div>
            </div>
          </section>

    );
}

export default Technology;