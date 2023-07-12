import '../design-system/styles/globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'
import dynamic from "next/dynamic";

const jakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
})

const App = ({ Component, pageProps }) => {
    return (
        <main className={jakarta.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default dynamic (() => Promise.resolve(App), {ssr: false})