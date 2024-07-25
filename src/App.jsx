// import { Route, Routes } from "react-router-dom"
// import BaiTap1Props from "./components/BaiTap/BaiTap1Props"
// import BaiTapHienThiDienThoai from "./components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai"
// import HomeTemplate from "./template/HomeTemplate/HomeTemplate"
// import PageNotFound from "./components/PageNotFound/PageNotFound"
// import ShoeDetail from "./components/ShoeDetail"
import React from "react"
import useRouteCustom from "./routes/useRouteCustom"
import { message } from "antd"

export const NotificationContext = React.createContext()
function App() {
  const [messageApi, contextHolder] = message.useMessage()
  {
    // path (tuyến đường): endpoint /home
  }
  // cách setup và sử dụng
  // index, element, path trong react router dom
  // setup template sử dụng chung cho các trang
  // PAGE NOT FOUND
  // lấy dữ liệu param (:id), query param (&name="")
  // Custom xây dựng cơ chế routing theo hook useRoutes từ react router dom

  const routes = useRouteCustom()

  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content,
    })
  }
  // handleNotification("error", "Hello")
  return (
    <>
      <NotificationContext.Provider
        value={{ abc: "Linh da", handleNotification }}
      >
        {contextHolder}
        {routes}
      </NotificationContext.Provider>
      {/* <NotificationContext.Provider value={{ abc: "Mei" }}>
        <Headers />
      </NotificationContext.Provider>
      <Body />
      <Footer /> */}
    </>
  )
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<HomeTemplate />}>
  //         {/* thuộc tính index giúp xác định một component con sẽ hiển thị cùng lúc khi người dùng truy cập tới đường dẫn của component cha */}
  //         <Route index element={<BaiTap1Props />} />
  //         <Route
  //           path="bai-tap-hien-thi-dien-thoai"
  //           element={<BaiTapHienThiDienThoai />}
  //         />
  //         <Route path="shoe-detail/:id" element={<ShoeDetail />} />
  //       </Route>

  //       {/* path với giá trị * sẽ là các đường dẫn không bao gồm các đường dẫn đã setup */}
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </>
  // )
}

export default App
