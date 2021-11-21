import { FC, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Card from "../../atoms/card/card";
import { IndexType, IndexProps } from "./Index.interfaces";
import "./index.scss";

export const Index: FC<IndexProps> = ({ navigation, ...props }) => {
  const getNavigation = (indexes: IndexType[]) => {
    const items = [];
    for (const {
      content,
      children,
      defaultOpen,
      onClick,
      ...indexProps
    } of indexes) {
      const [isOpen, setIsOpen] = useState(defaultOpen || false);
      items.push(
        <div className="navigation-section">
          <button
            className={`index-button ${children ? "children" : "no-children"}`}
            {...indexProps}
            onClick={children ? () => setIsOpen(!isOpen) : onClick}
          >
            {content}

            {children && !isOpen && <AiOutlineDown className="arrow" />}
            {children && isOpen && <AiOutlineUp className="arrow" />}
          </button>

          {children && (
            <div className={`children-items ${isOpen ? "open" : "close"}`}>
              {getNavigation(children)}
            </div>
          )}
        </div>
      );
    }
    return items;
  };
  return <Card {...props}>{getNavigation(navigation)}</Card>;
};

export default Index;
