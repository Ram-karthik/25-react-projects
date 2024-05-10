import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import './style.css';

const ImageSlider = ({ url, page, limit }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [image, SetImage] = useState([]);
    const [fetchErrMsg, setFetchErrMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                SetImage(data);
                setLoading(false);
            }
        }
        catch (e) {
            setFetchErrMsg(e.message);
            setLoading(true);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
    }, [url])

    if (loading) {
        return <p>Loading....</p>
    }
    if (fetchErrMsg !== null) {
        return <p>Error Occurred</p>
    }

    const handleArrowLeft = () => {
        setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
    }
    const handleArrowRight = () => {
        setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
    }
    return (
        <div className='container'>
            <FaArrowCircleLeft className='arr arr-left' onClick={() => handleArrowLeft()} />
            {
                image && image.length ?
                    image.map((imgItem, index) => (
                        < img key={imgItem.id} src={imgItem.download_url} className={currentSlide === index ? 'slide-img' : 'slide-img hideSlide'} />
                    ))
                    : null
            }

            <FaArrowCircleRight className='arr arr-right' onClick={() => handleArrowRight()} />
            <span className='circle-indicators'>
                {
                    image && image.length ?
                        image.map((_, index) => (
                            <button key={index} className={currentSlide === index ? 'crt-ind' : 'crt-ind hide-ind'} onClick={() => setCurrentSlide(index)}></button>
                        )) : null
                }
            </span>
        </div >
    )
}

export default ImageSlider