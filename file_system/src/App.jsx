import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  {fileStructure}  from './constants/fileStructure'
import Folder from './components/folder';
function App() {
 
  return (
    <>
    <h1 className="text-5xl text-center">File System</h1>
    <Folder folder={fileStructure} />
    </>
  )
}

export default App
