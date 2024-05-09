import React, { useEffect, useState } from 'react';

const ButtonGroup = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    useEffect(() => {
        typeOfColor === 'rgb' ?
            handleRgbColor() : handleHexColor()
    }, [typeOfColor])

    function colorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', "C", 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[colorUtility(hex.length)];
        }
        setColor(hexColor);
    }
    function handleRgbColor() {
        const r = colorUtility(256);
        const g = colorUtility(256);
        const b = colorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    return (
        <div className='btn-grp' style={{
            backgroundColor: color,
            width: "100vw",
            height: "100vh",
            flexDirection: 'column'
        }}>
            <div style={{
                display: 'flex', gap: '20px', justifyContent: 'center'
            }}>
                <button onClick={() => setTypeOfColor('hex')}>Hex Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Rgb Color</button>
                <button onClick={typeOfColor === 'hex' ? handleHexColor : handleRgbColor}>Random Color</button>
            </div>

            <div style={{
                fontSize: '32px'
            }}>
                <h3>{typeOfColor === 'hex' ? 'Hex Color' : 'Rgb Color'}</h3>
                <p>{color}</p>
            </div>
        </div>
    )
}

export default ButtonGroup