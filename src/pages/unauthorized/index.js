import ChildrenComponent from "../../components/ChildrenComponent"
import ParentComponent from "./../../components/ParentComponent"

export default function unauthorized() { 
    return(<div>
        <h1> 401 Unauthorized </h1>
        <p> you have no authorized to access this page </p>
        <ParentComponent>
            <ChildrenComponent />
            <div> Test component </div> 
        </ParentComponent>
    </div>)
}