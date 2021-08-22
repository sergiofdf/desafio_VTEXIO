import React from 'react'
import styles from './myStyles.css'
interface WhatsProps {
  texto:string, urlWhats:string ,logo:string;
}

const Whats: StorefrontFunctionComponent<WhatsProps> = ({texto, urlWhats, logo}) => {
  return (
    <div className={styles.divClass}>
      <a href={urlWhats}>
        <img className={styles.logoWhats} src={logo} alt="suporte"/>
      </a>
      <p>{texto}</p>
    </div>
  );
}

Whats.schema = {
  title: 'editor.whats.title',
  description: 'editor.whats.description',
  type: 'object',
  properties: {
    texto:{
      title: "Campo de texto da imagem",
      description:"texto do logo",
      type:"string",
      default:"SUPORTE"
    },
    urlWhats:{
      title: "urlWhats",
      description:"url api whatsapp loja",
      type:"string",
      default:"https://api.whatsapp.com/send?phone=5514998890326&text=Obrigado%20pelo%20contato.%20No%20que%20podemos%20ajudar%3F"
    },
    logo:{
      title: "Logo",
      description:"logo whatsapp",
      type:"string",
      default:"https://cdn.statically.io/gh/sergiofdf/images/main/pngwing.com.png"
    }
  },
}

export default Whats
