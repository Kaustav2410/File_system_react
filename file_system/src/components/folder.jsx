import React, { useState } from 'react'
import { usefileSystemPadding } from '../zustand/store';
const Folder = ({folder,currentDepth}) => {
    const horizontal= usefileSystemPadding((state)=>state.Padding.intial_horizontal_spacing)
    const vertical= usefileSystemPadding((state)=>state.Padding.intial_vertical_padding)
    const increment= usefileSystemPadding((state)=>state.Padding.increment)
    // Not Dynamic values don't work with tailwind css
    const paddingLeft =horizontal + increment*currentDepth
    const hasChildren = folder.children && folder.children.length>0
    const [isClose,setisClose] = useState(false);
  return (
    <div style={{ paddingLeft: `${paddingLeft}px` }}>
        <div className="flex gap-2 ">
            
            {hasChildren && <button className="cursor-pointer" onClick={()=>setisClose((prev)=>!prev)}>
                {isClose?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
                :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>}
            </button>}
<h3>{folder.name}</h3>
        </div>
            <div>
                {
                    folder.children && !isClose &&folder.children.map((child,index)=>{
                        if(child.type === 'folder'){
                            return <Folder key={index} folder={child} currentDepth={currentDepth+1}/>
                        }
                        else{
                            return <p style={{ paddingLeft: `${paddingLeft+5}px` }} className="text-blue-400" key={index}>{child.name}</p>
                        }
                    })
                }
            </div>
    </div>
  )
}

export default Folder