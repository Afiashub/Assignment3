function Selectoption(props){


    return (
        <div >
            <select className= "select" >
                <option>{props.name}</option>
                <option>{props.one}</option>
                <option>{props.two}</option>
                


            </select>


        </div>
    )
}


export default Selectoption