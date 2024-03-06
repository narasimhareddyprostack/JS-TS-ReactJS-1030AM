function CompB(props){

    return <div>
        <h2>Component B</h2>
        <h3>{JSON.stringify(props)}</h3>
        <h3>Employee Name:{props.name}</h3>
    </div>
}

export default CompB