import React from 'react'
import {Ibutton } from "./types"

import { ButtonContainer} from './styles'
const Button = ({title, variant="primary", onClick}: Ibutton) => {
  return (
      <ButtonContainer variant={variant} onClick={onClick}> 
          {title}

    </ButtonContainer >
  )
}

export { Button }