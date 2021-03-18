import Selectoption from "./selectOption";

function Navbar(props){


    return(

        <nav 
        style={{backgroundColor:props.color}}>
            {props.text}
            <p className="list">

                <Selectoption name= {props.about}
                 one= {props.mission} two={props.history} 
                  />
                
                

            </p>      
                
                
            
                
                
        </nav>
    )
}

export default Navbar;