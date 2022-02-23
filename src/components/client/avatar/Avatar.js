import React from 'react';
import './avatar-style.scss';
import { invertHex } from '../../../utils/colorutils';

const Avatar = (props) => {
    return (
        <>
            {props.show &&
                <div
                    className={'ce-avatar circle ' + (props.clsName ? props.clsName : '')}
                    style={{
                        '--slide-content': props.size ? props.size : '0px',
                        backgroundColor: props.color ? props.color : '#000000',
                        '--avatar-size': props.size ? props.size : '40px'
                    }}
                >
                    <div style={{ fontSize: props.size ? `${props.size / 2}px` : '20pt', color: '#' + invertHex(props.color) }}>
                        {props.avatar}
                        
                    </div>
                </div>
            }
        </>
    );
};

Avatar.defaultProps = {
    show: false,
    color: 'rgba(0,0,0,0)'
};

export default Avatar;