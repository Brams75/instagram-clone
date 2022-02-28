import React from 'react';
import { Form, Input, Button } from 'antd';
import { FacebookOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Container, { Ou, Facebook } from './styles';

function LoginForm() {
  return (
    <Container>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          placeholder="Num. téléphone, nom d’utilisateur ou e-mail"
          rules={[
            {
              required: true,
              message: "Veuillez saisir votre nom d'utilisateur !",
            },
          ]}
        >
          <Input placeholder="Num. téléphone, nom d’utilisateur ou e-mail" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Veuillez saisir votre mot de passe !',
            },
          ]}
        >
          <Input.Password placeholder="Mot de passe" />
        </Form.Item>

        <Button className="submit-button" type="primary" htmlType="submit">
          Connexion
        </Button>
      </Form>

      <Ou>
        <div className="line" />
        <div className="text">ou</div>
        <div className="line" />
      </Ou>
      <Facebook>
        <FacebookOutlined />
        <span>Se connecter avec Facebook</span>
      </Facebook>
      <Link href="/#" passHref>
        <a href="replace" className="forget-password">
          Mot de passe oublié ?
        </a>
      </Link>
    </Container>
  );
}

export default LoginForm;
