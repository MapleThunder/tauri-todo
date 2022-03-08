import styled from "@emotion/styled";
import { FaPizzaSlice } from "react-icons/fa";

export function Header() {
  return (
    <HeaderStyles className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Tauri Todo Logo" />
        </div>
        <div className="settings">
          <ul>
            <li className="add" data-testid="quick-add-task-action">
              +
            </li>
            <li className="dark-mode" data-testid="dark-mode-action">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  border-bottom: solid 1px var(--primary);
  background-color: var(--primary);
  transition: height 200ms ease-in;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  height: 44px;
  z-index: 400;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 900px) {
    padding: 0 10px;
  }

  nav {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-width: 922px;
    margin: auto;
    height: 44px;

    p,
    li {
      color: var(--white);
    }

    div {
      &.logo {
        padding-left: 8px;
        grid-area: 1/1;
      }

      img {
        width: 30px;
      }

      &.settings {
        grid-area: 1/2;
        text-align: right;

        ul {
          float: right;

          li {
            display: flex;
            align-items: center;
            justify-content: center;
            list-style-type: none;
            cursor: pointer;
            width: 30px;
            height: 30px;
            text-align: center;
            vertical-align: middle;
            float: left;

            &:hover {
              border-radius: 3px;
              background-color: rgba(255, 255, 255, 0.2);
            }

            &.add {
              margin-right: 15px;
              font-size: 30px;
            }

            &.dark-mode svg {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
`;
