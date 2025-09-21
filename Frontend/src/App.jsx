import React from 'react'
import TaskBoard from './components/TaskBoard'

function App() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-center mb-6">Creative Upaay Task Dashboard</h1>
      <TaskBoard />
    </div>
  )
}

export default App
