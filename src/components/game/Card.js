import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';
import ReactCardFlip from 'react-card-flip';

export default class Card extends Component {
  static propTypes = {
    image: PropTypes.any
  };

  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
   
  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  
  render() {
    const { image } = this.props;
    return (
      <td className={styles.card}>
        <img src={image}onClick={this.handleClick}> 
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            {/* <YOUR_FRONT_COMPONENT key="front">
                This is the front of the card.
              </YOUR_FRONT_COMPONENT>
              <YOUR_BACK_COMPONENT key="back">
                This is the back of the card.
                <onClick={this.handleClick}>
              </YOUR_BACK_COMPONENT> */}
          </ReactCardFlip>
        </img>
      </td>
    );
  }
}