import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Card from './Card.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';
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
      }
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
        console.log(results.data[0]);
      });
  }

  nextProperty(e) {
    const newIndex = this.state.property.imageIndex + 1;
    this.setState({
      property: properties[newIndex]
    });
    console.log(properties[newIndex]);
  }

  prevProperty(e) {
    const newIndex = this.state.property.imageIndex - 1;
    this.setState({
      property: properties[newIndex]
    });
  }

  render () {
    const {properties, property} = this.state;
    return (
      // <Router>
      //   <Route path='/image/:id'>
      <div className="App">
        <div className="photo-gallery">
          <div className = "page">
            <div className="col">
              <div className={`cards-slider active-slide-${property.imageIndex}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.imageIndex * (100 / properties.length)}%)`
                }}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => this.prevProperty()}
            disabled={property.imageIndex === 1}
          >Prev</button>
          <button
            onClick={() => this.nextProperty()}
            disabled={property.imageIndex === properties.length}
          >Next</button>
        </div>
      </div>
      //   </Route>
      // </Router>
    );
  }
}

export default App;