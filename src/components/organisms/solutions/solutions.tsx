import { CgWebsite, CgListTree } from "react-icons/cg";
import { BiTimer } from "react-icons/bi";
import { FaCode, FaMagic } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { useThemedClasses } from "../../../hooks/useClasses";
import Header from "../../atoms/header/header";
import Text from "../../atoms/text/text";
import Timeline from "../../molecules/timeline/timeline";
import "./solutions.scss";
import {
  ColorBaseDangerRed,
  ColorBaseSuccessGreen,
  ColorBaseWarningYellow,
} from "../../../subatoms/build/ts/variables";

export const Solutions = () => {
  const className = useThemedClasses({}, "solutions");
  return (
    <div className={className}>
      <div className="platforms">
        <div className="solutions-header">
          <Header dimension="large">
            Soluciones para cualquier plataforma
          </Header>
        </div>
        <div className="device-solutions">
          <div className="desktop">
            <img
              src="/static/png/desktop_presentation.png"
              alt="Desktop Solutions"
            />
            <Header>Escritorio</Header>
          </div>
          <div className="mobile">
            <img
              src="/static/png/mobile_presentation.png"
              alt="Mobile Solutions"
            />
            <Header>Móviles</Header>
          </div>
          <div className="web">
            <img src="/static/png/web_presentation.png" alt="Web Solutions" />
            <Header>Navegador</Header>
          </div>
        </div>
      </div>
      <div className="types">
        <div className="solutions-header">
          <Header dimension="large">Soluciones para cualquier negocio</Header>
        </div>
        <div className="timeline-container">
          <Timeline
            lines={[
              {
                icon: <CgWebsite />,
                content: (
                  <>
                    <Header dimension="small">Página de Presentación</Header>
                    <Text>
                      Llega efectivamente a mas público del que usualmente estás
                      acostumbrado en tu negocio gracias a la exposición en la
                      web <br /> <br />
                      <BiTimer color={ColorBaseSuccessGreen} /> Rápido
                      desarrollo
                      <br />
                      <MdAttachMoney color={ColorBaseSuccessGreen} /> Costes
                      optimos
                      <br />
                      <BsGraphUp color={ColorBaseDangerRed} /> Retorno de
                      inversión mínimo
                      <br />
                      <FaMagic color={ColorBaseDangerRed} /> Baja automatización
                    </Text>
                  </>
                ),
              },
              {
                icon: <FaCode />,
                content: (
                  <>
                    <Header dimension="small">Aplicación</Header>
                    <Text>
                      Automatiza procesos en tu negocio para proveer servicios
                      mejores y mas rápidos a tus clientes. <br />
                      Ejemplos: Pre-atención automatizada, tiendas virtuales,
                      material digital exclusivo
                      <br /> <br />
                      <BiTimer color={ColorBaseWarningYellow} /> Puede tomar
                      mayor tiempo de desarrollo
                      <br />
                      <MdAttachMoney color={ColorBaseWarningYellow} />
                      Dependiendo de las necesidades puede incrementar el coste
                      <br />
                      <BsGraphUp color={ColorBaseWarningYellow} /> Retorno de
                      Inversión considerable
                      <br />
                      <FaMagic color={ColorBaseSuccessGreen} />
                      Automatización parcial
                    </Text>
                  </>
                ),
              },
              {
                icon: <CgListTree />,
                content: (
                  <>
                    <Header dimension="small">Sistema</Header>
                    <Text>
                      Crea un entorno en la nube para todo el manejo de tu
                      empresa y tus clientes. <br />
                      Automatiza todos tus procesos y descubre todos los
                      beneficios de la tecnología
                      <br /> <br />
                      <BiTimer color={ColorBaseDangerRed} /> Tiempos de
                      desarrollo extensos
                      <br />
                      <MdAttachMoney color={ColorBaseDangerRed} />
                      Necesidad de grandes inversiones
                      <br />
                      <BsGraphUp color={ColorBaseSuccessGreen} /> Retorno de
                      Inversión grande
                      <br />
                      <FaMagic color={ColorBaseSuccessGreen} /> Completa
                      automatización
                    </Text>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
