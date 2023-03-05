import {useRef, useEffect} from 'react'

const Canvas = ({name})=>{
    const canvasRef = useRef(null)
    console.log(`canvas init name is ${name}`)
    useEffect(()=>{
        const cvs = canvasRef.current
        if(!cvs) {
            console.error(`Invalid canvas`)
            return;
        }
        let ctx = cvs.getContext('2d')
        ctx.fillStyle = 'blue'
        ctx.fillRect(0,0,100,100)
    },[])
    let currentColor = null
    function clickHandler(){
        const cvs = canvasRef.current
        let ctx = cvs.getContext('2d')
        console.log(`currentColor ${currentColor}`)
        if(currentColor == '#0000ff') {
            ctx.fillStyle = 'red'
        }else{
            ctx.fillStyle = 'blue'
        }
        currentColor = ctx.fillStyle
        ctx.fillRect(0,0,100,100)
    }
    return (
        <div>
        <canvas className="w-auto h-auto border-4 border-red-600" ref={canvasRef}></canvas>
        <button className="border-4 w-20 h-20 border-red-600" onClick={clickHandler}>click me</button>
        </div>
    )
}

export default Canvas
