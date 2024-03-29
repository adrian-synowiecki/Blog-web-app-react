import styled from "styled-components/macro";
import { TextField } from "formik-material-ui";

export const TextFieldContainer = styled(TextField)`
  width: 100%;
  font-size: 70px;
  label {
    font-size: 1.4rem;
    background-color: var(--white);
    padding-right: 1rem;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #bdc3c7;
    }
    &:hover fieldset {
      border-color: var(--blue-2);
    }
    &.Mui-focused fieldset {
      border: 2px solid var(--blue-2);
    }
  }
  label.Mui-focused {
    color: var(--blue-2);
  }
  .MuiOutlinedInput-input {
    font-size: 15px;
  }
`;
