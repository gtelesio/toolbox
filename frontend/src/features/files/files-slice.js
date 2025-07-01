import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchFilesData } from '../../shared/lib/files-api'

export const fetchFiles = createAsyncThunk(
  'files/fetchFiles',
  async (fileName, thunkAPI) => {
    return await fetchFilesData(fileName)
  }
)

const filesSlice = createSlice({
  name: 'files',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFiles.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default filesSlice.reducer 