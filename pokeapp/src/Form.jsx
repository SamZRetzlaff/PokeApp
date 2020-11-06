function Form(props) {
    return(
        <div>
            <input type= "text" onChange={props.onInput}/>
            <button onClick={props.onSearch}>Search</button>
        </div>
    )
}


export default Form; 


