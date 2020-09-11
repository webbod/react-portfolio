import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
               <filter id="squiggly-0">
                  <feTurbulence baseFrequency="0.01" numOctaves="1" result="noise" seed="0"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
               </filter>
               <filter id="squiggly-1">
                  <feTurbulence baseFrequency="0.01" numOctaves="1" result="noise" seed="1"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
               </filter>
               <filter id="squiggly-2">
                  <feTurbulence baseFrequency="0.01" numOctaves="1" result="noise" seed="2"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
               </filter>
               <filter id="squiggly-3">
                  <feTurbulence baseFrequency="0.01" numOctaves="1" result="noise" seed="3"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
               </filter>
               
               <filter id="squiggly-4">
                  <feTurbulence  baseFrequency="0.01" numOctaves="1" result="noise" seed="4"/>
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
               </filter>
            </defs> 
         </svg>
      </div>
    );
  }
}

export default App;
