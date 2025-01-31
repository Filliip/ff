import { Link } from "react-router-dom"


export default function Home() {
  return (
    <>
      <h1>Cake shop</h1>
      <Link to={"/create-cakes"}>
        <p>Create cake</p>
      </Link>
      <Link to={"/cakes"}>
        <p>Show cake</p>
      </Link>

      </>
      
      

  )
}
