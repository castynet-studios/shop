import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 10px;
  background: rgba(255, 255, 255, 0.1);
`;

export const PageWrap = styled.div`
  background-color: rgb(228 228 228 / 95%);
  padding: 10px 25px;
  width: fit-content;
  box-shadow: 0 0 1px 1px rgb(156 39 176 / 24%), 0 0 1px 1px rgb(156 39 176 / 24%);
  border-radius: 2px;
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  margin: 0 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  outline: none;
  border: none;
  border-radius: 2px;
  background-color: ${(props) => (props.active ? "var(--purple)" : "aliceblue")};
  font-weight: 600;
  color: ${(props) => (props.active ? "var(--white)" : "var (--cs-deep-blue)")};
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "var(--purple)" : "var(--pink)")};
    color: var(--white);
    cursor: ${(props) => (props.active ? "not-allowed" : "pointer")};
  }
`;
