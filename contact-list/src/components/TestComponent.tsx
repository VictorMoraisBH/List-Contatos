    import React, { useState } from 'react';

    const TestComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <p>Contador: {count}</p>
        </div>
    );
    };

    export default TestComponent;
