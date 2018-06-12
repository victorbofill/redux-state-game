import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.css';
import Card from './Card';

export default class Table extends Component {
  static propTypes = {
    images: PropTypes.array
  };

  render() {
    const { images } = this.props;

    return (
      <table className={styles['game-table']}>
        <tbody>
          <tr>
            {images[0].map((image, i) => (
              <Card key={i} image={image}/>
            ))}
          </tr>
          <tr>
            {images[1].map((image, i) => (
              <Card key={i} image={image}/>
            ))}
          </tr>
          <tr>
            {images[2].map((image, i) => (
              <Card key={i} image={image}/>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}