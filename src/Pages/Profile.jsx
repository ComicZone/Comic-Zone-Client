import React from 'react'
import styled from 'styled-components'
import Sidebar from '../Components/Profile/Sidebar'
import Dashboard from '../Components/Profile/Dashboard'

const Profile = () =>{
  return (
    <Container>
        <Sidebar/>
        <Dashboard/>
    </Container>
  )
}

export default Profile

const Container = styled.section`
height: 90vh;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 2em;
`