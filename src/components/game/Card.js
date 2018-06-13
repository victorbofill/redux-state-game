import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Card.css';
import CardFlippable from 'react-card-flippable';
//import logo from './img/alchemy.png';
import { selectCard } from './actions';

class Card extends Component {
  static propTypes = {
    image: PropTypes.any,
    selectCard: PropTypes.func
  };

  
  render() {
    //const frontContent = { image };
    //const backContent = { image };
    const { image, selectCard } = this.props;
    return (
      <div>
        <td className={styles.card} onClick={(card) => selectCard(card)}>
          <img src={image}/> 
          {/* <CardFlippable frontContent={frontContent} backContent={backContent}/> */}
        </td>
      </div>
    );
  }
}

export default connect(
  null,
  { selectCard }
)(Card);