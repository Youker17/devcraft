
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import Map from '@/components/ui/Map'
import MobileHeader from '@/components/ui/MobileHeader'
import '@/styles/globals.css'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            {/* <Loader /> */}
            <div className="flex lg:hidden">
                <MobileHeader />
            </div>
            <Header />
            {/* <Map /> */}
            {children}
            <Footer />
        </div>
    )
}