import MainLayout from '@/layouts/MainLayout'
import { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}