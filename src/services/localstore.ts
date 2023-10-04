import { Settings } from '@/types/setting.js'
import  {Task, TaskList}  from '../type.ts'

export const getLocalStore = (key:string) => {
  let answer = localStorage.getItem(key)
  return answer != null ? localStorage.getItem(key) : ''
}
export const setLocalStore = (key:string, value:string) => { 
localStorage.setItem(key, value)    
}
export const removeLocalStore = (key:string) => {
  localStorage.removeItem(key)
}   

export const getTaskList:()=> TaskList = () => {
  return JSON.parse(getLocalStore('taskList') || '{  "lastId": 0,  "tasks": []}') as TaskList
}
export const setTaskList = (taskList: TaskList) => {
  setLocalStore('taskList', JSON.stringify(taskList))
}

export const getSettings = () => {
  let settings = getLocalStore('settings')
  if (settings == null || settings == '') {
    settings = '{"workTime":25,"breakTime":5,"longBreakTime":15,"longBreakInterval":4,"volume":50,"animation":true}'
  }
  return  JSON.parse(settings) as Settings
}
export const setSettings = (settings: Settings) => {
  setLocalStore('settings', JSON.stringify(settings))
}
