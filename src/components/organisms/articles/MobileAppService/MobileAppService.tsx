import Header from "../../../atoms/header/header";
import Text from "../../../atoms/text/text";

export const MobileAppService = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Header>Aplicaciones móviles</Header>
      <img
        src="/static/png/mobile_presentation.png"
        alt="Aplicaciones Moviles"
        style={{ width: "20%", left: "40%" }}
      />
      <Text>
        Este tipo de solucion lleva las funcionalidades de una aplicacion al
        entorno movil, dando automatizacion parcial a procesos de una empresa.
        <br />
        Se aplica a cualquier requerimiento que se necesite tener a
        disponibilidad en el celular. Puede o no depender de servidores y/o
        recursos externos
      </Text>
    </div>
  );
};

export default MobileAppService;
