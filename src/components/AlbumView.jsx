import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function AlbumView(){
    const { id } = useParams()
    const [albumData, setAlbumData] = useState([])
    return(
        <div>
            <h2>{ id }</h2>
            <p>The Album is here</p>
        </div>
    )
 }