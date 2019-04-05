import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Card from './Card.jsx';
// import Button from './Button.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import '../../../public/styles.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [{
        _id: '123333',
        imagePath: 'http://lorempixel.com/640/480/animals',
        imageId: 12345,
        imageIndex: 1
      }],
      property: {
        _id: '123333',
        imagePath: 'http://lorempixel.com/640/480/sports',
        imageId: 678910,
        imageIndex: 1
      },
      currentIndex: 0
    };
    // this.getAssocPics = this.getAssocPics.bind(this);
  }



  // getAssocPics(id){
  //    return axios.get(`/images/${id}`)
  //       .then((results) => {
  //         this.setState({
  //           properties: results.data,
  //           property: results.data[0]
  //         });
  //         console.log(results.data);
  //       });
  // }
  // componentDidMount () {
  //   this.getAssocPics({props.id});
  // }
  componentDidMount () {
    const id = '23958457';
    axios.get(`/images/${id}`)
      .then((results) => {
        this.setState({
          properties: results.data,
          property: results.data[0]
        });
        console.log(results.data);
      });
  }

  render () {
    const {properties, property, currentIndex} = this.state;
    return (
      <div className="App">


        <div className="photo-gallery">
          <div className = "page">
            <div className="col">
              <div className={`cards-slider active-slide-${currentIndex}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${currentIndex * (100 / properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
              <div className="carousel-desktop__nav-wrapper carousel-desktop__nav-wrapper--prev">
                <button className="btn btn-icon ButtonIcon btn-overlay carousel-desktop__nav- carousel-desktop__nav--prev btn-icon-circle" label="Previous" label type="button"
                  property={this.state.property}
                  onClick={() => this.setState((state) => ({
                    currentIndex: this.state.currentIndex - 1,
                    property: this.state.properties[this.state.currentIndex]
                  }))}
                  disabled={currentIndex === 0}
                >
                  <span className="btn__label sr-only"></span>
                  <span className="SVGIcon     SVGIcon--16px flex-center">
                    <svg width="16px" height="16" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"> ==$0
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M10 13L5.4 8 10 3"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="carousel-desktop__nav-wrapper carousel-desktop__nav-wrapper--next">
                <button className="btn btn-icon ButtonIcon btn-overlay carousel-desktop__nav- carousel-desktop__nav--next btn-icon-circle" label="Next" label type="button"
                  property={this.state.property}
                  onClick={() => this.setState((state) => ({
                    currentIndex: this.state.currentIndex + 1,
                    property: this.state.properties[this.state.currentIndex]
                  }))}
                  disabled={currentIndex === properties.length-1}
                >
                  <span className="btn__label sr-only"></span>
                  <span className="SVGIcon     SVGIcon--16px flex-center">
                    <svg width="16px" height="16" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"> ==$0
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M6 13l4.6-5L6 3"></path>
                    </svg>
                  </span>



                </button>
              </div>
            </div>



          </div>
        </div>

      </div>
    );
  }
}

export default App;


// <div>
// {<Button property={this.state.property} properties={this.state.properties} prevProperty={this.prevProperty} nextProperty={this.nextProperty}/>}
// </div>