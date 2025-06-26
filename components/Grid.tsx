import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { gridItems } from '@/data';

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {Array.isArray(gridItems) && gridItems.map(
          ({ id, description, title, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
