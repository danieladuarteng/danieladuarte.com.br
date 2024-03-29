import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonLink = styled(Link)`
  color: ${prop => prop.color};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
`

export const ButtonContainer = styled.button`
  color: ${prop => prop.color};
  background: ${prop => prop.background};
  border-radius: 20px;
  padding: 20px 40px;
  border: 1px solid #fff;
  margin-top: ${prop => prop.marginTop ? '20px' : '0px'};
  cursor: pointer;
`