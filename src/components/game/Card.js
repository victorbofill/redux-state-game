import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';
import CardFlippable from 'react-card-flippable';
//import logo from './img/alchemy.png';

export default class Card extends Component {
  static propTypes = {
    image: PropTypes.any
  };

  
  render() {
    //const frontContent = { image };
    //const backContent = { image };
    const { image } = this.props;
    return (
      <div>
        <td className={styles.card}>
          <img src={image}onClick={this.handleClick}> 
            {/* <CardFlippable frontContent={frontContent} backContent={backContent}/> */}
          </img>
        </td>
      </div>
    );
  }
}