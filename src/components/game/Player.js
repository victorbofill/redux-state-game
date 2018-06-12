import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Player.css';

class Player extends PureComponent {

  static propTypes = {
    index: PropTypes.number.isRequired,
    selection: PropTypes.image,
    makeSelection: PropTypes.func.isRequired
  };

  render() {
    const { index, selection, makeSelection } = this.props;

    return (
      <div className={styles.player}>
        <h3>Player</h3>
        { selection 
          ? <p>{selection}</p>
          : index === 0 && [images].map(choice => { 
            return (
              <button
                key={choice}
                onClick={() => makeSelection(choice)}
              >
                {choice}
              </button>
            );
          })
        }
      </div>
    );
  }
}

export default connect(
  (state, { index }) => ({
    selection: getPlayerSelection(index, state)
  }),
  { makeSelection }
)(Player);