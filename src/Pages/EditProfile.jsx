
import hero from '../assets/week-hero.png'
import edit from '../assets/edit.svg'

function EditProfile({handleClick, CE }) {

  return (
    <>
    <div className='editprofile-responsive'>
        <p>Edit your Profile</p>
      </div>
    <main className='editprofile-container'>

        <div className='editprofile-header'>
          <p style={{fontSize: '18px'}}>Your Profile Image</p>
          <img src={hero} alt='person img' className='editprofile-img' />
          <p className='editprofile-align'>Change <span><img src={edit} alt='edit icon' /> </span></p>
        </div>

        <p className='editprofile-align1'>Edit your Profile</p>
       
    <form className='signup-form'>
        <div className='signup-align signup-input1 editprofile-align2'>
            <input type='text'
            placeholder='Kingsley'
            className='signup-first signup-input'/>

            <input type='text'
            placeholder='Ezechukwu'
            className='signup-first signup-input'/>
        </div>

        <div>
            <input type='text'
            placeholder='DesignwithKingsley@yahoo.com'
            className='signup-rest signup-input signup-input1'/>
            </div>

            <div>
            <input type='text'
            placeholder='+447404167963'
            className='signup-rest signup-input signup-input1'/>
            </div>

            <div className='password-align'>
            <input type= "password"
            placeholder='Password'
            className='signup-rest1 signup-input'/>
            <span>Change Paasword</span>
            </div>
         
            <div className="checkbox-container" style={{margin: '4% 0'}}>
                <input type="checkbox" id="acceptTerms" className="custom-checkbox" />
                <label for="acceptTerms" class="custom-label">Remember me</label>
            </div>

           <button className='signup-rest signup-btn' onClick={()=> handleClick(CE)}>Save Changes</button>
    </form>

        
    </main>
    </>
  )
}

export default EditProfile;