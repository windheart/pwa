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
            <div style={{ fontSize: 24, fontWeight: 'bold' }}>{device}</div>
        </>
    )
}

export default App
