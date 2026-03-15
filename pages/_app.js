import '@/styles/globals.css'
import { motion } from 'framer-motion'
import { Analytics } from "@vercel/analytics/next"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Analytics />
    </>
  )
}

export default MyApp
