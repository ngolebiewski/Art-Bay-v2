import { useParams } from "react-router"

const ArtworkDetail = () => {
  return (
    <h1>This is artwork id# {useParams().id}<br /><br />
    I'm the Artwork Details Page, pass me an artwork ID and I will show you details</h1>
  )
  }

export default ArtworkDetail