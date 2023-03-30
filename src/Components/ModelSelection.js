import React from 'react'
import styled from "styled-components"
import "../Styles/ModelSelection.css"

export function ModelSelection(props) {
  return (
    <div className="top-section">
      <DropdownWrapper action={props.action} classname="dropdown">
        <div htmlFor="services" className='dropdown-header'>
          {props.formLabel}
        </div>
        <element/>
        <StyledSelect id="services" name="services" className='dropdown-content'>
          {props.children}
        </StyledSelect>
      </DropdownWrapper>
    </div>
  )
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}

const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StyledSelect = styled.select`
  // max-width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export default ModelSelection