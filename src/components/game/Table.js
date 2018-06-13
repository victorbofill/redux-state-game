import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Table.css';
import Card from './Card';
import { loadImages } from './actions';

class Table extends Component {
  static propTypes = {
    images: PropTypes.array,
    loadImages: PropTypes.func,
    card: PropTypes.any
  };

  render() {
    const { images, card, loadImages } = this.props;

    return (
      <div>
        <p>Card: {card}</p>
        <button onClick={() => loadImages()}>New Game</button>
        <table className={styles['game-table']}>
          <tbody>
            <tr>
              {images && images[0].map((image, i) => (
                <Card key={i} image={image} index={i}/>
              ))}
            </tr>
            <tr>
              {images && images[1].map((image, i) => (
                <Card key={i} image={image} index={i}/>
              ))}
            </tr>
            <tr>
              {images && images[2].map((image, i) => (
                <Card key={i} image={image} index={i}/>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  state => (
    { images: state.images, card: state.card }
  ),
  { loadImages }
)(Table);