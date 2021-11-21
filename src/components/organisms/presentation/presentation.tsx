import { useThemedClasses } from "../../../hooks/useClasses";
import ALink from "../../atoms/alink/alink";
import Header from "../../atoms/header/header";
import Text from "../../atoms/text/text";
import "./presentation.scss";

export const Presentation = () => {
  const className = useThemedClasses({}, "presentation");
  return <div className={className}></div>;
};

export default Presentation;

/* <Header content="Hola, mi nombre es Marcos Fuenmayor" />
      <Text
        content={
          <>
            Mucho gusto, me presento: <br /> <br />
            <i style={{ textAlign: "center" }}>
              Graduado de Ingeniería de Computación en la Universidad Rafael
              Urdaneta en Maracaibo, Venezuela. Me intereso principalmente el
              desarrollo de software desde el 2018. Desde ese entonces he
              aprendido muchos conceptos de programación en general y también
              puesto en práctica en algunos de mis <ALink content="proyectos" />
              , creo firmemente en la constante evolución de la tecnología, como
              también tengo conocimientos de los grandes beneficios que
              <strong> te puede llevar ponerla en práctica</strong>
            </i>
            <br /> <br />
            En terminos técnicos... <br />
            He desarrollado:
            <br />
            <br />
            <Text
              dimension="small"
              content="Si no sabes de que te hablo, presiona cada una para ver mas información"
            />
            <br />
            <ALink content="Páginas web" />
            <br />
            <br />
            <ALink content="Sistemas web" />
            <br />
            <br />
            <ALink content="Aplicaciones híbridas" />
            <br />
            <br />
            <Text
              dimension="small"
              content={
                <>
                  ¿También sabes progamar? Mira mi{" "}
                  <ALink dimension="small" content="Stack de tecnologías" />
                </>
              }
            />
          </>
        }
      /> */
