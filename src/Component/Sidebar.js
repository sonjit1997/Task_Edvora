import React,{useState} from 'react'
import { Modal} from "react-bootstrap";
import '../Style/Sidebar.css'
import { CSidebar,CSidebarNav,CNavItem} from '@coreui/react'

const Sidebar = () => {
  const [userModal, setUserModal] = useState(false);

  const closeUserModal = () => {
    setUserModal(false);
  };


  const logoutFn=()=>{
    localStorage.clear()
    window.location.href = '/';
  }

  const userDetail=()=>{
   setUserModal(true);
  }
  return (
    <>
    <CSidebar unfoldable colorScheme className='vh-100' id='nav'>
  <CSidebarNav>
  <CNavItem href="#" className='text-center' id='logo'>
  <i className="bi bi-shop display-6  me-2"></i>
   <h3 className ='my-1'>{localStorage.getItem("name")}</h3>
   
    </CNavItem>
    <CNavItem href="#" className='item' onClick={userDetail}>
     <i className='bi bi-person-lines-fill'></i>  <h6 className='mx-5 my-1'>Shop Details</h6>
    </CNavItem>
    <CNavItem href="#" className='text-center' onClick={logoutFn}>
     <i className='bi bi-box-arrow-in-left '></i> <h6 className='mx-5 my-1'>Log Out</h6>
    </CNavItem>
  </CSidebarNav>
</CSidebar>

{userModal ? (
            <Modal
              show={userModal}
              onHide={closeUserModal}
              backdrop="static"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
                  <div className="p-1">
                      <div className=" box text-success" >
                      Shop name :  {localStorage.getItem("name")}
                      </div>
                      <div className="box text-success   mt-2 ">
                        Shop id : {localStorage.getItem("userId")}
                      </div>
                     
                   
                  </div>
              </Modal.Body>
            </Modal>
          ) : (
            ""
          )}
</>
  )
}

export default Sidebar