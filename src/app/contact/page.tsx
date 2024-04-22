import React, { useState } from 'react';

export default function Contact() {
    const [userData,setUserData] = useState(
        {
          Name: '', email: '', message: ''
        }
      )
      let name;
      let value;
      console.log(userData)
      const data = (e:any) => 
      {
        name = e.target.name
        value = e.target.value
        setUserData({...userData, [name]:value})
      }
      const sendData = async(e:any) =>
      {
        const {Name, email, message} = userData
        e.preventDefault();
        const option = {
          method: 'POST',
          headers: {
            'Content-type': 'application.json'
          },
          body : JSON.stringify({
            Name, email, message
          })
        }
        const res = fetch('https://mypersonalportafolio1-default-rtdb.firebaseio.com/messages.json', option)
        console.log(res)
      }
      
const contactConfig = {
  YOUR_EMAIL: 'nisalwijethunge@gmail.com',
  YOUR_FONE: '0776404505',
  description:
    '"Driven by a passion for innovation and a commitment to excellence, I thrive in dynamic environments where I can apply my problem-solving skills and technical expertise to overcome challenges." ',
  YOUR_SERVICE_ID: 'service_id',
  YOUR_TEMPLATE_ID: 'template_id',
  YOUR_USER_ID: 'user_id',
};
    
    return(
        <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2> 
       
        <div className="Row">
          <div  className="mb-5 col">
            <h3 className="divor_sec py-4">Get In Touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {/* {Object.prototype.hasOwnProperty.call("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )} */}
            </address>
            <p>{contactConfig.description}</p>
          </div>
          <div  className="d-flex align-items-center col">
            <form method ="post" className="contact__form w-100">
              <div>
                <div  className="form-group">
                  <input
                    className="form-control"
                    name="Name"
                    placeholder="Name" 
                    type="text"
                    value={userData.Name}
                    autoComplete='off'
                    onChange={data}
                    required 
                  />
                </div>
                <div  className="form-group col">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    value={userData.email}
                    autoComplete='off'
                    onChange={data}
                    required 
                  />
                </div>
              </div>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                value={userData.message}
                autoComplete='off'
                onChange={data}
                required
              />
              <br />
              <div className='Row'>
                <div className="form-group col">
                  <button className="btn ac_btn" type="submit" onClick={sendData}> 
                  Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      
      {/* <a href={`mailto:${contact.email}`}> */}
        {/* <span className='btn btn--outline' role='button'> */}
          {/* Email me */}
        {/* </span> */}
      {/* </a> */}
      
    </section>
    )
}