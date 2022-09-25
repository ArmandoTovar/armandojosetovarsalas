import Style from './style_component/worked.module.css'
import { useState } from 'react'
import api from '../pages/api/api.json'
import {useTranslation} from 'next-i18next'


export default function Worked() {
  const { t } = useTranslation(['common']);
  const Prof = api.datos
  const [height, setHeight] = useState()
  const [work, setWork] = useState(0)
  const ChangeWork = (index) => {
    setWork(index) 

    setHeight(Prof[index].act.length*200);

  };
  return (
    <div className={Style.workeds} id="experience">
  
        
      <div className={Style.title}>
        <h4 className={Style.section}>{t("Where I have worked")}</h4>
        <div className={Style.separator}></div>
      </div>


      <div className={Style.worked}>
        <div className={Style.bar}>
          {Prof.map((empresa, index) => {
            return (
              <div key={"worked"+index}>
                <input

                  id={'e' + index}
                  type="radio"
                  name="prof"
                  value={index}
                  checked={work === index}
                  onChange={() =>ChangeWork(index)} />
                <label className={Style.business} key={'lab' + index} htmlFor={'e' + index}>
                  {empresa.name}


                </label>

              </div>
            )

          })}
        </div>
            <div  id="emplo" className={Style.employ}>         
          <h3 className={Style.job}>{t(Prof[work].cargo)}</h3>
          <span>{Prof[work].fecha}</span>
          {Prof[work].act.map((e, index) => {
            return <p key={'text' + index}>{t(e)}</p>
          })}
        </div>
   
      </div>
      <style jsx>{` 
      #emplo{
        max-height:${height}px;  
   
      }
      `   
      }</style>



    </div>

  )
}
