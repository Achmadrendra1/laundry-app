import React, { useState } from 'react'
import Dashboard from '../components/layouts'
import { Modal, Button, Space, Table, Input, Form, Select } from 'antd'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Modals from '../components/modals'
import { ExclamationCircleFilled } from '@ant-design/icons';


const Pelanggan = () => {
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this?',
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
      title: 'No. Telp',
      key: 'telp',
      responsive: ['md'],
      render: (_, record)=>{
        const telp = record.telp
        return <p>{telp && `+62${telp}`}</p>
      }
    },
    {
      title: 'Jenis Kelamin',
      dataIndex: 'jenis_kelamin',
      key: 'jk',
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
      nama: 'John Wick',
      telp: '83876611125',
      jenis_kelamin : 'Laki-Laki'
    },
    {
      key: '2',
      nama: 'John Wick',
      telp: '83876611125',
      jenis_kelamin: 'Laki-Laki'
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
      <Modals title={'Tambah Pelanggan'} handleOpen={show} handleClose={close}>
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
            label="No. Telp"
            name={"telp"}
            rules={[{ required: true, message: "No. Telp Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan No. Telp" prefix='+62'/>
          </Form.Item>
          <Form.Item
            label="Jenis Kelamin"
            name={"jenis_kelamin"}
            rules={[
              { required: true, message: "Jenis Kelamin Tidak Boleh Kosong" },
            ]}
          >
            <Select
              allowClear
              placeholder="Pilih Jenis Kelamin"
            >
              <Option value="L">Laki-Laki</Option>
              <Option value="P">Perempuan</Option>
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
          <h1 className='text-lg font-semibold'>Pelanggan</h1>
          <Button className='bg-blue-500 text-white' onClick={() => setShow(true)}>Tambah</Button>
        </div>
        <Table columns={columns} dataSource={data} bordered />
      </div>
      </Dashboard>
  )
}

export default Pelanggan