import React, { useState } from 'react'

export const FormColor = () => {
    const [form, setForm] = useState({
        hex: '',
        rgb: 'Ожидание Цвета',
        color: ''
    });

    const handleColorChange = ({target}) => {
        console.log(target.value);
        if (target.value.length === 7 && /^#([A-Fa-f0-9]{3}){1,2}$/.test(target.value)) {
            convert(target.value);
        } else {
            setForm(prevForm => ({...prevForm, hex: target.value}))
            setForm(prevForm => ({...prevForm, rgb: 'Ошибка!'}))
            setForm(prevForm => ({...prevForm, color: ''}))
        }
    }

    const convert = (hex) => {
        setForm(prevForm => ({...prevForm, hex: hex}))
        let paramHex = '0x' + hex.replace('#', '');
        let r = paramHex >> 16 & 0xFF;
        let g = paramHex >> 8 & 0xFF;
        let b = paramHex & 0xFF;
        setForm(prevForm => ({...prevForm, rgb: 'rgb('+r+', '+g+', '+b+')'}))
        setForm(prevForm => ({...prevForm, color: 'rgb('+r+', '+g+', '+b+')'}))
    }

    const container =  {
        background: form.color
    }

  return (
    <div className='container' style={container}>
        <form className='form'>
            <input id='color' name='color' value={form.hex} onChange={handleColorChange} />
            <label htmlFor='color'>{form.rgb}</label>
        </form>
    </div>
  )
}
