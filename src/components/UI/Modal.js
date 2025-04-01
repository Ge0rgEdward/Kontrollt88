import {useRef, useEffect} from 'react'

const Modal = (props) => {
    const modalRef = useRef();

    useEffect (() => {
        if (props.open) {
            modalRef.current.showModal();
        }
        else {
            modalRef.current.close();
        }
    }, [props.open]);
    return ( 
        <dialog ref={(modalRef)} className="modal">
            {props.children}
        <form method="dialog">
            <button onClick={props.onClose}>Close</button>
        </form>
        </dialog>
        
    )
}

export default Modal