import { handleMouseMove } from '@/helpers/mousePos';
import React, { useEffect,useRef } from 'react'

function Blob() {
    const blobRef = useRef();
    useEffect(()=>{
        window.addEventListener('mousemove', (event)=>{
            console.log(blobRef.current);
            handleMouseMove(blobRef.current, event);
        });
      },[])
  return (
    <div className={`h-full w-full overflow-hidden absolute z-0`}>
        <div className={`absolute h-[100px] aspect-square border-r-[50%] bg-white top-10 left-10 blob`} ref={blobRef}></div>
        <div className={`h-full w-full backdrop-blur-[150px] absolute z-2`}></div>
    </div>
  )
}

export default Blob