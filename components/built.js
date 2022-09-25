import Link from './Link'
import Image from 'next/image'
import Style from './style_component/built.module.css'
import { FaGithubSquare, FaExternalLinkAlt } from 'react-icons/fa'

import {useTranslation} from 'next-i18next';

 
export default function Built () {
 const { t } = useTranslation(['common']);
  const Jobs = [
    {
      image: '../../images/simulador.png',
      type: 'Featured Project',
      title: '3D substation simulator for training',
      desc: 'A virtual environment developed'
    },
    {
      image: '../../images/anunciador.png',
      type: 'Featured Project',
      title: 'Alarm System',
      desc: 'Desktop application programmed'
    },
    {
      image: '../../images/1.jpeg',
      type: 'Featured Project',
      title: 'Captain Matthew',
      desc: 'ecommerce for a seafood'
    }
  ]

  return (
    
      <div className={Style.built} id="work">
        <div className={Style.separator}>
          <h4>{t('Some Things Ive built')}</h4>
        </div>
        {Jobs.map((e, index) => {
          return (

            <div className={Style.card} key={'text' + index}>

              <div className={Style.card__image}>
                <Image src={e.image}layout="fill" loading="lazy" alt="img"
                placeholder='blur'  blurDataURL='../../images/Placeholder.svg'></Image>

              </div>
              <div className={Style.card__content}>

              <h3>{t(e.type)}</h3>
              <h4>{t(e.title)}</h4>
              <p>{t(e.desc)}</p>
              <div className={Style.links_card}>
                <Link href="https://github.com/ArmandoTovar/" passHref={true}>
                  
                   <a><FaGithubSquare /></a> 
                
                </Link>
                <Link href="https://youtu.be/DkVbTL1YIj4" passHref={true}>
                  
                   <a> <FaExternalLinkAlt /></a>
                  
                </Link>
              </div>

              </div>
            </div>
          )
        })}
      </div>

    
  )

}
