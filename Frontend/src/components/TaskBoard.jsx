import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, moveTask, setTaskStatus } from '../redux/taskSlice'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

function TaskBoard() {
  const [newTask, setNewTask] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [priority, setPriority] = useState('Low')
  const [filter, setFilter] = useState('All')

  const tasks = useSelector((state) => state.tasks)
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask({ title: newTask, description: newDesc, priority }))
      setNewTask('')
      setNewDesc('')
      setPriority('Low')
    }
  }

  const statuses = ['To Do', 'In Progress', 'Done']

  const filteredTasks = (status) => {
    return tasks
      .filter((task) => task.status === status && (filter === 'All' || task.priority === filter))
      .sort((a,b) => a.id - b.id)
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    if (!destination) return
    const taskId = parseInt(draggableId, 10)
    const srcStatus = source.droppableId
    const destStatus = destination.droppableId
    if (srcStatus === destStatus) {
      // For simplicity we don't change ordering within same column, but placeholder exists.
      return
    }
    dispatch(setTaskStatus({ id: taskId, status: destStatus }))
  }

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Task title"
          className="border p-2 rounded w-1/4"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task description"
          className="border p-2 rounded w-1/3"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTask}
        >
          Add Task
        </button>

        <select
          className="ml-auto border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-6">
          {statuses.map((status) => (
            <Droppable droppableId={status} key={status}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`bg-white p-4 rounded shadow min-h-[200px] ${snapshot.isDraggingOver ? 'bg-green-50' : ''}`}
                >
                  <h2 className="font-bold text-lg mb-3">{status}</h2>
                  {filteredTasks(status).map((task, index) => (
                    <Draggable draggableId={String(task.id)} index={index} key={task.id}>
                      {(providedDraggable) => (
                        <div
                          ref={providedDraggable.innerRef}
                          {...providedDraggable.draggableProps}
                          {...providedDraggable.dragHandleProps}
                          className="border p-2 mb-2 rounded bg-gray-50"
                        >
                          <h3 className="font-semibold">{task.title}</h3>
                          <p className="text-sm">{task.description}</p>
                          <p className="text-xs text-gray-500">Priority: {task.priority}</p>
                          <div className="mt-2 flex gap-2">
                            {status !== 'To Do' && (
                              <button
                                className="text-sm bg-gray-200 px-2 py-1 rounded"
                                onClick={() => dispatch(moveTask({ id: task.id, direction: -1 }))}
                              >
                                ← Back
                              </button>
                            )}
                            {status !== 'Done' && (
                              <button
                                className="text-sm bg-green-200 px-2 py-1 rounded"
                                onClick={() => dispatch(moveTask({ id: task.id, direction: 1 }))}
                              >
                                Next →
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default TaskBoard
