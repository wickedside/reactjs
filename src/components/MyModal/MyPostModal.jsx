import React from "react"; /*rcfe*/

const MyPostModal = ({ visible, setVisible, children }) => {

  /*visible, setVisible, children = props. В фигурных чтобы не писать кадлый раз . так мы его сразу раскрываем*/
  return (
    <>
    <div className={visible?'modal open':'modal'}>
    {/* если визибл есть то пишем модал опен если не то просто модал */ }
      <div className="modal-content">
      <i className="material-icons right m1"
        onClick={()=>(setVisible(false))}>close</i>
        <div className="modal-body">

        {children}
        </div>
        </div>
      </div>

    <div
    onClick={()=>{
        setVisible(false);
    }}
    className={visible? 'modal-overlay open-overlay':'modal-overlay'}></div>

</>
  );
};

export default MyPostModal;
