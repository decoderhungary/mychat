import React, { useEffect, useState } from 'react';

const Button = (props) => {
    const [size, setSize] = useState(undefined);

    useEffect(() => {
        if (props.size)
            setSize(props.size);
    }, [props]);

    return (
        <button
            className={'btn ' + (size ? `btn-${size}` : '')}
            onClick={(evt) => {
                if (props.prevent) {
                    evt.preventDefault();
                    evt.stopPropagation();
                }

                if (props.clickCallback)
                    props.clickCallback();
            }}>
        </button>
    );
};

export default Button;