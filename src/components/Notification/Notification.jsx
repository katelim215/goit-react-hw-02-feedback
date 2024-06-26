import React from "react";
import PropTypes from 'prop-types';
import styles from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={styles.divNotification}>
      {message}</div>
  );
};  

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;