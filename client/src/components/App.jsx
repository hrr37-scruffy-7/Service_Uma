import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './styles.css';
import Card from './Card.jsx';
import styled, { css } from 'styled-components';

const SliderStyle = styled.div`
  transform: ${props => `translateX(-${props.currentIndex * (100 / props.properties.length)}%)`};
  `;

// const ButtonPrev = styled.button`


//   `;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [{
        _id: '123333',
        imagePath: 'http://lorempixel.com/640/480/sports',
        imageId: 12345,
        imageIndex: 0
      }, {
        _id: '123334',
        imagePath: 'http://lorempixel.com/640/480/animals',
        imageId: 12345,
        imageIndex: 1
      }],
      property: {
        _id: '123333',
        imagePath: 'http://lorempixel.com/640/480/sports',
        imageId: 12345,
        imageIndex: 0
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
    const id = window.location.pathname.slice(1) || 99;

    axios.get(`http://localhost:5002/${id}`)
      .then((results) => {
        console.log(results.data);
      });

    axios.get(`http://localhost:5002/images/${id}`)
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
      <div className={styles.app}>
        <div>
          <img src="https://s3-us-west-1.amazonaws.com/frbo-images/FRBO_1_TopBar.png"></img>
        </div>
        <div>
          <div>
            <div className={styles.col}>
              <div className={`${styles.cardsSlider} ${[styles.activeCard, currentIndex].join('')}`}>
                <SliderStyle
                  className={styles.cardsSliderWrapper}
                  properties={properties}
                  currentIndex={currentIndex}>
                  {
                    properties.map(property => <Card key={property._id} property={property} />)
                  }
                </SliderStyle>
              </div>
              <div className={`${styles.carouselDesktopNavWrapper} ${styles.carouselDesktopNavWrapperPrev}`}>
                <button className={[styles.btn, styles.btnIcon, styles.btnOverlay, styles.buttonInherit, styles.carouselDesktopNav, styles.btnIconCircle].join(' ')}
                  property={this.state.property}
                  onClick={() => this.setState((state) => ({
                    currentIndex: this.state.currentIndex - 1,
                    property: this.state.properties[this.state.currentIndex]
                  }))}
                  disabled={currentIndex === 0}
                >
                  <span className={`${styles.btnLabel} ${styles.srOnly}`}>
                  </span>
                  <span className={`${styles.svgIcon} ${styles.svgIcon16px} ${styles.flexCenter}
                    `}>
                    <svg className={styles.svg} width="16" height="16" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"> ==$0
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M10 13L5.4 8 10 3"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className={`${styles.carouselDesktopNavWrapper} ${styles.carouselDesktopNavWrapperNext}`}>
                <button className={`${styles.btn} ${styles.btnIcon} ${styles.buttonIcon} ${styles.buttonInherit} ${styles.btnOverlay} ${styles.carouselDesktopNav} ${styles.btnIconCircle}`}
                  property={this.state.property}
                  onClick={() => this.setState((state) => ({
                    currentIndex: this.state.currentIndex + 1,
                    property: this.state.properties[this.state.currentIndex]
                  }))}
                  disabled={currentIndex === properties.length - 1}
                >
                  <span className={`${styles.btnLabel} ${styles.srOnly}`}>
                  </span>
                  <span className={`${styles.svgIcon} ${styles.svgIcon16px} ${styles.flexCenter}
                    `}>
                    <svg className={styles.svg}width="16" height="16" viewBox="0 0 16 16" xmlns="https://www.w3.org/2000/svg"> ==$0
                      <path fill="none" strokeLinecap="round" strokeLinejoin="round" d="M6 13l4.6-5L6 3"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className={styles.inlineCarouselContainer}>
                <div
                  className={styles.carouselPageNumberDesktopPdp}>
                  <button className={`${styles.btn} ${styles.btnOverlay} ${styles.carouselPageNumberDesktopPdp} ${styles.btnSm}`}
                    type="button"
                    data-selected="true">
                    <span className={`${styles.btnLabel} ${styles.srOnly}`}>`Image ${currentIndex + 1} of ${properties.length}.`</span>
                    <div>
                      {currentIndex + 1} of {properties.length}
                    </div>
                  </button>
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


