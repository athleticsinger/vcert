import Modal from 'react-bootstrap/Modal';
import icon from '../../props/success-svgrepo-com.svg';
import { useNavigate } from 'react-router';

function SuccessModal(props) {

  return (
    // <div className='MemberOnly'>
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
      
      <img className='modal-icon' src={icon} alt="" />
      <h4 className='text-align-center mx-auto mt-4'>Your Certificate has been verified</h4>
    </Modal.Body>
  
  </Modal>
    // </div>
  );
}

export default SuccessModal

