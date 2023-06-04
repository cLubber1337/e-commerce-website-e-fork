import { RootState } from "features/store"

export const selectAppStatus = (state: RootState) => state.app.status
