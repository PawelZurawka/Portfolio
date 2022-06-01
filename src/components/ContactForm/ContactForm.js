import React from 'react';
import {
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

export const ContactForm = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Lorem</Icon>
          <FormContent>
            <Form action="#">
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
