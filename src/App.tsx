import Header from "./assets/sections/Header"
import Listings from "./assets/sections/Listings"
import { FilteredJobsContextProvider } from "./context/FilterContext"

const App = () => {
  return (
    <>
      <FilteredJobsContextProvider>
        <Header />
        <Listings />
      </FilteredJobsContextProvider>
    </>
  )
}

export default App
