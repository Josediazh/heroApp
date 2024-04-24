import { Navbar } from "../../ui/components/NavBar"
import { HeroesList } from "../components/HeroesList"

export const MarvelPage = () => {
  return (
    <>
      <Navbar />
      <h1>MarvelPage</h1>
      <HeroesList publisher={'Marvel Comics'}/>
    </>
  )
}