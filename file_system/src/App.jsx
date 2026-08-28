import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Folder from './components/folder';
import { useFolders } from './zustand/store';
function App() {
  const folders = useFolders((state)=>state.folderSystem)
  const removeFolders = useFolders((state)=>state.removeAllFolders);
  const currentDepth=1
  
  return (
    <>
      <h1 className="text-5xl text-center">File System</h1>
      <button onClick={removeFolders}>Remove all Folders</button> 
      <Folder folder={folders} currentDepth={currentDepth} />
    </>
  )
}

export default App
