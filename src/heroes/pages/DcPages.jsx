import { Navbar } from "../../ui/components/NavBar"
import { HeroesList } from "../components/HeroesList"


export const DcPages = () => {
  return (
    <>
      <Navbar />
      <h1>DC</h1>
      <HeroesList publisher={'DC Comics'}/>
    </>
  )
}