import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.css';
import Card from './Card';

export default class Table extends Component {
  static propTypes = {
    randomizedImagesOne: PropTypes.array,
    randomizedImagesTwo: PropTypes.array,
    randomizedImagesThree: PropTypes.array
  };

  render() {
    const { randomizedImagesOne, randomizedImagesTwo, randomizedImagesThree } = this.props;

    return (
      <table className={styles['game-table']}>
        <tbody>
          <tr>
            {randomizedImagesOne.map((image, i) => (
              <Card key={i} image={image}/>
            ))}
          </tr>
          <tr>
            {randomizedImagesTwo.map((image, i) => (
              <Card key={i} image={image}/>
            ))}
          </tr>
          <tr>
            {randomizedImagesThree.map((image, i) => (
              <Card key={i} image={image}/>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}