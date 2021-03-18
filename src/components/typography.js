function Typography(props){


    return (
        <div className="typo" style= {{backgroundColor: props.mycolor, fontSize:props.mysize, 
        color: props.color, fontWeight:props.weight, fontStyle:props.fontstyle}}>{props.text}

        </div>

            
    )
}


export default Typography