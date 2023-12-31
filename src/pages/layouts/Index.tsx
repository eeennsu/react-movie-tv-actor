import type { FC } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { FloatButton } from 'antd';
import AutoScrollToTop from '../../hooks/commons/AutoScrollToTop';

const Index: FC = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <AutoScrollToTop />             {/* 페이지 바뀔 때마다 자동으로 맨 위로 끌어올리는 훅 */}
            <Navbar />
            <main className='flex-grow'>
                <div className='max-w-screen-xl px-4 py-6 mx-auto md:px-12 xl:px-28'>
                    <Outlet />
                </div>             
            </main>    
            <FloatButton.BackTop />        
            <Footer />
        </div>
    );
};

export default Index;