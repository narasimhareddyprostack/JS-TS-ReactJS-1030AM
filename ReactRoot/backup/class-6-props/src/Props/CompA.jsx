import CompB from "./CompB"
function CompA(){
    var msg = "Good Morning"
    var name = "Rahul Gandhi"
    return <div>
        <h2>Component A</h2>
        <h5>Hello, {msg}, MR {name}</h5>
        <hr />

        <CompB  prop1={msg} name={name} prop3={100}/>
    </div>
}

export default CompA