import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { StateContext } from "./StateProvider";

const Tags = () => {
  const {activeTag, setActiveTag} = useContext(StateContext);
  const handleTagClick = (index) => {
    setActiveTag(index);
  };
  return (
    <TagContainers>
      {["Work", "Short Break", "Long Break"].map((tag, i) => (
        <Tag onClick={()=>handleTagClick(i)}
         activeTag={activeTag===i}
         key={i}>
          {tag}
        </Tag>
      ))}
    </TagContainers>
  );
};
export default Tags;

const TagContainers = styled.div`
  background-color: #08002b;
  height: 5rem;
  width: 40rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Tag = styled.button`
  all: unset;
  height: 4rem;
  text-align: center;
  border-radius: 5rem;
  flex: 1;
  font-size: 2 rem;

  ${({ activeTag }) =>
    activeTag &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
    `}
`;
