import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ListCell from './ListCell'
export default function CreatedFirePlace() {

  return (
    <>
    <h1>Vaše světla byla vytvořena</h1>
    <p>ID vaší objednávky</p>
    <Link to={`/firePlace/${id}`}>
   <button>
    zobrazit objednávku
   </button>
   </Link>
   <Link to={"/"}>
   <button>
    Jít zpět na objednávku
   </button>
   </Link>
   <ListCell id="1" name="Suoer Světlo"></ListCell>
    </>
  )
}
