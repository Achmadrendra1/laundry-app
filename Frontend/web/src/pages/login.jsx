import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#DBE2EF]">
            <div className="bg-[#3F72AF] p-10 rounded-xl shadow-lg sm:w-auto w-80">
                <img src='images/logo.svg' alt='logo' className='w-auto mb-12' />
                {/* <h1 className="text-2xl font-bold text-center mb-6">Login</h1> */}
                <Form
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input placeholder="Username" size='large' className="" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder="Password" size='large' className="" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            className="w-full bg-[#112D4E] text-white h-10 border-0"
                        >
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            
        </div>
    );
}

export default Login