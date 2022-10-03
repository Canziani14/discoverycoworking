import React,{ useState,useEffect } from "react";
import SmallCard from './SmallCard';


function ContentRowDatabase(){       
    
    // Fetch USERS
    const [users,setUsers] = useState(["Cargando..."])
    async function fetchUsers() {       
        const response = await fetch('http://localhost:3010/apiUsers/list');        
        const usersArray = await response.json()
        setUsers(usersArray.info.total)
        console.log(usersArray)
    }
	useEffect(()=>{
		fetchUsers()
	},[])
    

    // Fetch MMBERSHIPS
    const [memberships,setProducts] = useState(["Cargando.."])
    async function fetchMemberships() {       
        const response = await fetch('http://localhost:3010/apiMemberships/list');        
        const membershipArray = await response.json()
        setProducts(membershipArray.info.total)
    }
	useEffect(()=>{
		fetchMemberships()
	},[])


   // Fetch QUERIES
   const [queries,setQueries] = useState(["Cargando.."])
   async function fetchQueries() {       
       const response = await fetch('http://localhost:3010/apiQueries/list');        
       const QueriesArray = await response.json()
       setQueries(QueriesArray.info.total)
   }
   useEffect(()=>{
    fetchQueries()
   },[])


    let usersCard = {
        color: "papahoeBlueTec",
        titulo: "Usuarios en Database",
        valor: users,
        icono: "fas fa-user",
    }  
    
    let productsCard = {
        color: "papahoePink",
        titulo: "Membresias en Database",
        valor: memberships,
        icono: "fa-solid fa-box-open",
    }    
    let queriesCard = {
        color: "papahoeGreen",
        titulo: "Consultas en Database",
        valor: queries,
        icono: "fa-industry",
    }
    
    let cardProps = [usersCard, productsCard, queriesCard];
    




    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((elem,index)=>{
                    return <SmallCard  {...elem}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowDatabase;