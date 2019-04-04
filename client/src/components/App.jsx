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
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
  }

  componentDidMount () {
    axios.get('/images/23958457')
      .then((results) => {
        this.setState({
          properties: results.data,
          property: results.data[0]
        });
        console.log(results.data);
      });
    // nextProperty();
    // prevProperty();
  }

  nextProperty(){
    this.setState((state) => ({
      currentIndex: this.state.currentIndex + 1,
      property: this.state.properties[this.state.currentIndex]
    }));
    console.log(this.state.currentIndex);
  }

  prevProperty(){
    this.setState((state) => ({
      currentIndex: this.state.currentIndex - 1,
      property: this.state.properties[this.state.currentIndex]
    }));
    console.log(this.state.currentIndex);
  }

  render () {
    const {properties, property, currentIndex} = this.state;
    return (
      <div className="App">
        <button className="btn btn-icon ButtonIcon btn-overlay carousel-desktop__nav- carousel-desktop__nav--prev btn-icon-circle" aria-label="Previous" label type="button"
          onClick={() => this.prevProperty()}
          disabled={currentIndex === 0}
        > prev </button>
        <button className="btn btn-icon ButtonIcon btn-overlay carousel-desktop__nav- carousel-desktop__nav--next btn-icon-circle" label="Next" label type="button"
          onClick={() => this.nextProperty()}
          disabled={currentIndex === properties.length-1}
        > next </button>
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