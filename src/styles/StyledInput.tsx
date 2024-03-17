import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  border-color: #252527;
  border: 1px solid #4A4A4A4A;
  padding: 7px 15px;

  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.5em;

  &::placeholder {
    text-transform: capitalize;
  }

  &:focus-visible {
    outline: 1px solid red;
  }
`