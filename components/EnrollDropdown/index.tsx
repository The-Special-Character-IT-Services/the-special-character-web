import React from 'react';
import styles from './enrollDropdown.module.scss';
import Typography from '../Typography';

const EnrollDropdown = props => {
  const { divClassName, name, label, ...rest } = props;
  return (
    <div className={`${styles.dropdownDiv} ${divClassName}`}>
      <Typography variant="label">{label}</Typography>
      <select name={name} className={styles.dropdownSelect}>
        <option>Advanced Javascript</option>
        <option>React.JS / Angular.JS / Vue.JS / Next.JS</option>
        <option>Node.JS / Express</option>
        <option>GoLang</option>
        <option>Java</option>
        <option>Python</option>
        <option>React Native</option>
        <option>Flutter</option>
        <option>Strapi</option>
        <option>Wordpress</option>
        <option>MySQL / PostgreSQL / MongoDB / Redis</option>
        <option>AWS</option>
      </select>
    </div>
  );
};

export default EnrollDropdown;
