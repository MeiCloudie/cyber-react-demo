import ContentDemo from "./components/ContentDemo"
import DemoEvent from "./components/DemoEvent"
import HeaderDemo from "./components/HeaderDemo"
import HomeDemo from "./components/HomeDemo"
import NavigationDemo from "./components/NavigationDemo"
import RenderShoes from "./components/RenderShoes"

function App() {
  return (
    <>
      <HomeDemo />
      <HeaderDemo />
      <div className="flex h-40">
        <NavigationDemo />
        <ContentDemo />
      </div>
      <RenderShoes />
      <DemoEvent />
      {/* <h1 className="text-red-500">Tôi là Mei</h1> */}
    </>
  )
}

export default App
