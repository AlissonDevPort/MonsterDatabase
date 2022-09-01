import React from "react";
import "./Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>Bem vindos a minha DataBase</h4>
          <span>Vá no campo "ID" e digite apenas os codigos. Ex: 1002 e depois clique em "PROCURAR"</span>
          <p>Todas infos estão vindo de uma API externa</p>
        </div>
        <div className="modal-body">
          <ul>
            <li>ID:1002</li>
            <li>ID:1115</li>
            <li>ID:1389</li>
            <li>ID:1251</li>
            <li>ID:1272</li>
          </ul>
        </div>
        <div>
          <button onClick={props.onClose}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
