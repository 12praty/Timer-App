import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Clock from "./Clock/Clock"
import { StateContext } from "../../StateProvider";
const CircularProgess = () => {
    
  const {progress,setProgess,time,initTime}=useContext(StateContext)
    useEffect(()=>{
        setProgess(time/(initTime/100))
    },[setProgess,time])
  return (
    <OuterCircle progress={progress}>
      <InnerCircle >
        <Clock/>
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgess;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  

  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
     ${(props)=>props.theme.colors.primary} ${({progress})=>progress}%,transparent ${({progress})=>progress}%);
`;
const InnerCircle = styled.div`
  width: 33rem;
  height: 33rem;
  background-color: ${(props)=>props.theme.colors.secondary};

  border-radius: 50%;
  display: grid;
  place-items: center;
`;
