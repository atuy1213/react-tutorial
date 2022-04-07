import React from 'react';

type Props = {
    value: string;
    onClick: () => void;
}

const Square: React.VFC<Props> = (props) =>  {
  
    return (
        <button
            className="square"
            onClick={props.onClick}    
        >
            {props.value}
        </button>
    );
};

export default Square;