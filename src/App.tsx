import './styles/global.css'
import { Provider as StoreProvider } from "react-redux"
import { store } from "./store"
import Player from "./pages/Player"

function App() {

  return (
    <StoreProvider store={store}>
      <Player />
    </StoreProvider>
  )
}

export default App
