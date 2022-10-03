import React from 'react'
import PropTypes from 'prop-types';


const Membership = ( props ) => {
  return (
    <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">
                   <p>{props.name}</p> 
                   <p>{props.id}</p> 
                  </div>
                </div>
              </div>
  )
}
Membership.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
};
export default Membership