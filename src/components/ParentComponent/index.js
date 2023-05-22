export default function ParentComponent(props) { 
    return (<div>
        <h1> Parent Component </h1>
        {props.children}
        <p> footer parent component </p>
    </div>)
}