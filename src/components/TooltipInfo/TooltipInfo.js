import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types'
import './Tooltip.css';

const TolltipInfo = ({ infoList, placement, children }) => {

    let descToolTip = (<Tooltip className="tooltip-info">
        {
            infoList.map((info, index) => (
                <p key={index} >{info}</p>
            ))
        }
    </Tooltip>)


    return (
        <OverlayTrigger placement={placement} overlay={descToolTip}>
            {children}
        </OverlayTrigger>
    )

}

TolltipInfo.propTypes = {

    infoList: PropTypes.array.isRequired,
    placement: PropTypes.string,

}

TolltipInfo.defaultProps = {
    placement: 'top',
}

export default TolltipInfo;