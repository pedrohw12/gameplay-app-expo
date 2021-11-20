import styled from "styled-components/native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

export const Icon = styled(MaterialCommunityIcons)`
  color: ${({theme}) => theme.colors.heading};
  font-size: 24px;
`