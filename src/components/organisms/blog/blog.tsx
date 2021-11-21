import { FC, useEffect, useState } from "react";
import { useThemedClasses } from "../../../hooks/useClasses";
import Card from "../../atoms/card/card";
import Index from "../../molecules/index";
import { BlogProps, IndexBlogType } from "./blog.interfaces";
import "./blog.scss";

export const Blog: FC<BlogProps> = ({ blog, startDocument, ...props }) => {
  const classes = useThemedClasses(props, "blog");
  const [actualIndex, setActualIndex] = useState<IndexBlogType>();

  const getIndex = (blog: IndexBlogType[]) => {
    const formatIndex = (index: IndexBlogType): IndexBlogType => {
      if (index.children) {
        return {
          ...index,
          children: index.children.map(formatIndex),
        };
      }
      return {
        ...index,
        onClick: () => setActualIndex(index),
      };
    };
    return <Index navigation={blog.map(formatIndex)} />;
  };

  return (
    <div className={classes}>
      <div className="content-index">{getIndex(blog)}</div>
      <div className="content-blog">
        <Card>
          {actualIndex && actualIndex.document && actualIndex.document}
          {(!actualIndex || !actualIndex.document) && startDocument}
        </Card>
      </div>
    </div>
  );
};

export default Blog;
