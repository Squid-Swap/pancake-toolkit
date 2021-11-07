import styled from "styled-components";
import { Flex } from "../Box";

const StyledSubMenuItems = styled(Flex)<{ isDark: boolean }>`
  background-color: ${({ isDark }) => (isDark ? "#262626" : "#fff")};
  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledSubMenuItems;
