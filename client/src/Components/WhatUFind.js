import { useTranslation } from "react-i18next";

const WhatUFind = (props) => {
    const { t } = useTranslation()

    return(
        <section className="whatufind" id="whatufind">
            <div className="container mx-auto">
                <div className="row mt-5 pt-4 mb-3">
                   <h1 className='header fw-bold'>{t('whatufind.head')}</h1>
                </div>
                <div className='row '>
                    <p className="mb-3">{t('whatufind.paragraf.first')}</p>
                    <p className="my-0">{t('whatufind.paragraf.second')}</p>
                    <p>{t('whatufind.paragraf.third')}</p>   
                </div>
            </div>
        </section>

    );
}

export default WhatUFind;