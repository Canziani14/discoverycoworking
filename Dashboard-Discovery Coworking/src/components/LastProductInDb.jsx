import React,{ useState, useEffect } from "react";


function LastProductInDb(){

    // Fetch PRODUCTS
    const [membership,setMembership] = useState(["Cargando.."])
    async function fetchLastMembership() {       
        const response = await fetch('http://localhost:3010/apiMemberships/list');        
        const membershipArray = await response.json();            
        setMembership(membershipArray.data)
    }
    useEffect(()=>{
        fetchLastMembership()
    },[])

    let last = Object.values(membership).pop();        
    // console.log(last);

    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Último producto ingresado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={ last.img} alt={last.name}/>
                        </div>
                        <h2>{last.name}</h2>
                        <p> {last.img} </p>
                        <p>{last.details}</p>
                        <a className="btn btn-papahoe" target="_blank" rel="nofollow" href={"http://localhost:3010/apiMemberships/list/"+ last.id_memberhsip}>Ver detalle</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LastProductInDb;