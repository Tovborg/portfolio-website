import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass] =useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_df9v8qc',
                'template_dqbx29e',
                refForm.current,
                'q9dbXknd-jgW-Q8hN'
            )
            .then(
                () => {
                    alert('Email sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Error sending email, please try again')
                }
            )
                
    }
    
    const position = [55.891217857243134, 12.524685814306064]
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}
                        />

                    </h1>
                    <p>
                        I'm currently not looking for any new opportunities, but my inbox is always open. Whether you have a question or just want to say hi.
                        You're also more than welcome to ask me any questions about any of my projects on Github.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type={'submit'} value='Send Message' className='flat-button' />
                                </li>
                            </ul>
                        </form>
                    </div>
                
                </div>
                <div className='map-zone'>
                    <MapContainer zoomControl={false} center={position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>
                                I live here, send coffee please :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact