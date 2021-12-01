import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from "../HOC-components/hoc.component";


const MenuItem = ({title, imageUrl, size,linkUrl, navigate}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => navigate(`${linkUrl}`)}
  >
    <div className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOW NOW</span>
    </div>
  </div>
)

export default withRouter(MenuItem);
