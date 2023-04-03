import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { Avatar, Button, Space, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Headers = ({ click }) => {
    const change = () => {
        click();
    };

    const items = [
        {
            label: <a href="https://www.antgroup.com">Profile</a>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: 'Logout',
            key: '1',
        },
    ];
    return (
        <>
            <div className='flex justify-between p-4 items-center'>
                <GiHamburgerMenu className='text-lg cursor-pointer hidden sm:block' onClick={change} />
                <div className='flex gap-3 items-center pr-4 ml-auto'>
                    <span className='font-semibold'>User</span>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                    <Space size={16} wrap>
                        <Avatar 
                            style={{ cursor: 'pointer',backgroundColor: '#112D4E', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        icon={<UserOutlined />} 
                        />
                    </Space>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default Headers