import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  /* background-color: ${({ theme }) => theme.colors.secondary100}; */
`

export const Header = styled.View`
  width: 100%;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight()} + 26%;
  margin-bottom: 42px;
`