import React, { Component } from 'react';
import styles from './Table.css';
import logo from '../img/alchemy.png';

export default class Table extends Component {
  render() {
    return (
      <table className={styles['game-table']}>
        <tbody>
          <tr>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
          </tr>
          <tr>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
          </tr>
          <tr>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
            <td className={styles.slot}>
              <img src={logo} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}