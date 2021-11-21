import { FC, useRef, useEffect, useState } from "react";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useThemedClasses } from "../../../hooks/useClasses";
import Button from "../../atoms/button/button";
import Header from "../../atoms/header/header";
import Input from "../../atoms/input/input";
import Text from "../../atoms/text/text";
import TextArea from "../../atoms/textarea/textarea";
import "./contact.scss";

export const Contact: FC<{ setScroll?: boolean }> = ({ setScroll }) => {
  const classes = useThemedClasses({}, "contact");
  const contactRef = useRef<HTMLDivElement>(null);
  const [subject, setSubject] = useState<string>();
  const [body, setBody] = useState<string>();

  const sendMail = () => {
    window.open(
      `mailto:fuenmadev@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  const call = () => {
    window.open(`tel:+584146165541`, "_blank");
  };

  const WhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=584146165541&text=Hola!%20Me%20interesa:",
      "_blank"
    );
  };

  const Telegram = () => {
    window.open("https://telegram.me/elaliasquesea", "_blank");
  };

  useEffect(() => {
    if (setScroll && contactRef && contactRef.current) {
      contactRef.current.scrollIntoView();
      setScroll = false;
    }
  }, [contactRef, setScroll]);

  return (
    <div className={classes} ref={contactRef}>
      <div className="contact-header">
        <Header dimension="large">Contáctame</Header>
      </div>
      <div className="contact-ways">
        <div className="email">
          <Text>Envíame un mensaje al correo</Text>
          <Input
            placeholder="Asunto"
            onInput={({ currentTarget }) => setSubject(currentTarget.value)}
          />
          <TextArea
            placeholder="Escribe tu mensaje..."
            onInput={({ currentTarget }) => setBody(currentTarget.value)}
          />
          <Button onClick={sendMail}>Enviar</Button>
        </div>
        <div className="cellphone">
          <Text>Contáctame desde el teléfono</Text>
          <Button onClick={call}>
            <IoCall /> Llámame
          </Button>
          <Button>
            <FaWhatsapp onClick={WhatsApp} /> WhatsApp
          </Button>
          <Button>
            <FaTelegram onClick={Telegram} /> Telegram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
