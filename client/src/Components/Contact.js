
import React, {useState} from "react";
import { axiosInstance } from "../config";
import { useTranslation } from "react-i18next";


const Contact = (props) => {
  const [sent, setSent] = useState(false);
  const { t } = useTranslation()
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");



  const handleSent = () => {
    setSent(true);
    
    // let data = {
    //   "fname": this.name,
    //   "sname": this.surname,
    //   "mail": this.email,
    //   "message": this.msg
    // }
    try{
       axiosInstance.post("/send_mail", {name, surname, email, msg})
    }catch(error){
      console.log(error)
    }
  }

  const clearAll = () => {
    setName("");
    setSurname("");
    setEmail("");
    setMsg("");
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    clearAll();
    popUpWindow()
    handleSent();
  };

  const popUpWindow = () => {

    var popUpContainer = document.querySelector('#popUp')
    var data = {message: t('contact.pop-up_mess')}
    if(popUpContainer !== null){
      popUpContainer.style.height = "55px"
      popUpContainer.innerHTML = data.message
    }else{
      console.log("Can't find popUp id")
    }
    setTimeout(
     function () {
       popUpContainer.style.height = "0px"
       popUpContainer.innerHTML = ""
     }, 5000
   );
 }

 const githubImg = require('../img/github.png');
 const linkedinImg = require('../img/linkedin.png');
 const emailImg = require('../img/email.png');
 const phoneImg = require('../img/phone.png');
    return(
        <section className="contact mb-5 mt-5" id="contact">
            <div className="container text-center">
              <div className="row">
                <h1>{t('contact.head')}</h1>
                <div className="col-lg-6 pt-5">
                  <div className="row my-2">
                    <div className="col-4"><img src={emailImg} alt="email icon" width={60} height={60}></img></div>
                    <div className="col-8 m-auto">{t('contact.email')}</div>
                  </div>
                  <div className="row">
                    <div className="col-4"><img src={phoneImg} alt="phone icon" width={60} height={60}></img></div>
                    <div className="col-8 m-auto">{t('contact.tel')}</div>
                  </div>
                  <div className="row">
                    <div className="col-4"><img src={linkedinImg} alt="linkedin icon" width={80} height={80}></img></div>
                    <div className="col-8 m-auto">xxxxxxxxxxx</div>
                  </div>
                  <div className="row">
                    <div className="col-4"><img src={githubImg} alt="github icon" width={60} height={60}></img></div>
                    <div className="col-8 m-auto"><a href="https://github.com/Vixena23">GitHub</a></div>
                  </div>
                </div>
                  <div className="col-lg-6 mx-auto pt-5">
                  <form onSubmit={handleSubmit} name="editContact">
                    <div className="row">
                      <div className="mb-3 ">
                        <label htmlFor="fname" className="form-label">{t('contact.inputs.first_name')}</label>
                        <input 
                          value={name}
                          type="text" 
                          className="form-control" 
                          id="fname"
                          name = "fname" 
                          aria-describedby="fnameHelp"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                        />
                        <div id="fnameHelp" className="form-text"></div>
                      </div>
                      <div className="mb-3 ">
                        <label htmlFor="sname" className="form-label">{t('contact.inputs.second_sname')}</label>
                        <input 
                          value = {surname}
                          type="text" 
                          className="form-control" 
                          id="sname"
                          name = "srname" 
                          onChange={(event) =>{
                            setSurname(event.target.value);
                          }}
                          aria-describedby="surnameHelp" 
                          
                        />
                        <div id="snameHelp" className="form-text"></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">{t('contact.inputs.third_email')}</label>
                      <input 
                        value = {email}
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        aria-describedby="emailHelp" 
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        
                      />
                      
                    </div>
                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">{t('contact.inputs.fourth_mess')}</label>
                        <textarea 
                          value = {msg}
                          className="form-control" 
                          id="exampleFormControlTextarea1" 
                          rows="3"
                          onChange={(event) => {
                            setMsg(event.target.value);
                          }}
                        ></textarea>
                      </div>
                    <button type="submit" className="btn btn-secondary">{t('contact.button')}</button>
                  </form>
                  </div>
              </div>
          </div>
        </section>

    );
}

export default Contact;