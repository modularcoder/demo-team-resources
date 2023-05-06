import React from 'react'

type Props = {
    children?: React.ReactNode;
};

const BaseButton: React.FC<Props> = ({ children }) => {

    return (
        <button>
            {children}
        </button>
    )
}


export default BaseButton;
