import React from 'react';
import ContentRowDatabase from './ContentRowDatabase';
import LastProductInDb from './LastProductInDb';

function ContentRowTop(){
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
					
						
						
						{/* last product */}

						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
