import React, { useState } from 'react'
import Dashboard from '../../components/layouts'
import { Modal, Button, Tag, Space, Table, Input, Form, Select, Popconfirm } from 'antd'
import { FaEye, FaTrash, FaRegQuestionCircle } from 'react-icons/fa'
import Modals from '../../components/modals'
import { ExclamationCircleFilled } from '@ant-design/icons';

const Users = () => {
    const { confirm } = Modal;
    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this user?',
            icon: <ExclamationCircleFilled />,
            // content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',

        },
        {
            title: 'Nama',
            dataIndex: 'nama',
            key: 'nama',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            responsive: ['md'],
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            responsive: ['md'],
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <FaEye className='cursor-pointer text-blue-600' />
                    <FaTrash className='cursor-pointer text-red-600' onClick={showDeleteConfirm} />
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            nama: 'John Wick',
            username: 'johnwick@gmail.com',
            role: 'admin'
        },
        {
            key: '2',
            nama: 'John Doe',
            username: 'johndoe@gmail.com',
            role: 'kasir'
        },

    ];
    const { Option } = Select;
    const [show, setShow] = useState()
    const close = () => {
        setShow(false);
    };
    const onFinish = (data) => {
        console.log("Success:", data);
        // dispatch(doAddUsers(data));
        setShow(false)
    };
    return (
        <Dashboard>
            <Modals title={'Tambah Users'} handleOpen={show} handleClose={close}>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nama"
                        name={"nama"}
                        rules={[{ required: true, message: "Nama Tidak Boleh Kosong" }]}
                    >
                        <Input placeholder="Masukkan Nama" />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                        name={"username"}
                        rules={[{ required: true, message: "Username Tidak Boleh Kosong" }]}
                    >
                        <Input placeholder="Masukkan Username" />
                    </Form.Item>
                    <Form.Item
                        label="Role"
                        name={"role"}
                        rules={[
                            { required: true, message: "Role Tidak Boleh Kosong" },
                        ]}
                    >
                        <Select
                            allowClear
                            placeholder="Pilih Role User"
                        >
                            <Option value="Admin">Admin</Option>
                            <Option value="Kasir">Kasir</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label=" " colon={false}>
                        <div className="flex gap-2 justify-end">
                            <Button className='bg-red-500 text-white' onClick={() => setShow(false)}>
                                Cancel
                            </Button>

                            <Button htmlType="submit" className='bg-sky-500 text-white'>Save</Button>

                        </div>
                    </Form.Item>
                </Form>
            </Modals>
            <div>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-lg font-semibold'>Users</h1>
                    <Button className='bg-blue-500 text-white' onClick={() => setShow(true)}>Tambah</Button>
                </div>
                <Table columns={columns} dataSource={data} bordered />
            </div>
        </Dashboard>
    )
}

export default Users