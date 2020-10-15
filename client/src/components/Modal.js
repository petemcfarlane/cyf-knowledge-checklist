import React from 'react'
import { Link } from "react-router-dom";
export default function Modal() {
    return (


        <div>
             <div className="modal" tabindex="-1">
             <div className="modal-dialog">
              <div className="modal-content">
                 <div className="modal-header">
                   <h5 className="modal-title">Submition</h5>
                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                   </button>
                 </div>
                 <div className="modal-body">
                   <p>Your account has been created successfully</p>
                 </div>
                 <div className="modal-footer">
                 <Link to="/"><button type="button" className="btn btn-secondary" data-dismiss="modal">Login</button></Link>
                 </div>
               </div>
             </div>
             </div>
             
        </div>
    )
}
