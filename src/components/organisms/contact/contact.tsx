import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useThemedClasses } from "../../../hooks/useClasses";
import Button from "../../atoms/button/button";
import Header from "../../atoms/header/header";
import Input from "../../atoms/input/input";
import Text from "../../atoms/text/text";
import TextArea from "../../atoms/textarea/textarea";
import "./contact.scss";

export const Contact = () => {
  const classes = useThemedClasses({}, "contact");

  return (
    <div className={classes}>
      <div className="contact-header">
        <Header dimension="large">Contáctame</Header>
      </div>
      <div className="contact-ways">
        <div className="email">
          <Text>Envíame un mensaje al correo</Text>
          <Input placeholder="Asunto" />
          <TextArea placeholder="Escribe tu mensaje..." />
          <Button>Enviar</Button>
        </div>
        <div className="cellphone">
          <Text>Contáctame desde el teléfono</Text>
          <Button>
            <IoCall /> Llámame
          </Button>
          <Button>
            <FaWhatsapp /> WhatsApp
          </Button>
          <Button>
            <FaTelegram /> Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
