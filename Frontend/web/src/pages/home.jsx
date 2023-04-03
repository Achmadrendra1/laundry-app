import React from 'react'
import Dashboard from '../components/layouts'
import { Card, Col, Row, Input, Table, Tag, Space } from 'antd'
import { RiBillLine } from 'react-icons/ri'
import { FaMoneyBillWave, FaUsers, FaEye, FaTrash } from 'react-icons/fa'

const Home = () => {
  const { Search } = Input;
  const columns = [
    {
      title: 'No Struk',
      dataIndex: 'bill',
      key: 'bill',

    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      key: 'nama',
    },
    {
      title: 'Tanggal',
      dataIndex: 'tanggal',
      key: 'tanggal',
      responsive: ['md'],
    },
    {
      title: 'Layanan',
      dataIndex: 'layanan',
      key: 'layanan',
      responsive: ['md'],
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      responsive: ['md'],
    },
    {
      title: 'Pembayaran',
      key: 'bayar',
      dataIndex: 'bayar',
      render: (_, record) => {
        if (record.bayar === 'Belum Bayar') {
          return <Tag color='red'>{record.bayar.toUpperCase()}</Tag>;
        }
        else {
          return <Tag color='blue'>{record.bayar.toUpperCase()}</Tag>;
        }
      },
      responsive: ['lg'],
    },
    {
      title: 'Pengambilan',
      key: 'ambil',
      dataIndex: 'ambil',
      render: (_, record) => {
        if (record.ambil === 'Belum Diambil') {
          return <Tag color='red'>{record.ambil.toUpperCase()}</Tag>;
        }
        else {
          return <Tag color='blue'>{record.ambil.toUpperCase()}</Tag>;
        }
      },
      responsive: ['lg'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <FaEye className='cursor-pointer text-blue-600'/>
          <FaTrash className='cursor-pointer text-red-600' />
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      nama: 'John Brown',
      bill: 'TRX#220323-0001',
      tanggal: '23/03/2023',
      layanan: 'Cuci Kiloan',
      total: (20000).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }),
      bayar: 'Belum Bayar',
      ambil: 'Belum Diambil',
    },
    {
      key: '2',
      nama: 'John Doe',
      bill: 'TRX#220324-0001',
      tanggal: '24/03/2023',
      layanan: 'Cuci Kiloan',
      total: (55000).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }),
      bayar: 'Sudah Bayar',
      ambil: 'Sudah Diambil',
    },
  ];
  const dataCard = [
    {
      color: 'border-blue-500',
      title: 'Transaksi Hari Ini :',
      value: '12',
      icon: <RiBillLine className='text-3xl text-gray-500 mr-4' />
    },
    {
      color: 'border-green-500',
      title: 'Transaksi Bulan Ini :',
      value: '50',
      icon: <RiBillLine className='text-3xl text-gray-500 mr-4' />
    },
    {
      color: 'border-orange-500',
      title: 'Jumlah Pelanggan :',
      value: '100',
      icon: <FaUsers className='text-3xl text-gray-500 mr-4' />
    },
    {
      color: 'border-sky-500',
      title: 'Total Transaksi :',
      value: (2545000).toLocaleString('id-ID', {
      style: "currency",
      currency: "IDR",
        minimumFractionDigits: 0,
    }),
      icon: <FaMoneyBillWave className='text-3xl text-gray-500 mr-4' />
    },
  ]
  return (
    <Dashboard>
      <div>
        <p className='mb-4 font-semibold text-lg'>Beranda</p>
        <Row gutter={[16, 16]}>
          {dataCard.map((item) => {
            return (
              <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }}>
                <Card className={`border-l-8 border-y-0 border-r-0 ${item.color} shadow-xl`}>
                  <div className='flex items-center'>
                    <div className='w-full'>
                      <p className='font-semibold'>{item.title}</p>
                      <p className='text-xl font-bold'>{item.value}</p>
                    </div>
                    {item.icon}
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
        <div className='flex justify-between items-center my-6'>
        <p className='font-semibold text-lg'>Daftar Transaksi</p>
          <Search
            placeholder="Search"
            // onChange={handleSearch}
            style={{ width: 200 }}
          />
        </div>
        <Table columns={columns} dataSource={data} bordered/>
      </div>
    </Dashboard>
  )
}

export default Home