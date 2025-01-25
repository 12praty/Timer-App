import styled from "styled-components";
import Tags from "./components/Tags";
import Timer from "./components/Timer/Timer";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { FaCog } from "react-icons/fa";
function App() {
  const [isOpen,setIsOpen]=useState(false);

  const onClose=()=>{
    setIsOpen(false);
  }
  const onOpen=()=>{
    setIsOpen(true);
  }
  return (
    <>
       <Modal isOpen={isOpen} onClose={onClose}/>
      <StyledH1>Timer</StyledH1>
      <Tags/>
      <Timer/>
      <CogIcon onClick={onOpen}> {/* Open modal on click */}
        <FaCog />
      </CogIcon>
   
    </>
  );
}
export default App;

const StyledH1=styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`


const CogIcon=styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;