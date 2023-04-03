import Sidebar from './sidebar'
import Headers from './headers';
import { Layout } from 'antd'
import { useState } from 'react'
import { FaCashRegister, FaHome, FaUsers, FaUsersCog, FaMoneyBillWave, FaBook, FaDatabase, FaMoneyCheck } from 'react-icons/fa';
import { MdLocalLaundryService, MdPriceChange } from 'react-icons/md'
import { GiClothes } from 'react-icons/gi'

const Dashboard = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true)
    const { Content } = Layout
    const navigation = [
        {
            name: 'Beranda',
            icon: <FaHome />,
            href: '/'
        },
        {
            name: 'Kasir',
            icon: <FaCashRegister />,
            href: '/kasir'
        },
        {
            name: 'Pelanggan',
            icon: <FaUsers />,
            href: '/pelanggan'
        },
        {
            name: 'Pembayaran',
            icon: <FaMoneyBillWave />,
            href: '/pembayaran'
        },
        {
            name: 'Transaksi',
            icon: <FaBook />,
            href: '/transaksi'
        },
        {
            name: 'Master',
            icon: <FaDatabase />,
            href: '#',
            child: [
                {
                    name: 'Users',
                    icon: <FaUsersCog />,
                    href: '/users'
                },
                {
                    name: 'Paket',
                    icon: <MdPriceChange />,
                    href: '/paket'
                },
                {
                    name: 'Jenis Barang',
                    icon: <GiClothes />,
                    href: '/jenisbarang'
                },
                {
                    name: 'Layanan',
                    icon: <MdLocalLaundryService />,
                    href: '/layanan'
                },
                {
                    name: 'Jenis Bayar',
                    icon: <FaMoneyCheck />,
                    href: '/jenisbayar '
                }
            ]
        }
    ]
    const collapse = () => {
        setCollapsed(!collapsed)
    }
    

    return (
        <>
            <Layout className='bg-[#DBE2EF]' hasSider>
                <Sidebar nav={navigation} collapsed={collapsed}/>
                <Content style={{ minHeight: "100vh" }}>
                    <Headers click={collapse} />
                    <Content className='py-4 px-8' style={{ minHeight: '85vh'}}>
                        {children}
                    </Content>
                    <div className='pt-2 text-center'>
                        Copyright by Ren-Project 2023
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default Dashboard