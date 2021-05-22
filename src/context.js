import React,{useEffect,useState,createContext} from "react"
import axios from "axios"

export const ResultContext =  createContext();

function AppProvider({children}) {
    const [getDataArray,setDataArray] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [endpoint, setEndpoint] = useState("capsules")
    const [select,setSelect] = useState("default")
    const [sortBy,setSortBy] =useState("type");


    const[visibleDefault, setvisibleDefault] = useState(true)
    const[visibleArrowAsc, setVisibleArrowAsc] = useState(false)
    const[visibleArrowDesc, setVisibleArrowDesc] = useState(false)

  const handleChangeCapsules = () =>{
    setModalShow(true)
    setSortBy("type")
    setEndpoint("capsules")
  }
  const handleChangeCrew = () =>{
    setModalShow(true)
    setSortBy("name")
    setEndpoint("crew")
  }
  const handleChangeRockets = () =>{
    setModalShow(true)
    setSortBy("engines")
    setEndpoint("rockets")
  }
  const handleChangeStarlink = () =>{
    setModalShow(true)
    setSortBy("version")
    setEndpoint("starlink")
  }

  const handleFilter =(option)=>{
    setSelect(option);
    setVisibleArrowAsc(true)
    setvisibleDefault(false)
  }
  const handleFilterDesc =(option)=>{
    setSelect(option);
    setVisibleArrowAsc(false)
    setVisibleArrowDesc(true);
  }
  const handleFilterAsc =(option)=>{
    setSelect(option);
    setvisibleDefault(true)
    setVisibleArrowDesc(false)
  }

  const handleCloseBtn = () =>{
    setSelect("default")
    setModalShow(false)
  }

  const sort = (select) =>{
    switch(select){
      case "default":
        return(
          {
            "options":{
               "pagination": false
            }
          }
        )
      case "asc":
        return(
          {
            "options":{
               "sort":{
                  [sortBy]: "asc"
               },
               "pagination": false
            }
          }
        )
      case "desc":
        return(
          {
            "options":{
               "sort":{
                  [sortBy]: "desc"
               },
               "pagination": false
            }
          }
        )
      default:
        return "Something goes wwrong";
    }
  }

  useEffect(()=>{
    axios({
      url:`https://api.spacexdata.com/v4/${endpoint}/query`,
     method: "post",
     data: sort(select),
     headers: new Headers({
       "Content-Type": "application/json"
     }),
   }).then(response =>{
     if (response.status === 200) {
      let responseArray = [];

       if (endpoint === "capsules" ) {
        responseArray = response.data.docs.map(row => ({
          id: row.id,
          firstColumn: row.type,
          secondColumn: row.status
        }));
       } else if (endpoint === "crew") {
        responseArray = response.data.docs.map(row => ({
          id: row.id,
          firstColumn: row.name,
          secondColumn: row.status
        }));
       }else if (endpoint === "rockets") {
        responseArray = response.data.docs.map(row => ({
          id: row.id,
          firstColumn: row.engines.type,
          secondColumn: row.diameter.meters
        }));
       }
       else if (endpoint === "starlink") {
        responseArray = response.data.docs.map(row => ({
          id: row.id,
          firstColumn: row.version,
          secondColumn: row.launch
        }));
       }

       setDataArray(responseArray);
      console.log(response.data.docs)
     } else {
       console.log("error: " + response);
     }
   })
 
  },[endpoint, select]);



    return (
        <ResultContext.Provider 
        value={{
            handleChangeCapsules,
            handleChangeCrew,
            handleChangeRockets,
            handleChangeStarlink,

            modalShow,
            endpoint,
            select,
            sortBy,
            setSelect,

            handleFilter,
            handleFilterDesc,
            handleFilterAsc,

            visibleDefault,
            visibleArrowAsc,
            visibleArrowDesc,

            setvisibleDefault,
            setVisibleArrowAsc,
            setVisibleArrowDesc,
            getDataArray,
  
            
            show:modalShow,
            setModalShow,

            handleCloseBtn,
        }}
        >
            {children}
        </ResultContext.Provider >
    )
}

export default AppProvider
