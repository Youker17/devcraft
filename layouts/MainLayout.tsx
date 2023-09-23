
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import '@/styles/globals.css'


export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
            {children}
            <Footer />
        </div>
    )
}