import ContentDemo from "./components/ContentDemo"
import DemoCss from "./components/DemoCss/DemoCss"
import DemoEvent from "./components/DemoEvent"
import HeaderDemo from "./components/HeaderDemo"
import HomeDemo from "./components/HomeDemo"
import NavigationDemo from "./components/NavigationDemo"
import RenderShoes from "./components/RenderShoes"

function App() {
  return (
    <>
      <DemoCss />
      <HomeDemo />
      <HeaderDemo />
      <div className="flex h-40">
        <NavigationDemo />
        <ContentDemo />
      </div>
      <RenderShoes />
      <DemoEvent />
      {/* <h1 className="text-red-500">Tôi là Mei</h1> */}

      <div className="container">
        <h5 className="demo_sass">Hello Bé Ba</h5>
      </div>
    </>
  )
}

export default App
