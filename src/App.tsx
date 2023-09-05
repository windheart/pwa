import { useEffect, useRef } from 'react'
import './App.css'
import { Html5QrcodeResult, Html5QrcodeScanner } from 'html5-qrcode'

function App() {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    const onScanSuccess = (decodedText: string, decodedResult: Html5QrcodeResult) => {
        alert(decodedText)
        // Handle on success condition with the decoded text or result.
        console.log(`Scan result: ${decodedText}`, decodedResult);
    }

    const onScanFailure = () => {
        // alert("Failed to scan the QR code.")
        // Handle on success condition with the decoded text or result.
        // console.log(`Scan result: ${decodedText}`, decodedResult);
    }

    useEffect(() => {
        scannerRef.current = new Html5QrcodeScanner(
            "reader", { fps: 10, qrbox: 250 }, false)

        scannerRef.current.render(onScanSuccess, onScanFailure);
    }, []);

    return (
        <>
            <div style={{ width: 500 }} id="reader"/>
        </>
    )
}

export default App
