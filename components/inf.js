
import Style from "./style_component/inf.module.css";

import Link from "./Link";
import  {useTranslation} from 'next-i18next';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
export default function Inf() {
  const { t } = useTranslation(['common']);
  return (

    <div className={Style.container}>
      <h3 className="animate__animated animate__bounceInLeft">
       {t('Hi, my name is')}
      </h3>
      <h1>Armando Tovar</h1>
      <h2 className={Style.sub_title}>{t("I create solutions from coding")}</h2>
      <p className="animate__animated animate__fadeInTopRight">{t("I am an enterprising")}</p> <button onClick={()=>{location.replace("http://ojs.urbe.edu/index.php/telematique/article/view/3783")}} className={Style.link_book}>{t('title')}</button>
      <div className={Style.social}>
        <Link href="https://www.google.com" passHref={true}><a target="_blank" rel="noopener noreferrer"><FaFacebook /></a></Link>
        <Link href="https://twitter.com/ArmTovar" passHref={true}><a target="_blank" rel="noopener noreferrer"><FaTwitter /></a></Link>
        <Link href="https://www.google.com" passHref={true}><a target="_blank" rel="noopener noreferrer"><FaInstagram /></a></Link>
        <Link href="https://www.linkedin.com/in/armando-jose-tovar-salas-613a53177/" passHref={true}><a target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></Link>
        <Link href="https://github.com/ArmandoTovar/" passHref={true}><a target="_blank" rel="noopener noreferrer"><FaGithub /></a></Link>
          <div></div>
      </div>

    </div>

  );
}


