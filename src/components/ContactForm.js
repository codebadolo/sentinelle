import React from 'react';
import { Form, Input, Button, message } from 'antd';

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Ici, tu pourras appeler ton API backend
    console.log('Form values:', values);
    message.success('Message envoyé avec succès !');
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: 'auto' }}
    >
      <Form.Item
        label="Nom"
        name="nom"
        rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
      >
        <Input placeholder="Votre nom" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Veuillez entrer votre email' },
          { type: 'email', message: 'Email invalide' },
        ]}
      >
        <Input placeholder="Votre email" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: 'Veuillez entrer votre message' }]}
      >
        <Input.TextArea rows={4} placeholder="Votre message" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Envoyer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
