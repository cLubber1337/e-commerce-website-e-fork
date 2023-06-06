import { createSlice } from "@reduxjs/toolkit"
import { AppStatusType } from "types/app-types"

const initialState = {
  status: "idle" as AppStatusType,
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending") && action.type.startsWith("products/"),
        (state) => {
          state.status = "loading"
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected") && action.type.startsWith("products/"),
        (state) => {
          state.status = "error"
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled") && action.type.startsWith("products/"),
        (state) => {
          state.status = "success"
        }
      )
  },
})

export default appSlice.reducer
