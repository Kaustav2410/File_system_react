import {create} from 'zustand';
import {fileStructure} from '../constants/fileStructure';
export const useFolders = create((set)=>({
    folderSystem : fileStructure,
    removeAllFolders : ()=>(set({folderSystem:[]})),
}))

export const usefileSystemPadding = create((set)=>({
    Padding:{
        intial_horizontal_spacing:5,
        intial_vertical_padding:5,
        increment:4
    }
}))