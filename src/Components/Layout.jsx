import React from 'react'
import styled from 'styled-components'

function Layout({children}) {
  return (
    <Main>
        {children}
    </Main>
  )
}

export default Layout


const Main = styled.main`
min-height: 75vh;
padding: 2em 0;
`