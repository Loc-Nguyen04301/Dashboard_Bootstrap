import React from 'react';

const DowntrendIcon = ({ classes, width = '18',  color="#C3CAD9" }) => (
    <svg className={classes} width={width} viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.693 2.09438L7.03943 5.74791L1.29152 0L0 1.29152L7.03943 8.33095L10.693 4.67742L14.6141 8.59857L12.5197 10.693H18V5.21267L15.9056 7.30705L10.693 2.09438Z"
            fill={color}
        />
    </svg>
);

export default DowntrendIcon;
