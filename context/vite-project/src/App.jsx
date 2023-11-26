
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
    <h1>Global context with Abhishek Singh</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
