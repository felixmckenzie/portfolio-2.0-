import React, {createContext, useContext,useState} from "react";


const UpdateModeContext = createContext()
  const ModeContext = createContext()
 
export function useUpdateModeContext () {
    return useContext(UpdateModeContext)
 }

export function useModeContext  () {
  return useContext(ModeContext)
}

export function ToggleModeProvider({children}) {
    const [mode,setMode] = useState('dark')
    
    const toggleMode = () =>  {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
  return (
   <UpdateModeContext.Provider value={toggleMode}>
    <ModeContext.Provider value={mode}>
    {children}
    </ModeContext.Provider>
   </UpdateModeContext.Provider>
  )
}
