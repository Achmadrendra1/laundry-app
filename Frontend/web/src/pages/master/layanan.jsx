import React, { useState } from 'react'
import Dashboard from '../../components/layouts'
import { Modal, Button, Space, Table, Input, Form, Select, Row, Col } from 'antd'
import { FaEye, FaTrash, FaPlus, FaTimes } from 'react-icons/fa'
import Modals from '../../components/modals'
import { ExclamationCircleFilled } from '@ant-design/icons';

const Layanan = () => {
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
  const [add, setAdd] = useState(false)
  const columns = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',

    },
    {
      title: 'Nama Layanan',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <FaEye className='cursor-pointer text-blue-600' onClick={() => setAdd(!add)} />
          <FaTrash className='cursor-pointer text-red-600' onClick={showDeleteConfirm} />
        </Space>
      ),
    },
  ];
  const columnsPaket = [
    {
      title: 'No',
      dataIndex: 'key',
      key: 'key',

    },
    {
      title: 'Nama Paket',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Estimasi',
      dataIndex: 'estimasi',
      key: 'estimasi',
      responsive: ['md'],
    },
    {
      title: 'Harga',
      dataIndex: 'harga',
      key: 'harga',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <FaEye className='cursor-pointer text-blue-600' onClick={()=>setAdd(!add)}/> */}
          <FaTrash className='cursor-pointer text-red-600' onClick={showDeleteConfirm} />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      nama: 'Cuci Kiloan',
    },
    {
      key: '2',
      nama: 'Cuci Satuan',
    },
    {
      key: '3',
      nama: 'Setrika',
    },
  ];
  const dataPaket = [
    {
      key: '1',
      nama: 'Reguler',
      harga: '7000',
      estimasi: '3 Hari',
    },
    {
      key: '2',
      nama: 'Express',
      harga: '10000',
      estimasi: '1 Hari',
    },
   
  ];
  const { Option } = Select;
  const [show, setShow] = useState()
  const [showPaket, setShowPaket] = useState()
  const close = () => {
    setShow(false);
    setShowPaket(false)
  };
  const onFinish = (data) => {
    console.log("Success:", data);
    // dispatch(doAddUsers(data));
    setShow(false)
    setShowPaket(false)
  };
  return (
    <Dashboard>
      <Modals title={'Tambah Layanan'} handleOpen={show} handleClose={close}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Nama"
            name={"nama"}
            rules={[{ required: true, message: "Nama Layanan Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Nama Layanan" />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <div className="flex gap-2 justify-end">
              <Button className='bg-red-500 text-white' onClick={close}>
                Cancel
              </Button>

              <Button htmlType="submit" className='bg-sky-500 text-white'>Save</Button>

            </div>
          </Form.Item>
        </Form>
      </Modals>
      <Modals title={'Tambah Paket'} handleOpen={showPaket} handleClose={close}>
        <Form
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Nama Paket"
            name={"nama"}
            rules={[{ required: true, message: "Nama Paket Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Nama Paket" />
          </Form.Item>
          <Form.Item
            label="Estimasi"
            name={"estimasi"}
            rules={[{ required: true, message: "Estimasi Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Estimasi (Dalam Hari)" />
          </Form.Item>
          <Form.Item
            label="Harga"
            name={"harga"}
            rules={[{ required: true, message: "Harga Tidak Boleh Kosong" }]}
          >
            <Input placeholder="Masukkan Harga Paket" />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <div className="flex gap-2 justify-end">
              <Button className='bg-red-500 text-white' onClick={close}>
                Cancel
              </Button>

              <Button htmlType="submit" className='bg-sky-500 text-white'>Save</Button>

            </div>
          </Form.Item>
        </Form>
      </Modals>
      <div>
        <Row gutter={32}>
          <Col xs={24} sm={add ? 12 : 24}>
            <div className='flex justify-between items-center mb-4'>
              <h1 className='text-lg font-semibold'>Layanan</h1>
              <Button className='bg-blue-500 text-white' onClick={() => setShow(true)}>
                <Space>
                  <FaPlus /> Layanan
                </Space>
              </Button>
            </div>
            <Table columns={columns} dataSource={data} bordered />
          </Col>
          <Col xs={24} sm={12} className={`${!add ? 'hidden' : ''}`}>
            <div>
              <div className='flex justify-between items-center mb-4'>
                <h1 className='text-lg font-semibold text-ellipsis max-w-[140px] sm:max-w-full'>Paket Layanan : Cuci Kiloan</h1>
                <div className='flex-col justify-end flex sm:flex-row'>
                  <Button className='bg-blue-500 text-white' onClick={() => setShowPaket(true)}>
                    <Space>
                      <FaPlus /> Paket
                    </Space>
                  </Button>
                  <Button className='bg-red-500 text-white' onClick={() => setAdd(false)}>
                    <Space>
                      <FaTimes /> CLose
                    </Space>
                  </Button>
                </div>
              </div>
              <Table columns={columnsPaket} dataSource={dataPaket} bordered />
            </div>
          </Col>
        </Row>
      </div>
    </Dashboard>
  )
}

export default Layanan