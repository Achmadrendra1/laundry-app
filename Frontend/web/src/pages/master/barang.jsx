import React, { useState } from 'react'
import Dashboard from '../../components/layouts'
import { Modal, Button, Space, Table, Input, Form, Select } from 'antd'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modals from '../../components/modals'
import { ExclamationCircleFilled } from '@ant-design/icons';

const Barang = () => {
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
      title: 'Nama Barang',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Satuan',
      dataIndex: 'username',
      key: 'username',
      responsive: ['md'],
    },
    {
      title: 'Harga',
      dataIndex: 'role',
      key: 'role',
      responsive: ['md'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <FaEdit className='cursor-pointer text-blue-600' />
          <FaTrash className='cursor-pointer text-red-600' onClick={showDeleteConfirm} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      nama: 'Jas Setelan Pria',
      username: 'Setelan',
      role: '25000'
    },
    {
      key: '2',
      nama: 'Karpet Tebal',
      username: 'Meter',
      role: '10000'
    },
    {
      key: '3',
      nama: 'Jas Pria',
      username: 'Pcs',
      role: '15000'
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
      <Modals title={'Tambah Barang'} handleOpen={show} handleClose={close}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Nama Barang"
            name={"nama"}
            rules={[{ required: true, message: "Nama Barang Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Nama Barang" />
          </Form.Item>
          <Form.Item
            label="Satuan"
            name={"satuan"}
            rules={[
              { required: true, message: "Satuan Tidak Boleh Kosong" },
            ]}
          >
            <Select
              allowClear
              placeholder="Pilih Satuan Barang"
            >
              <Option value="Setelan">Setelan</Option>
              <Option value="Meter">Meter</Option>
              <Option value="Pcs">Pcs</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Harga"
            name={"harga"}
            rules={[{ required: true, message: "Harga Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Harga" />
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
          <h1 className='text-lg font-semibold'>Jenis Barang</h1>
          <Button className='bg-blue-500 text-white' onClick={() => setShow(true)}>Tambah</Button>
        </div>
        <Table columns={columns} dataSource={data} bordered />
      </div>
    </Dashboard>
  )
}

export default Barang