import React, { useEffect, useLayoutEffect, useState, createContext, useCallback } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([])
  const [bookmarkData, setBookmarkData] = useState([])
  const [messages, setMessages] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const fetchUsers = useCallback(async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=40`)
    setUserData(response.data.results)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [setWindowWidth])

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  const values = {
    userData,
    bookmarkData,
    setBookmarkData,
    messages,
    setMessages,
    windowWidth,
  }

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>
}

export default DataContextProvider
