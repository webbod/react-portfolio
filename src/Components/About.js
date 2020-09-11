import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var formattedPhone = this.props.data.phone;
      var phone = formattedPhone.replace(/ /g, "");
      var email = this.props.data.email;
      var CVDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns profile-pic-block">
            <img className="profile-pic"  src={profilepic} alt={`{name} profile pic`} />
            <div class="sticker">
               I <span role='img' aria-label='love' class='heart'>♥️</span> <abbr title="Internationalisation">I18N</abbr>
            </div>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contacts</h2>
                  <p className="address">
						   <span><a href={`tel:${phone}`} itemprop="telephone">{formattedPhone}</a></span><br />
                     <span><a href={`mailto:${email}`} itemprop="email">{email}</a></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={CVDownload} className="button"><i className="fa fa-download"></i>Download CV</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
