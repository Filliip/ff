import { Link } from "react-router-dom"


export default function ListCell(props) {
  return (
    <Link to={`/firePlace/${props._id}`}>
        <p>{props.name}</p>
    </Link>
  )
}
