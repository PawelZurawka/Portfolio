import React from 'react';
import {
  CloseIconLink,
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormTextArea,
  FormWrap,
  Icon,
  Text,
} from './ContactFormElements';
import { CgClose } from 'react-icons/cg';

export const ContactForm = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Lorem</Icon>
          <FormContent>
            <Form action="#">
              <CloseIconLink to="/">
                <CgClose />
              </CloseIconLink>
              <FormH1>Napisz do mnie</FormH1>
              <FormLabel htmlFor="for">Twoje imię</FormLabel>
              <FormInput
                type="text"
                required
              />
              <FormLabel htmlFor="for">Twój e-mail</FormLabel>
              <FormInput
                type="email"
                required
              />
              <FormLabel htmlFor="for">Wiadomość</FormLabel>
              <FormTextArea
                type="password"
                required
              />
              <FormButton type="submit">Wyślij</FormButton>
              <Text>Lorem ipsum</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
