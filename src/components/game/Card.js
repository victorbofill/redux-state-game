import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Card.css';
import { selectCard } from './actions';

class Card extends Component {
  static propTypes = {
    image: PropTypes.any,
    selectCard: PropTypes.func
  };

  render() {
    const { image, selectCard } = this.props;

    return (
      <td className={styles.card} onClick={(image) => selectCard(image)}>
        <img src={image} />
      </td>
    );
  }
}

export default connect(
  null,
  { selectCard }
)(Card);