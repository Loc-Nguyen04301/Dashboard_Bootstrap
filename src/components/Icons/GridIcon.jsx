import React from 'react';

const GridIcon = ({ classes, width = '18',  color="#C3CAD9" }) => (
    <svg className={classes} width={width} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 0H4.5V4.5H0V0ZM6.75 0H11.25V4.5H6.75V0ZM13.5 0H18V4.5H13.5V0ZM0 6.75H4.5V11.25H0V6.75ZM6.75 6.75H11.25V11.25H6.75V6.75ZM13.5 6.75H18V11.25H13.5V6.75ZM0 13.5H4.5V18H0V13.5ZM6.75 13.5H11.25V18H6.75V13.5ZM13.5 13.5H18V18H13.5V13.5Z"
            fill={color}
        />
    </svg>
);

export default GridIcon;
