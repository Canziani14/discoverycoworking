import React from 'react';
import ContentRowDatabase from './ContentRowDatabase';
import LastProductInDb from './LastProductInDb';
import Membership from './Membership';
import { useState, useEffect } from 'react'

function ContentRowTop(){
	const [ListadoMember,setMemberships] = useState(["Cargando.."])
    async function ListadoMemberships() {       
        const response = await fetch('http://localhost:3010/apiMemberships/list');        
        const membershipsArray = await response.json()
        setMemberships(membershipsArray.data)        
    }
	useEffect(()=>{
		ListadoMemberships()
	},[])
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Admin Dashboard</h1>
					</div>
					

					<ContentRowDatabase />
						
	

					<div className="row">						
						<LastProductInDb />

						<div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">membresias</h5>
          </div>

          <div className="card-body">
            <div className="row">
          {
            ListadoMember.map((membership, index )=>{
              return(
              <Membership name={membership.name} id={membership.id} key={index}/>
              )
            })}
          
            
              

            </div>
          </div>
        </div>
      </div>
					
						
						
						{/* last product */}

						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
