import React, { useState } from 'react';

function AddNok() {
  const [nokCount, setNokCount] = useState(1);

  const addAnotherNok = () => {
    if (nokCount < 2) {
      setNokCount(nokCount + 1);
    }
  };

  const NokForm = () => (

    <main className='home-host investor-container' style={{marginBottom: '3%'}}>
    <div className='home-header'>
      <p className='AddNok-p'>Next of Kin1</p>
    </div>

    <form className='signup-form'>
      <div className='signup-align signup-input1'>
        <input
          type='text'
          placeholder='Next of Kin First Name'
          className='signup-first signup-input'
        />

        <input
          type='text'
          placeholder='Next of Kin Last Name'
          className='signup-first signup-input'
        />
      </div>

      <div>
        <input
          type='text'
          placeholder='Next of Kin Email'
          className='signup-rest signup-input signup-input1'
        />
      </div>

      <div>
        <input
          type='text'
          placeholder='Next of Kin Phone Number'
          className='signup-rest signup-input signup-input1'
        />
      </div>

      <div className="checkbox-container" style={{ margin: '3% 0' }}>
        <input type="checkbox" id="acceptTerms" className="custom-checkbox" />
        <label htmlFor="acceptTerms" className="custom-label">
          Should be contacted if I'm inactive for 2 years or in a case where I'm no longer reachable
        </label>
      </div>

      <button className='signup-rest signup-btn' style={{ marginBottom: '9%' }}>
        Add Next of Kin
      </button>
    </form>
    </main>
  );

  return (
    <>
      

        {[...Array(nokCount)].map((_, index) => (
          <NokForm key={index} />
        ))}

      
      {nokCount < 2 && (
        <div
          className='signup-last'
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', fontWeight: '400' }}
        >
          <p style={{ color: 'white' }}>Want to add another person?</p>
          <span onClick={addAnotherNok} style={{ cursor: 'pointer', marginLeft: '5px', color: '#eea837' }}>
            Add another person
          </span>
        </div>
      )}
    </>
  );
}

export default AddNok;
