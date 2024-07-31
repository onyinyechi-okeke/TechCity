import { useState } from 'react';
import arrow from '../../assets/chevron-down.svg';
import apartment1 from '../../assets/Apartment1.png';
import apartment2 from '../../assets/Apartment2.png';
import apartment3 from '../../assets/Apartment3.png';
import apartment4 from '../../assets/Apartment4.png';
import Toggle from '../../Components/Toggle/Toggle';
import arrowleft from '../../assets/arrowleft.svg';
import arrowright from '../../assets/arrowright.svg';
import chevronleft from '../../assets/chevron-left.svg';
import chevronright from '../../assets/chevron-right.svg';
import yellowprogress from "../../assets/yellowprogress.svg"

function BuyApartment({ show, handleShow }) {
  const initialImages = [
    { id: 1, img: apartment1, P: 'Living Room' },
    { id: 2, img: apartment2, P: 'Bathroom' },
    { id: 3, img: apartment3, P: 'Kitchen' },
    { id: 4, img: apartment4, P: 'Dining' },
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLeftClick = () => {
    const newImages = [...images.slice(1), images[0]];
    setImages(newImages);
  };

  const handleRightClick = () => {
    const newImages = [images[images.length - 1], ...images.slice(0, images.length - 1)];
    setImages(newImages);
  };

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleModalLeftClick = () => {
    if (selectedImage !== null) {
      const newIndex = (selectedImage - 1 + images.length) % images.length;
      setSelectedImage(newIndex);
    }
  };

  const handleModalRightClick = () => {
    if (selectedImage !== null) {
      const newIndex = (selectedImage + 1) % images.length;
      setSelectedImage(newIndex);
    }
  };

  return (
    <main className="home-host apartment-container">
      <Toggle />

      <section className='leftside-responsive'>
            <div className='LSR-sub'>
                <p>Shares Available: <br className='hidden' />30,000 $TCA</p>
                <p>Total Shares: <br className='hidden' />100,000 $TCA</p>
            </div>
            <img src={yellowprogress} alt='a progress bar' width={740} />
            <div className='LSR-sub1'>
                <p>28%</p>
                <p>100%</p>
            </div>
      </section>

      <section className="apartment-align">
        <div className="AA-sub">
          <p>
            {show ? '1 Apartment Unit' : 'Select Apartment Unit'}
            <br />
            <span className="span">Please select the number of apartment unit(s) you want</span>
          </p>
          <img src={arrow} alt="arrowdown" onClick={handleShow} style={{ cursor: 'pointer' }} />
        </div>

        {show &&
          <div className="AA-sub1">
            <img src={arrowleft} alt="arrow icon" onClick={handleLeftClick} style={{ cursor: 'pointer' }} />
            <div className="AA-sub2">
              {images.map(({ id, img, P }, index) => (
                <div key={id} className='image-item' onClick={() => handleImageClick(index)}>
                  <img src={img} alt="house" />
                  <p>{P}</p>
                </div>
              ))}
            </div>
            <img src={arrowright} alt="arrow icon" onClick={handleRightClick} style={{ cursor: 'pointer' }} />
          </div>}
      </section>

      <div className="AA-sub">
        <p>
          Number of Flats
          <br />
          <span className="span">Please select the number of 1 apartment unit you want</span>
        </p>
        <img src={arrow} alt="arrowdown" />
      </div>

      <div className="AA-sub">
        <p>
          Total Amount
          <br />
          <span className="span">This is the worth of one apartment unit</span>
        </p>
        <p className='responsive-p' style={{ color: '#eea837' }}>$20,000.00</p>
      </div>

      <div className="AA-sub">
        <p>
          5 year Projection
          <br />
          <span className="span">This is the amount you will get after five years</span>
        </p>
        <p className='responsive-p' style={{ color: '#eea837' }}>$20,000.00</p>
      </div>

      <section className='leftside-align1' style={{ marginTop: '0' }}>
        <div className='LSA1-sub'>Available Balance : $0</div>
        <div className='LSA1-sub1'>Fund Wallet</div>
      </section>

      <section className= 'apartment-align1'>
        <button className='leftside-align3'>Invest Now</button>
      </section>

      {selectedImage !== null && (
        <div className="modal">
          <div className="modal-content">
            <img src={chevronleft} alt="arrow left" onClick={handleModalLeftClick} />
            <img src={images[selectedImage].img} alt="large view" className="modal-image" onClick={closeModal}/>
            <img src={chevronright} alt="arrow right" onClick={handleModalRightClick} />
          </div>
        </div>
      )}
    </main>
  );
}

export default BuyApartment;
