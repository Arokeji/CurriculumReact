import './Header.scss';
import { Flex, Text, Image } from '@chakra-ui/react'

const Header = () => {
    return (
        <Flex
            alignItems='center'
        >
            <Flex 
                direction='column'
                margin='10px'
            >
                <Text 
                    fontSize='4xl' 
                    as='b'
                >
                    ¡Hola! Me llamo
                </Text>
                <Text 
                    fontSize='3xl' 
                    as='b'
                    bgGradient='linear(to-l, #7428CA, #FF0080)'
                    bgClip='text'
                >
                    Humberto Casanova
                    </Text>
                <Text 
                    color='grey'
                    fontSize='xl'
                >
                    Soy Desarrollador Web FullStack
                </Text>
            </Flex>
            <Image
                margin='10px'
                boxSize='200px'
                borderRadius='20px'
                src='https://media.licdn.com/dms/image/D4D03AQEDDlPdE1JICw/profile-displayphoto-shrink_400_400/0/1671442467913?e=1684368000&v=beta&t=ymppVzj6wCXfcsp5e1adTgujUus8utfGJfDEJGKlaZs'
                alt="Profile"
            />
        </Flex>
    );
}

export default Header;