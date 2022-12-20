import Modal from 'react-bootstrap/Modal';
import icon from '../../props/cancel.svg';
import { useNavigate } from 'react-router';

function DeclineModal(props) {

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
      <h4 className='text-align-center mt-3'>Certificate not issued by institution</h4>
    </Modal.Body>
  </Modal>
    // </div>
  );
}

export default DeclineModal

