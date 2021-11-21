import { BsCalendarDate } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";
import { GiVenezuela } from "react-icons/gi";
import { useThemedClasses } from "../../../hooks/useClasses";
import ALink from "../../atoms/alink/alink";
import Card from "../../atoms/card/card";
import Header from "../../atoms/header/header";
import Text from "../../atoms/text/text";
import Timeline from "../../molecules/timeline/timeline";
import "./presentation.scss";

export const Presentation = () => {
  const className = useThemedClasses({}, "presentation");
  return (
    <div className={className}>
      <Card>
        <div className="photo-container">
          <img
            className="photobg"
            src="/static/png/photobg.png"
            alt="Marcos Fuenmayor Background"
          />
          <img
            className="photo"
            src="/static/png/myphoto.png"
            alt="Marcos Fuenmayor Photo"
          />
        </div>
        <div className="data">
          <Header>Marcos Fuenmayor</Header>
          <Header dimension="small">Desarrollador de Software</Header>
          <div className="badges">
            <Text>
              <GiVenezuela /> Maracaibo, Edo. Zulia
            </Text>
            <Text>
              <BsCalendarDate /> 16-08-2000
            </Text>
            <Text>
              <FaUniversity /> Universidad Rafael Urdaneta
            </Text>
          </div>
          <Text>
            Más de 4 años de experiencia en programación. Con un amplio stacks
            de tecnologías y aprendizaje heredado a lo largo del recorrido de mi
            universidad, trabajos y proyectos.
          </Text>
          <br />
          <Text>Mi Trayectoria:</Text>
          <br />
          <Timeline
            dimension="small"
            lines={[
              {
                icon: <Text>2017</Text>,
                content: (
                  <Text>
                    Básicos de un lenguaje de programación (Lenguaje C,
                    estructuras)
                  </Text>
                ),
              },
              {
                icon: <Text>2018</Text>,
                content: (
                  <Text>
                    Proyectos utilizando Bases de Datos y paradigmas orientados
                    a objetos con Java
                  </Text>
                ),
              },
              {
                icon: <Text>2019</Text>,
                content: (
                  <Text>
                    Fuertes conocimientos tanto de JavaScript como Python debido
                    a la experiencia en una máquina calculadora para juegos de
                    póker (GTOTrainer en google)
                  </Text>
                ),
              },
              {
                icon: <Text>2020</Text>,
                content: (
                  <Text>
                    Servidores, aplicaciones móviles, web y de escritorio
                    basados en JavaScript. Debido a proyectos de trabajo y de
                    universidad. Sólido conocimiento de JavaScript y también
                    aprendi a aprovecharlo para usarlo en cualquier entorno o
                    plataforma
                  </Text>
                ),
              },
              {
                icon: <Text>2021</Text>,
                content: (
                  <Text>
                    Implementación de TypeScript con bases sólidas previas de
                    JavaScript en proyectos. Graduado de Ingeniero de
                    Computación en la Universidad Rafael Urdaneta. Actualmente
                    trabajando en proyectos de embergadura
                  </Text>
                ),
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
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
