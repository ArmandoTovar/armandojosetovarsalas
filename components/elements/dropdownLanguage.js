  // components/LanguageSwitchLink.js
  import languageDetector from '../../lib/lenguageDetector'
  import { useRouter } from 'next/router'
  import Link from 'next/link'

  const LanguageSwitchLink = ({ locale, ...rest }) => {
    const router = useRouter()

    let href = rest.href || router.asPath
    let pName = router.pathname
    Object.keys(router.query).forEach((k) => {
      if (k === 'locale') {
        pName = pName.replace(`[${k}]`, locale)
        return
      }
      pName = pName.replace(`[${k}]`, router.query[k])
    })
    if (locale) {
      href = rest.href ? `/${locale}${rest.href}` : pName
    }

    return (
      <><Link
        href={href}
       
      >
        <button  onClick={() => languageDetector.cache(locale)} style={{ fontSize: 'small' }}>{locale}</button>
      </Link><style jsx>{`
      
      button{
        position:relative;
        float:right;
        right:20px ;
        width:30px;
 
        
      }
      @media (max-width:600px ){

        button{
         position:absolute;
         z-index: 2000;
         left:50%;
         top:40px;
        
          
        }

      }

      `}</style></>
    );
  };

  export default LanguageSwitchLink