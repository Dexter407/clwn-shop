import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, signInGoogle, ...otherProps}) => (
  <button className={`${signInGoogle ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton;