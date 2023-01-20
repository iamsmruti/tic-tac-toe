import React, { useState } from 'react'
import { Stack, Typography, Box } from '@mui/material'
import BackButton from '../components/BackButton'
import { customInput } from '../styles/customInput'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { url } from '../constants/url'

const NewGame = () => {
  const navigate = useNavigate()
  const [rival, setRival] = useState('')
  const handleClick = () => {
    axios.post(`${url}/api/game/new`, {
      rival: rival
    }, {
      withCredentials: true
    }).then((res) => {
      navigate('/home')
      console.log(res.data)
    }).catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <Stack sx={{height: '100%'}}>
      <BackButton path='/home'/>

      <Stack sx={{px: 2, py: 1, height: '100%'}} >
        <Stack sx={{mt: 2}}>
          <Typography sx={{fontSize: 17, fontWeight: 600}}>Start a new game</Typography>
          <Typography sx={{fontSize: 32, fontWeight: 600, mt: 0.5}}>Whom do you want</Typography>
          <Typography sx={{fontSize: 32, fontWeight: 600, mt: -1}}>to play with?</Typography>
        </Stack>

        <Stack sx={{mt: 3}}>
          <Stack sx={{mt: 2.3}}>
            <Typography sx={{fontSize: 17, fontWeight: 600}}>Email</Typography>
            <input onChange={(e) => setRival(e.target.value)} autoComplete='false' type={"email"} placeholder='Type your email here' style={customInput}></input>
          </Stack>
        </Stack>

        <Stack sx={{mt: 'auto'}}>
          <CustomButton onClick={handleClick}>Start game</CustomButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default NewGame