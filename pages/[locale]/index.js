import Head from 'next/head'
import Navbar from '../../components/navbar'
import Inf from '../../components/inf'
import About from '../../components/about'
import Worked from '../../components/worked'
import Built from '../../components/built'
import Footer from '../../components/footer'

import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/theme';
import * as themes from '../../pages/api/varTheme.json';
import { setToLS } from '../../utils/storage';
import Contact from '../../components/contact'
import Style from '../../components/style'
import PopUp from '../../components/elements/popUp'
import LanguageSwitchLink from '../../components/elements/dropdownLanguage'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

import { useRouter } from 'next/router'
import i18nextConfig from '../../next-i18next.config'


export default function Home() {
  setToLS('all-themes', themes.default);
  const { theme, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const router = useRouter()

  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);


  return (
    <>
      <Head>
        <title>At design</title>
      </Head>
  
      <p>
       
          {i18nextConfig.i18n.locales.map((locale) => {
            if (locale === currentLocale) return null
            return (
              <LanguageSwitchLink
                locale={locale}
                key={locale}
              />
            )
          })}
        </p>
      
      <Navbar setMode={setMode}  selectedTheme={selectedTheme} />
      <main>
        <Inf />
        <About />
        <Worked />
        <Built />
   
        <Contact />

        <Footer />
        <PopUp />
      </main>
      <Style theme={theme} />
    </>
  )
}

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }
