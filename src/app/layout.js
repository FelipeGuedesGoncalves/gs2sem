import Menu from "@/components/[id]/Menu"
import Rodape from "@/components/Rodape"
import { Outfit } from "next/font/google";
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100','300','500','700','900']
});

export const metadata = {
  title: 'BabyCare',
  description: 'Sua Jornada Materna, Nosso Cuidado Exclusivo ;)',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={outfit.className}>
        <Menu/>
        {children}
        <Rodape/>
      </body>
    </html>
  )
}