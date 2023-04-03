import { Modal } from 'antd'
import React, {useState} from 'react'

const Modals = ({title, handleOpen, handleClose, children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(handleOpen);
  return (
    <>
        <Modal
            title={title}
            open={handleOpen}
            // onOk={handleOk}
            onCancel={handleClose}
            centered
            footer={null}
        >
            {children}
        </Modal>
    </>
  )
}

export default Modals