import { Button, HStack ,VStack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4"} bgColor="blackAlpha.900" shadow={"base"}>
       <Button color={"white"} variant={"unstyled"}>
        <Link to="/">Home</Link>
       </Button>
       <Button color={"white"} variant={"unstyled"}>
        <Link to="/coins">Coins</Link>
       </Button>
       <Button color={"white"} variant={"unstyled"}>
        <Link to="/exchanges">Exchanges</Link>
       </Button>
    </HStack>
  )
}

export default Header