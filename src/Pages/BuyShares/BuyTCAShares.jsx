import './BuyShares.css'
import RightSide from './RightSideTCA'
import LeftSide from './LeftSideTCA'


function BuyShares({show, handleShow, selectedPayment, setSelectedPayment}) {
  return (
    <main className='buyshares-container'>
    <RightSide show={show} handleShow={handleShow} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
    <LeftSide />
    </main>
  )
}

export default BuyShares