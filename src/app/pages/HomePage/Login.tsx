import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  // Container,
  // Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  // styled,
  VStack,
  // chakra,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required('Please Enter your password'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    ),
});

export default function Login() {
  const history = useHistory();
  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },

  //   validationSchema: { schema },
  //   onSubmit: values => {
  //     console.log(JSON.stringify(values));
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  return (
    <>
      <Heading as="h2" mt="80px" mb="40px" fontWeight="bold" textAlign="center">
        Let’s get started
      </Heading>
      <VStack>
        <Box
          mt={3}
          bg="white"
          align="center"
          justify="center"
          // w="410px"
          boxShadow="lg"
          py="35px"
          display={{ md: 'flex' }}
          w={[250, 400, 500]}
        >
          <Box m={3} style={{ margin: '0 auto' }} w={[170, 300, 400]}>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={schema}
              onSubmit={values => {
                console.log(JSON.stringify(values));
                // alert(JSON.stringify(values, null, 2));
                history.push('/home');
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <Form onSubmit={handleSubmit}>
                  <VStack align="flex-start">
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <FormLabel opacity={0.3}>Email or Username</FormLabel>
                      <Field
                        as={Input}
                        id="email"
                        name="email"
                        type="email"
                        // onChange={handleChange}
                        // value={values.email}
                        style={{
                          border: 'none',
                          borderBottom: '1px solid lightgray',
                          opacity: '0.6',
                        }}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <FormLabel opacity={0.3}>Password</FormLabel>
                      {/* <Input /> */}
                      <Field
                        as={Input}
                        id="password"
                        name="password"
                        type="password"
                        // onChange={formik.handleChange}
                        // value={formik.values.password}
                        style={{
                          border: 'none',
                          borderBottom: '1px solid lightgray',
                          opacity: '0.6',
                        }}
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    <Button
                      type="submit"
                      variant="login_button"
                      size="lg"
                      style={{ marginTop: '35px', marginBottom: '15px' }}
                    >
                      Login
                    </Button>
                    <Link
                      color="#51a8d1"
                      href="/home"
                      textAlign="center"
                      w="100%"
                      fontSize="sm"
                      colorScheme="#51a8d1"
                    >
                      Forgot password?
                    </Link>
                  </VStack>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        <Flex pt="35px" pb="90px">
          <Text color="#242a41" opacity={0.4}>
            Don’t have an account yet?
          </Text>
          <Link color="#51a8d1" ml={1}>
            Sign Up
          </Link>
        </Flex>
      </VStack>
    </>
  );
}
