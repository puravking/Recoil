// import { useContext, useMemo, useState } from "react"
// import { CountContext } from "./context";

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useMemo } from "react";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
    
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  // let isEven = useRecoilValue(evenSelector);
  const count = useRecoilValue(countAtom);
  const isEven = useMemo(()=>{return (count&1)},[count])
  return <div>
    {isEven ? "It is even" : "it is odd"}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
