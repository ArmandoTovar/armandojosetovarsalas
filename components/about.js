
import Image from 'next/image'
import StyleAbout from './style_component/about.module.css'

import {useTranslation} from 'next-i18next';

export default function About () {
  const { t } = useTranslation(['common']);
  return (
    <div className={StyleAbout.about} id="about">
      <div className={StyleAbout.title}>
        <h4 className={StyleAbout.section}>{t('About')}</h4>
        <div className={StyleAbout.separator}></div>
      </div>
      <div className={StyleAbout.abouts}>
        <p className={StyleAbout.parraf}>{t('I am an Electrical')}</p>
        <p className={StyleAbout.parraf}> {t('With experience')} </p>
        <p className={StyleAbout.parraf}>{t('Here are some')}</p>

        <div className={StyleAbout.skill}>
          <span
            className={
              StyleAbout.tec + ' animate__animated animate__zoomInRight'
            }
          >
            React </span>
          <span
            className={
              StyleAbout.tec + ' animate__animated animate__zoomInRight'
            }
          >
            next/Js
          </span>
          <span
            className={
              StyleAbout.tec + ' animate__animated animate__zoomInRight'
            }
          >
            PHP
          </span>
          <span
            className={
              StyleAbout.tec + ' animate__animated animate__zoomInRight'
            }
          >
            C+/C#
          </span>
          <span
            className={
              StyleAbout.tec + ' animate__animated animate__zoomInRight'
            }
          >
            .NET
          </span>
          <span
            className={
              StyleAbout.tec + ' animate__animated animate__zoomInRight'
            }
          >
            WordPress
          </span>
        </div>
      </div>

      <div className={StyleAbout.img}>
        <Image
          className="animate__animated animate__jackInTheBox"
          src="../../images/3.jpeg"
          width="300px"
          height="250px"
          alt="about"
          loading="lazy"
          placeholder='blur'
          blurDataURL='../../images/Placeholder.svg'
        />
      </div>

     
    </div>
  )
}
