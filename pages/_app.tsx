import Cursor from '@/components/ui/Cursor';
import MainLayout from '@/layouts/MainLayout';
import { AppProps } from 'next/app';

import 'swiper/css';



export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Cursor />
            <Component {...pageProps} />
        </MainLayout>
    )
}