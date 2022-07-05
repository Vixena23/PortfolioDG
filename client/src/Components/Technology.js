import { useTranslation } from "react-i18next";


const Technology = (props) => {
    const { t } = useTranslation()

    const BulbIcon = ({width = 24, height = 24}) => (
      <svg
        width={width} 
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M4 9C4 11.9611 5.60879 14.5465 8 15.9297V15.9999C8 18.2091 9.79086 19.9999 12 19.9999C14.2091 19.9999 16 18.2091 16 15.9999V15.9297C18.3912 14.5465 20 11.9611 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9ZM16 13.4722C17.2275 12.3736 18 10.777 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 10.777 6.7725 12.3736 8 13.4722L10 13.4713V16C10 17.1045 10.8954 17.9999 12 17.9999C13.1045 17.9999 14 17.1045 14 15.9999V13.4713L16 13.4722Z"
    fill="currentColor"
  />
  <path
    d="M10 21.0064V21C10.5883 21.3403 11.2714 21.5351 12 21.5351C12.7286 21.5351 13.4117 21.3403 14 21V21.0064C14 22.111 13.1046 23.0064 12 23.0064C10.8954 23.0064 10 22.111 10 21.0064Z"
    fill="currentColor"
  />
</svg>
    )


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
            <div className="container  ">
              <p className="fw-bold">{t('tech.small_header')}</p>
              <h1>{t('tech.header')}</h1>


              <div className="row pt-5 box text-center ">
                  <div className="col-xl-3 d-flex flex-column-reverse ">
                    <div className="justify-content-center d-none d-xl-block">
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
                  <div className="col-xl-3 d-flex flex-column-reverse ">
                    <div className="justify-content-center d-none d-xl-block">
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
                  <div className="col-xl-3 d-flex flex-column-reverse">
                    <div className="justify-content-center d-none d-xl-block">
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
                  <div className="col-xl-3 d-flex flex-column-reverse">
                    <div className="justify-content-center d-none d-xl-block">
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
            
            
              <div className="col mt-5"><BulbIcon />
              {t('tech.learning.title')}
                <div className="row">
                  <div className="col-6">
                    <p className="px-5 my-0">{t('tech.learning.1')}</p>
                  </div>
                  <div className="col-6">
                    <p className="px-5 my-0">{t('tech.learning.2')}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="px-5 my-0">{t('tech.learning.3')}</p>
                  </div>
                  <div className="col-6">
                    <p className="px-5 my-0">{t('tech.learning.4')}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="px-5 my-0">{t('tech.learning.5')}</p>
                  </div>
                  <div className="col-6">
                    
                  </div>
                </div>

              </div>
              <div className="col m-3 mb-0">
                <div className="row"> {t('tech.desc')}</div>
                <div className="row">{t('tech.known')}</div>
              </div>
        
             
            
            </div>
          </section>

    );
}

export default Technology;