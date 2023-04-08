import React, { useState } from 'react'
import Dashboard from '../../components/layouts'
import { Modal, Button, Space, Table, Input, Form, Select } from 'antd'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modals from '../../components/modals'
import { ExclamationCircleFilled } from '@ant-design/icons';

const Bayar = () => {
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
      title: 'Nama Dompet',
      dataIndex: 'dompet',
      key: 'username',
      responsive: ['md'],
    },
    {
      title: 'No. Dompet',
      dataIndex: 'no_dompet',
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
      nama: 'Cash',
      dompet: '-',
      no_dompet: '-'
    },
    {
      key: '2',
      nama: 'QRIS DANA',
      dompet: 'Dana Bisnis',
      no_dompet: 'xxxxxxxx2105'
    },
    {
      key: '3',
      nama: 'BCA',
      dompet: 'BCA',
      no_dompet: '4723894914'
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
      <Modals title={'Tambah Jenis Bayar'} handleOpen={show} handleClose={close}>
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
            label="Nama Dompet"
            name={"nama_dompet"}
            rules={[{ required: true, message: "Nama Dompet Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Nama Dompet" />
          </Form.Item>
          <Form.Item
            label="No Dompet"
            name={"no_dompet"}
            rules={[{ required: true, message: "No. Dompet Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan No. Dompet" />
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
          <h1 className='text-lg font-semibold'>Jenis Pembayaran</h1>
          <Button className='bg-blue-500 text-white' onClick={() => setShow(true)}>Tambah</Button>
        </div>
        <Table columns={columns} dataSource={data} bordered />
      </div>
      </Dashboard>
  )
}

export default Bayar