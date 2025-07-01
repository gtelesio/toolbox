import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFiles } from '../../../features/files/files-slice'

export function useFiles(fileName) {
  const dispatch = useDispatch()
  const files = useSelector(state => state.files.items)
  const loading = useSelector(state => state.files.loading)
  const error = useSelector(state => state.files.error)

  useEffect(() => {
    dispatch(fetchFiles(fileName))
  }, [dispatch, fileName])

  return { files, loading, error }
} 