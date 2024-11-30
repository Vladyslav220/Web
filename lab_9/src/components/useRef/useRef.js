import React, { useRef } from 'react';

const TestComponent = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        alert(inputRef.current.value);
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Введіть текст" />
            <button onClick={handleClick}>Alert Input</button>
        </div>
    );
};

export default TestComponent;
