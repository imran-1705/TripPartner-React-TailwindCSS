import React from 'react'
import LightGallery from 'lightgallery/react';

import India from '../assets/India.jpg';
import Hero1 from '../assets/Hero1.jpg';
import Hero2 from '../assets/Hero2.jpg';
import Hero3 from '../assets/Hero3.jpg';
import Hero4 from '../assets/Hero4.jpg';
import Bali from '../assets/Bali.jpg';
import Venice from '../assets/Venice.jpg';
import Paris from '../assets/Paris.jpg';
import Tokyo from '../assets/Tokyo.jpg';

import './Css/Gallery.css'
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const images = [
    { src: India, alt: 'India' },
    { src: Hero1, alt: 'Hero1' },
    { src: Hero2, alt: 'Hero2' },
    { src: Hero3, alt: 'Hero3' },
    { src: Hero4, alt: 'Hero4' },
    { src: Bali, alt: 'Bali' },
    { src: Venice, alt: 'Venice' },
    { src: Paris, alt: 'Paris' },
    { src: Tokyo, alt: 'Tokyo' },
];

const GalleryComp = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
     <div className="max-w-7xl mx-auto mb-16 px-4 md:px-0 mt-10">
  <div>
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-3 font-serif">
      Our Gallery
    </h2>
    <hr className="text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10" />
  </div>

  <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
    <div className="gallery-grid">
      {images.map((img, index) => (
        <a key={index} href={img.src}>
          <img src={img.src} alt={img.alt} />
        </a>
      ))}
    </div>
  </LightGallery>
</div>

    );
};

export default GalleryComp;
