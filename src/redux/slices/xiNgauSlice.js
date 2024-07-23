import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  xiNgau: {
    xiNgau1: 2,
    xiNgau2: 3,
    xiNgau3: 6,
  },
  tongSoBanThang: 0,
  tongSoBanChoi: 0,
  // tài = true, xỉu = false
  banChon: true,
}

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    luaChonNguoiDung: (state, action) => {
      console.log(action)
      state.banChon = action.payload
    },
    // NV1: Thực hiện tạo một action dùng để xử lí chức năng khi ng dùng bấm play game, các công việc cần làm
    // B1: Thực hiện tạo ngẫu nhiên 3 con xí ngầu mới
    // B2: Thực hiện tăng tổng số bàn chơi thêm 1 giá trị
    // B3: Thực hiện lấy 3 con xí ngầu mới cộng lại và kiểm tra xem là tài hay xỉu, sau đó so sánh với kết quả ng dùng chọn để xác định xem là ng dùng thắng hay thua, thắng thì cộng thêm tổng số bàn thắng 1 giá trị
  },
})

export const { luaChonNguoiDung } = xiNgauSlice.actions

export default xiNgauSlice.reducer
