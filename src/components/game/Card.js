import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Card.css';
import CardFlippable from 'react-card-flippable';
import { selectCard } from './actions';
import logo from '../img/alchemy.png';


class Card extends Component {
  static propTypes = {
    image: PropTypes.any,
    selectCard: PropTypes.func,
  };

  
  render() {
    const frontContent = <img src={logo}/>;
    const backContent = <img src={this.props.image}/>;
    const { selectCard } = this.props;
    return (
      <td className={styles.card} onClick={(card) => selectCard(card)}>
        <CardFlippable frontContent={frontContent} backContent={backContent}/>
      </td>
    );
  }
}

export default connect(
  null,
  { selectCard }
)(Card);