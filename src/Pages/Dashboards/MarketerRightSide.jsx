import React from 'react'
import weekhero from '../../assets/week-hero.png'
import person1 from '../../assets/person1.svg'
import person2 from '../../assets/person2.svg'
import person3 from '../../assets/person3.svg'
import person4 from '../../assets/person4.svg'
import hero2 from '../../assets/hero2.svg'
import MarketerButton from '../../Components/Buttons/MarketerButton'



function MarketerRightSide() {
  const MRS = [
    { id:1, img: person1, p: 'Amanda sold 1 unit just now' },
    { id:2, img: person2, p: 'Kingsley sold 20 units 2mins ago' },
    { id:3, img: person3, p: 'Qutan sold 2 units 3hrs ago' },
    { id:4, img: person1, p: 'Amanda sold 1 unit 11hrs ago' },
    { id:5, img: hero2, p: 'Amaka sold 1 unit yesterday' },
    { id:6, img: person2, p: 'Kingsley sold 26 units a week ago' },
    { id:7, img: person1, p: 'Kingsley sold 24 units 2 weeks ago' },
    { id:8, img: person4, p: 'James sold 20 units a month ago' }
  ]
    
return (
    <div className='irs-container'>
      
      <div className='irs-align' style={{borderBottom: '1px solid grey', margin: '2% 9%', paddingBottom: '9%'}}>
        <h5>Marketer of the week</h5>
        <img src={weekhero} alt='an image' style={{marginTop: '4%'}}/>
        <h5 style={{marginTop: '4%'}}>Kingsley Whyte</h5>
        <p style={{marginTop: '4%'}}>Joined June 22nd 2024</p>
        <p className='irs-color' style={{marginTop: '4%'}}>View Statistics</p>
      </div>

      <div className='mrs-align'>
        <h5>History</h5>
        {MRS.map(({id, img, p})=>(
          <div key={id} className='mrs-align1'>
            <img src={img} alt='a profile' />
            <p>{p}</p>
          </div>
        ))}
      </div>
        <MarketerButton />
      </div>
  )
}

export default MarketerRightSide;