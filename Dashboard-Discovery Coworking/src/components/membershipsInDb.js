import React from 'react';
import Membership  from './Membership';



function MembershipsInDb(){
    return (
        <React.Fragment>
                {/*<!-- Memberships in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Memberships in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {
                                    memberhsips.map((memberships,index)=>{
                                        return  <Membership />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
           
        </React.Fragment>
    )

}
export default MembershipsInDb;