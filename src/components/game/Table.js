import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Table.css';
import Card from './Card';
import { loadImages } from './actions';

class Table extends Component {
  static propTypes = {
    images: PropTypes.array,
    loadImages: PropTypes.func
  };

  render() {
    const { images, loadImages } = this.props;

    return (
      <div>
        <button onClick={() => loadImages()}>LOAD</button>
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
      </div>
    );
  }
}

export default connect(
  state => (
    { images: state.images }
  ),
  { loadImages }
)(Table);