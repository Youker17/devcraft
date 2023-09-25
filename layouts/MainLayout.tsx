
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Map from '@/components/ui/Map'
import '@/styles/globals.css'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
            <Map />
            {children}
            {/* <Footer /> */}
        </div>
    )
}