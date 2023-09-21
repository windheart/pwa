import { useLayoutEffect, useState } from 'react'
import './App.css'

function App() {
    const [device, setDevice] = useState('Desktop')

    useLayoutEffect(() => {
        if (/Android/i.test(navigator.userAgent)) {
            setDevice('Android')
            return
        }

        if (/iPhone/i.test(navigator.userAgent)) {
            setDevice('iOS')
            return
        }

        setDevice('Desktop')
    }, []);

    return (
        <>
            <div>{device}</div>
        </>
    )
}

export default App
