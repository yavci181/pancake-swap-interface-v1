import React from 'react'
import styled from 'styled-components'
import { Text, ButtonMenu, ButtonMenuItem, Button, HelpIcon, Link } from '@pancakeswap-libs/uikit'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
 <Wrapper>
      <Text bold mr="16px">
        Source:
      </Text>
      <Button
        variant="subtle"
        as={Link}
        href="https://github.com/yavci181/pancake-swap-interface-v1"
        endIcon={<InfoIcon color="white" />}
        scale="sm"
        ml="16px"
        target="_blank"
      >
        Github
      </Button>
    </Wrapper>
  )
}

export default VersionBar
