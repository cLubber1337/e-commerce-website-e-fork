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
        (action) => {
          return action.type.endsWith("/pending")
        },
        (state) => {
          state.status = "loading"
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith("/rejected")
        },
        (state) => {
          state.status = "error"
        }
      )
      .addMatcher(
        (action) => {
          return action.type.endsWith("/fulfilled")
        },
        (state) => {
          state.status = "success"
        }
      )
  },
})

export default appSlice.reducer
