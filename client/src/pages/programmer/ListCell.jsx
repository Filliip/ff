import { Link } from "react-router-dom"


export default function ListCell(props) {
  return (
    <Link to={`/programmer/${props._id}`}>
        <p>{props.name}</p>
    </Link>
  )
}
