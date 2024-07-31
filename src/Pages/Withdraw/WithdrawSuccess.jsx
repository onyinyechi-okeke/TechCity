import { FaTimes } from "react-icons/fa";
import check from "../../assets/check.svg"

function WithdrawSuccess({isVisible, onClose}) {
    if (!isVisible) return null;
  return (
    <div className="withdrawsuccess-container">
        <div style={{textAlign: 'end', cursor: 'pointer'}} onClick={onClose}>
        <FaTimes size={25}  />
        </div>

        <section className="withdrawsuccess-align">
            <img src={check} alt="good icon" />
            <p style={{fontSize: '20px', marginTop: '2rem', marginBottom: '10rem'}}>NGN200,000.00 successfully sent to <br/> <br/> Kingsley Ezechukwu</p>

            <div>
            <button className='leftside-align3'>View Receipt</button>
            </div>
        </section>
        </div>
  )
}

export default WithdrawSuccess