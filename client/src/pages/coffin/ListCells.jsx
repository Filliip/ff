import { Link } from "react-router-dom"


export default function ListCells(props) {
  return (
    <Link to={`/coffin/${props._id}`}>
        <p>{props.name}</p>
    </Link>
  )
}
