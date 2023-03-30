import React, { useState } from 'react'
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

const element = (
  <React.Fragment>
    <span>Hello</span>
    <span>World</span>
  </React.Fragment>
);

const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`;

const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
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

const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export default ModelSelection