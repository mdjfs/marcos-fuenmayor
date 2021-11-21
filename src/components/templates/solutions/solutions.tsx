import { CgListTree, CgWebsite } from "react-icons/cg";
import { FaCode, FaDesktop, FaMobile } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import Text from "../../atoms/text/text";
import Navigator from "../../molecules/navigator/navigator";
import DesktopAppService from "../../organisms/articles/DesktopAppService/DesktopAppService";
import DesktopSystemService from "../../organisms/articles/DesktopSystemService/DesktopSystemService";
import MobileAppService from "../../organisms/articles/MobileAppService/MobileAppService";
import MobileSystemService from "../../organisms/articles/MobileSystemService/MobileSystemService";
import WebAppService from "../../organisms/articles/WebAppService/WebAppService";
import WebLandingService from "../../organisms/articles/WebLandingService/WebLandingService";
import WebSystemService from "../../organisms/articles/WebSystemService/WebSystemService";
import Blog from "../../organisms/blog/blog";
import Solutions from "../../organisms/solutions/solutions";

export const SolutionsTemplate = () => {
  return (
    <>
      <Navigator />
      <div style={{ paddingTop: 50 }}>
        <Blog
          startDocument={<Solutions />}
          blog={[
            {
              content: (
                <Text>
                  <FaMobile /> Movil
                </Text>
              ),
              children: [
                {
                  content: (
                    <Text>
                      <FaCode /> Aplicación
                    </Text>
                  ),
                  document: <MobileAppService />,
                },
                {
                  content: (
                    <Text>
                      <CgListTree /> Sistema
                    </Text>
                  ),
                  document: <MobileSystemService />,
                },
              ],
            },
            {
              content: (
                <Text>
                  <FaDesktop /> Escritorio
                </Text>
              ),
              children: [
                {
                  content: (
                    <Text>
                      <FaCode /> Aplicación
                    </Text>
                  ),
                  document: <DesktopAppService />,
                },
                {
                  content: (
                    <Text>
                      <CgListTree /> Sistema
                    </Text>
                  ),
                  document: <DesktopSystemService />,
                },
              ],
            },
            {
              content: (
                <Text>
                  <IoGlobeOutline /> Navegador
                </Text>
              ),
              children: [
                {
                  content: (
                    <Text>
                      <CgWebsite /> Presentación
                    </Text>
                  ),
                  document: <WebLandingService />,
                },
                {
                  content: (
                    <Text>
                      <FaCode /> Aplicación
                    </Text>
                  ),
                  document: <WebAppService />,
                },
                {
                  content: (
                    <Text>
                      <CgListTree /> Sistema
                    </Text>
                  ),
                  document: <WebSystemService />,
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default SolutionsTemplate;
