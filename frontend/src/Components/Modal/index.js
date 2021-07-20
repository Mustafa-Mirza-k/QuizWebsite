import React, { useEffect } from "react";
import { Modal, Image } from "react-bootstrap";
function Message({ show, message, success, setShow }) {
  useEffect(() => {
    if (show) {
      let timerFunc = setTimeout(() => {
        setShow();
      }, 2000);
      return () => clearTimeout(timerFunc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Modal show={show}>
      <Modal.Body
        className="modalPanel"
        style={{ backgroundColor: success ? "green" : "red" }}
      >
        <Image
          className="modalPanelImg"
          src={
            success
              ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/600px-White_check.svg.png"
              : "https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsconflicting_93497.png"
          }
        />

        <p className="modalMessage">{message}</p>
      </Modal.Body>
    </Modal>
  );
}

export default Message;
