import { useTranslation } from "react-i18next";


const Footer = () =>{
    const { t } = useTranslation()

    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{t('footer.contact_info.header')}</h4>
                        <ul className="list-unstyled">
                            <li>{t('footer.contact_info.phone_number')}</li>
                            <li>{t('footer.contact_info.city')}, {t('footer.contact_info.country')}</li>
                            <li>{t('footer.contact_info.zip')}, {t('footer.contact_info.street')} {t('footer.contact_info.house_number')}, {t('footer.contact_info.apartment_number')}</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>{t('footer.details')}</h4>
                        <ul className="list-unstyled">
                            <li className="nav-item">
                                <a className="nav-link p-0" aria-current="#about" href="#about">{t('sec1_navbar')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0" href="#projects">{t('sec4_navbar')}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link p-0" href="#technology">{t('sec3_navbar')}</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link p-0" href="#contact">{t('sec5_navbar')}</a>
                            </li>    
                        </ul>
                    </div>
                    <div className="col">
                        <h4>{t('footer.projects')}</h4>
                        <ul className="list-unstyled">
                            <li>Project 1</li>
                            <li>Project 2</li>
                            <li>Project 3</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
}


export default Footer;