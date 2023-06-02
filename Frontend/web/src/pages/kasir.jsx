import React from 'react'
import Dashboard from '../components/layouts'
import { Col, Row, Tag, Input, Select } from 'antd'
import 'dayjs/locale/id';
import { PlusCircleFilled } from '@ant-design/icons'

const Kasir = () => {
  // const { Search, TextArea } = Input;
  // const { RangePicker } = DatePicker;

  // const today = dayjs().locale('id').format('YYYY-MM-DD');

  // const onFinish = (data) => {
  //   console.log("Success:", data);
  //   // dispatch(doAddUsers(data));
  //   // setShow(false)
  // };

  // const onChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  // const onSearch = (value) => {
  //   console.log('search:', value);
  // };

  // const layanan = [
  //   {
  //     value: 'Cuci Kiloan',
  //     label: 'Cuci Kiloan',
  //   },
  //   {
  //     value: 'Setrika',
  //     label: 'Setrika',
  //   },
  //   {
  //     value: 'Cuci Satuan',
  //     label: 'Cuci Satuan',
  //   },
  // ]

  // const paket = [
  //   {
  //     value: 'Reguler',
  //     label: 'Reguler',
  //   },
  //   {
  //     value: 'Express',
  //     label: 'Express',
  //   },
  // ]

  // const columns = [
  //   {
  //     title: 'Layanan',
  //     dataIndex: 'layanan',
  //     key: 'layanan',
  //   },
  //   {
  //     title: 'Jenis',
  //     dataIndex: 'jenis',
  //     key: 'jenis',
  //   },
  //   {
  //     title: 'Estimasi',
  //     dataIndex: 'estimasi',
  //     key: 'estimasi',
  //   },
  //   {
  //     title: 'Tarif',
  //     dataIndex: 'tarif',
  //     key: 'tarif',
  //   },
  // ]

  // const data = [
  //   {
  //     key: '1',
  //     layanan: 'Cuci Kiloan',
  //     jenis: 'Reguler',
  //     estimasi: '3 Hari',
  //     tarif: 'Rp. 7.000',
  //   },
  // ]

  // const onChangeDate = (date) => {
  //   console.log(date.format('YYYY-MM-DD'))
  // }

  // const dataLayanan = [
  //   {
  //     "Nama_Layanan": "Cuci Kiloan",
  //     "img": "/images/cuci.png"
  //   },
  //   {
  //     "Nama_Layanan": "Cuci Satuan",
  //     "img": "/images/satuan.png"
  //   },
  //   {
  //     "Nama_Layanan": "Setrika",
  //     "img": "/images/setrika.png"
  //   }
  // ]

  return (
    <Dashboard>
      <Row className='flex'>
        <Col className='w-full lg:w-2/3 h-[575px] lg:px-4'>
          <p className='font-bold mb-2 text-[#112D4E]'>Data Pelanggan</p>
          <div className='flex justify-center'></div>
          <button className='w-full rounded-lg py-4 bg-white border-[#112D4E] border-2 flex justify-items-center justify-center text-[#112D4E] mb-4'>Masukkan Pelanggan <PlusCircleFilled className='mt-1 ml-2' /></button>

            <p className='font-bold mb-2 text-[#112D4E] sticky top-0'>Pilih Layanan</p>
            <Select showArrow={false} allowClear showSearch className='w-full sticky top-0' size='large' placeholder='Cari Layanan'/>
            
          <Row className='flex flex-wrap overflow-x-auto max-h-[400px]'>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2 shadow-lg'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2 shadow-lg'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2 shadow-lg'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2 shadow-lg'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            <Col className='flex flex-col border-[#112D4E] border mt-4 p-4 rounded-lg md:w-1/3 lg:w-1/6 lg:ml-4 ml-2'>
              <p className='font-semibold text-slate-500'>Cuci Kiloan</p>
              <p className='font-bold text-md'>Rp. 7.000 / Kg</p>
              <p className='text-sm text-slate-500'>3 Hari</p>
              <Tag color="geekblue" className='my-2'>Kiloan</Tag>
              <button className='text-[#3F72AF] my-2 border border-[#3F72AF] font-bold p-1 rounded-full'>Tambah</button>
            </Col>
            
          </Row>
        </Col>
        <Col className='w-full lg:w-1/3 h-24 mb-4'>
          <Row className='hidden lg:flex flex-col w-full min-h-[450px] bg-white rounded-lg p-4'>
            <p className='text-lg font-semibold mb-4'>Keranjang</p>
            <Col className='flex justify-between items-center mb-4'>
              <div>
                <p className='font-semibold'>Cuci Kiloan</p>
                <p className='text-gray-500'>Rp. 7.000</p>
              </div>
              <div className='flex items-center'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded-l'>-</button>
                <Input
                  className='px-2 w-8 max-w-12 text-center'
                  value={1}
                  min={1}
                />
                <button className='bg-blue-500 text-white px-2 py-1 rounded-r'>+</button>
              </div>
            </Col>
            <Col className='flex justify-between items-center mb-4'>
              <div>
                <p className='font-semibold'>Cuci Kiloan</p>
                <p className='text-gray-500'>Rp. 7.000</p>
              </div>
              <div className='flex items-center'>
                <button className='bg-blue-500 text-white px-2 py-1 rounded-l'>-</button>
                <Input
                  className='px-2 w-8 max-w-12 text-center'
                  value={1}
                  min={1}
                />
                <button className='bg-blue-500 text-white px-2 py-1 rounded-r'>+</button>
              </div>
            </Col>
            
          </Row>

          <Row className='flex justify-between p-4'>
            <Col>
              <p className='font-bold text-md'>2 Layanan</p>
              <p className='font-semibold text-slate-400'>3 Hari</p>
            </Col>
            <Col>
              <p className='font-bold text-xl mt-2'>Rp. 2.298.000</p>
            </Col>
          </Row>
          <div className='flex justify-center'>
            <button className='bg-[#3F72AF] text-white w-3/4 p-2 rounded-md'>Simpan Pesanan</button>
          </div>
        </Col>
      </Row>
    </Dashboard>
  )
}

export default Kasir