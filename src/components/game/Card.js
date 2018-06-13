import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';
import { selectCard } from './actions';

export default class Card extends Component {
  static propTypes = {
    image: PropTypes.any
  };

  render() {
    const { image, index } = this.props;

    return (
      <td className={styles.card} onClick={(e) => selectCard(e)}>
        <img src={image} />
      </td>
    );
  }
}