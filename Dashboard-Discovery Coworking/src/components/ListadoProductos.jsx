import React,{ useState, useEffect } from "react";

function ListadoMemberships(){

    // Fetch MEMBERSHIPS
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
				{/*<!-- PRODUCTS LIST -->*/}
					<div className='container-fluid'>
					<h1 className="h3 mb-2 text-gray-800">Listado completo de Productos</h1>
					
					{/*<!-- DataTales Example -->*/}
						<div className="card shadow mb-4">
							{/* <div className="card-body"> */}
								<div className="table-responsive">
									<table className="table" id="dataTable" width="100%" cellSpacing="0">
										<thead>
											<tr>
												<th>Id</th>
												<th>Nombre</th>
												<th>Precio</th>
												<th>Details</th>
												<th>Services</th>
                                                <th></th>
											</tr>
										</thead>  
                                        <tbody>                                                               
                                        {
                                            ListadoMember.map((elem,index)=>{
                                                
                                                let icono;
                                                let color;
                                                if (elem.active == true ){
                                                    icono = 'fa fa-check';
                                                    color = 'green'
                                                }else{
                                                    icono = 'fa fa-thin fa-times';
                                                    color = 'red'
                                                }
                                                return (
                                                    <React.Fragment>
                                                    <tr>
                                                        <td>{elem.id_membership}</td>
                                                        <td>{elem.name}</td>                                  
                                                        <td>{elem.price}</td>
                                                        <td>{elem.details}</td>
                                                        <td>{elem.services}</td>
                                                        <td style={{color: color}}><i class={icono}></i></td>
                                                        <td>
                                                            <a target="_blank" href={'http://localhost:3001/apiMemberships/list/'+ elem.id_membership}>Ver producto</a>
                                                        </td>
                                                    </tr>                                                      
                                                    </React.Fragment>
                                                )
                                            })
                                        }   
                                        </tbody>
									</table>
								</div>
							{/* </div> */}
						</div>
					</div>            
        </React.Fragment>
    )
}
export default ListadoMemberships;