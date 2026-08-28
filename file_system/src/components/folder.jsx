import React from 'react'

const Folder = ({folder}) => {
  return (
    <div>
        <h3>{folder.name}</h3>
        {
            folder.children && folder.children.map((child,index)=>{
                if(child.type === 'folder'){
                    return <Folder key={index} folder={child}/>
                }
                else{
                    return <p className="text-blue-400" key={index}>{child.name}</p>
                }
            })
        }
    </div>
  )
}

export default Folder