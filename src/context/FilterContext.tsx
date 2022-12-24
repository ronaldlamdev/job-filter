import { ReactNode, createContext } from "react";
import { list } from "../assets/data/data";

type FilteredJobsProviderProps = {
  children: ReactNode
}

export const FilteredJobsContext = createContext(list);

export const FilteredJobsContextProvider = ({
  children
}:FilteredJobsProviderProps) => {
  return <FilteredJobsContext.Provider value={list}>{children}</FilteredJobsContext.Provider>
}