import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ListCells from './ListCells'
export default function Createds() {

  return (
    <>
    <h1>Vaše světla byla vytvořena</h1>
    <p>ID vaší objednávky</p>
    <Link to={`/coffin/${id}`}>
   <button>
    zobrazit objednávku
   </button>
   </Link>
   <Link to={"/"}>
   <button>
    Jít zpět na objednávku
   </button>
   </Link>
   <ListCells id="1" name="Suoer Světlo"></ListCells>
    </>
  )
}
