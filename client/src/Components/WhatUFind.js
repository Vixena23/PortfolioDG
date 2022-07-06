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
                    <p className="mb-3">
                        {t('whatufind.paragraf.first.1')}
                        <b>{t('whatufind.paragraf.first.2')}</b>
                        {t('whatufind.paragraf.first.3')}
                        <b>{t('whatufind.paragraf.first.4')}</b>
                        {t('whatufind.paragraf.first.5')}
                        <b>{t('whatufind.paragraf.first.6')}</b>
                        {t('whatufind.paragraf.first.7')}
                        <b>{t('whatufind.paragraf.first.8')}</b>
                        {t('whatufind.paragraf.first.9')}
                        <b>{t('whatufind.paragraf.first.10')}</b>
                        {t('whatufind.paragraf.first.11')}
                    </p>
                    <p className="my-0">{t('whatufind.paragraf.second')}</p>
                    <p>{t('whatufind.paragraf.third')}</p>   
                </div>
            </div>
        </section>

    );
}

export default WhatUFind;