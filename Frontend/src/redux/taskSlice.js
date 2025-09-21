import { createSlice } from '@reduxjs/toolkit'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks')
    if (serializedState === null) return []
    return JSON.parse(serializedState)
  } catch (e) {
    return []
  }
}

const saveState = (state) => {
  try {
    localStorage.setItem('tasks', JSON.stringify(state))
  } catch {}
}

const statuses = ['To Do', 'In Progress', 'Done']

const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        priority: action.payload.priority,
        status: 'To Do',
      })
      saveState(state)
    },
    moveTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id)
      if (task) {
        const currentIndex = statuses.indexOf(task.status)
        const newIndex = currentIndex + action.payload.direction
        if (newIndex >= 0 && newIndex < statuses.length) {
          task.status = statuses[newIndex]
        }
      }
      saveState(state)
    },
    setTaskStatus: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id)
      if (task) {
        task.status = action.payload.status
      }
      saveState(state)
    },
    reorderWithinColumn: (state, action) => {
      // Not implemented: placeholder for future ordering within a column
      saveState(state)
    }
  },
})

export const { addTask, moveTask, setTaskStatus, reorderWithinColumn } = taskSlice.actions
export default taskSlice.reducer
