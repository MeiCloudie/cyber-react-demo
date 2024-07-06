import ContentDemo from "./components/ContentDemo"
import HeaderDemo from "./components/HeaderDemo"
import HomeDemo from "./components/HomeDemo"
import NavigationDemo from "./components/NavigationDemo"

function App() {
  return (
    <>
      <HomeDemo />
      <HeaderDemo />
      <div className="flex h-40">
        <NavigationDemo />
        <ContentDemo />
      </div>
      <h1 className="text-red-500">Tôi là Mei</h1>
    </>
  )
}

export default App
