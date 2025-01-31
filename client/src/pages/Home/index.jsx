import { Link } from "react-router-dom"


export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link to={"/create-lights"}>
        <p>Create light</p>
      </Link>
      <Link to={"/lights"}>
        <p>show lights</p>
      </Link>

      </>
      
      

  )
}
