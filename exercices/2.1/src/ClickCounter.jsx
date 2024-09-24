import { useState } from 'react'


function clickCounter({title, message}) {
    const [count, setCount] = useState(0)

    return(
        <>
        <h1>{title}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            {count >= 10 && <p>{message}</p>}
        </button>
        </>
    )
}

export default clickCounter;