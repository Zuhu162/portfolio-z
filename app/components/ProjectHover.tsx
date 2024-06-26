import React from "react";

interface Props {
  title: String;
  desc: String;
}

const ProjectHover = ({
  product,
}: {
  product: {
    title: string;
    link: string;
    thumbnail?: any;
    desc: string;
  };
}) => {
  return (
    <div>
      <div className="absolute rounded-lg inset-0 h-full w-full opacity-0 group-hover/product:opacity-60 bg-black pointer-events-none"></div>
      <div className="absolute px-10 bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        <p className="text-lg">{product.title}</p>
        <br />
        {product.desc}
      </div>
    </div>
  );
};

export default ProjectHover;
