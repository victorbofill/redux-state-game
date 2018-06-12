import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.css';

export default class Card extends Component {
  static propTypes = {
    image: PropTypes.any
  };

  render() {
    const { image } = this.props;

    return (
      <td className={styles.card}>
        <img src={image} />
      </td>
    );
  }
}