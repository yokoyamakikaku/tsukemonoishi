'use client'

import { useState } from "react"

type Position = {
  x: number
  y: number
}

function positionToStyle (position: Position) {
  return {
    top: `${position.y}px`,
    left: `${position.x}px`,
  }
}

function Stone ({
  label, position
}:{
  label: string
  position: Position
}) {
  return (
    <div
      className="absolute w-8 h-8 bg-gray-300 flex items-center justify-center rounded-md shadow-sm"
      style={positionToStyle(position)}>
      <span>{label}</span>
    </div>
  )
}

const TsukeMonoIshi = () => {
  const [firstPosition, setFirstPosition] = useState<Position>({ x: 0, y: 0 })
  const [secondPosition, setSecondPosition] = useState<Position>({ x: 0, y: 0 })
  const [thirdPosition, setThirdPosition] = useState<Position>({ x: 0, y: 0 })

  const [disabled, setDisabled] =  useState<boolean>(false)

  const shuffle = () => {
    setDisabled(true);
    const finalFirstPosition = { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) };
    const finalSecondPosition = { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) };
    const finalThirdPosition = { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 100) };

    const steps = 50;
    const firstDx = (finalFirstPosition.x - firstPosition.x) / steps;
    const firstDy = (finalFirstPosition.y - firstPosition.y) / steps;
    const secondDx = (finalSecondPosition.x - secondPosition.x) / steps;
    const secondDy = (finalSecondPosition.y - secondPosition.y) / steps;
    const thirdDx = (finalThirdPosition.x - thirdPosition.x) / steps;
    const thirdDy = (finalThirdPosition.y - thirdPosition.y) / steps;

    let currentStep = 0;

    const animate = () => {
      if (currentStep < steps) {
        setFirstPosition(prev => ({ x: prev.x + firstDx, y: prev.y + firstDy }));
        setSecondPosition(prev => ({ x: prev.x + secondDx, y: prev.y + secondDy }));
        setThirdPosition(prev => ({ x: prev.x + thirdDx, y: prev.y + thirdDy }));
        currentStep++;
      } else {
        setFirstPosition(finalFirstPosition);
        setSecondPosition(finalSecondPosition);
        setThirdPosition(finalThirdPosition);
        setDisabled(false);
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(animate, 5);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-4 rounded-xl shadow-xl flex flex-col gap-2">
        <div className="w-72 h-72 relative bg-gray-50 rounded-md">
          <Stone label="漬" position={firstPosition} />
          <Stone label="物" position={secondPosition} />
          <Stone label="石" position={thirdPosition} />
        </div>
        <div className="flex gap-2">
          <button onClick={shuffle} className="bg-slate-500 hover:opacity-90 active:bg-slate-600 border border-slate-600 w-24 h-8 rounded-md grow"></button>
          <button onClick={shuffle} className="bg-slate-500 hover:opacity-90 active:bg-slate-600 border border-slate-600 w-24 h-8 rounded-md grow"></button>
        </div>
        <input className="w-72" disabled={disabled} type="range" value={firstPosition.x} min={0} max={100} onChange={(event) => setFirstPosition(position => ({ ...position, x: +event.target.value}))} />
        <input className="w-72" disabled={disabled} type="range" value={firstPosition.y} min={0} max={100} onChange={(event) => setFirstPosition(position => ({ ...position, y: +event.target.value}))} />
        <input className="w-72" disabled={disabled} type="range" value={secondPosition.x} min={0} max={100} onChange={(event) => setSecondPosition(position => ({ ...position, x: +event.target.value}))} />
        <input className="w-72" disabled={disabled} type="range" value={secondPosition.y} min={0} max={100} onChange={(event) => setSecondPosition(position => ({ ...position, y: +event.target.value}))} />
        <input className="w-72" disabled={disabled} type="range" value={thirdPosition.x} min={0} max={100} onChange={(event) => setThirdPosition(position => ({ ...position, x: +event.target.value}))} />
        <input className="w-72" disabled={disabled} type="range" value={thirdPosition.y} min={0} max={100} onChange={(event) => setThirdPosition(position => ({ ...position, y: +event.target.value}))} />
      </div>
    </div>
  )
}

export default TsukeMonoIshi
