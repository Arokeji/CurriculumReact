import './Contact.scss';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaMailBulk, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <ButtonGroup gap='4'>
                <Button colorScheme='gray' borderRadius='40px'><FaLinkedin /></Button>
                <Button colorScheme='gray' borderRadius='40px'><FaGithub /></Button>
                <Popover>
                    <PopoverTrigger>
                        <Button colorScheme='gray' borderRadius='40px'><FaMailBulk /></Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow bg='red.500' />
                        <PopoverHeader>E-mail</PopoverHeader>
                        <PopoverBody>Myemail@hotmail.com</PopoverBody>
                    </PopoverContent>
                </Popover>
                <Popover>
                    <PopoverTrigger>
                        <Button colorScheme='gray' borderRadius='40px'><FaPhone /></Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow bg='red.500' />
                        <PopoverHeader>Phone</PopoverHeader>
                        <PopoverBody>666554433</PopoverBody>
                    </PopoverContent>
                </Popover>
            </ButtonGroup>
        </>
    );
}

export default Contact;