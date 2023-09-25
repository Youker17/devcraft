
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Loader from '@/components/ui/Loader'
import Map from '@/components/ui/Map'
import '@/styles/globals.css'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Loader />
            <Header />
            <Map />
            {children}
            {/* <Footer /> */}
        </div>
    )
}