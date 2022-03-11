import React from 'react'
import styled, { keyframes } from 'styled-components'

const ripple = keyframes`
from {
  top: 28px;
  left: 28px;
  width: 0;
  height: 0;
  opacity: 1;
}
to {
  top: -1px;
  left: -1px;
  width: 58px;
  height: 58px;
  opacity: 0;
}`

const LoaderWrap = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`
const RippleDiv = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
`
const Div1 = styled.div`
    position: absolute;
    opacity: 1;
    border: 4px solid #4caf50;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`

const Loader = () => {
    return (
        <LoaderWrap>
            <RippleDiv>
                <Div1></Div1>
            </RippleDiv>
        </LoaderWrap>
    )
}

export default Loader
