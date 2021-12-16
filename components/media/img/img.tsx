import Image from 'next/image';
import { FunctionComponent } from 'react';
import { ASSET_PATH } from '../../../config/cloudinary';

// TODO:
//  1. Make static types for transform options for safety
//  2. Add objectFit and objectPosition https://nextjs.org/docs/api-reference/next/image#objectfit
//  3. Perhaps just pass all args spread out and keep imageSrcPath functionality
//  4. for layout-fill https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/layout-fill.js

type ImgPropsType = {
  imgSrc?: string;
  alt?: string;
  ext?: 'jpg' | 'png' | 'webp';
  transform?: string[] | undefined;
  width?: number;
  height?: number;
  layout?: 'fixed' | 'responsive' | 'fill' | 'intrinsic';
};

const Img: FunctionComponent<ImgPropsType> = (props) => {
  const {
    imgSrc = 'Photo_Aug_27_5_25_05_PM_ree8ne',
    alt = '',
    ext = 'webp',
    transform,
    width = 500,
    height = 600,
    layout = undefined,
  } = props;

  let transformClasses = '';

  if (transform) {
    // join
    let transformClasses = transform.join();
    // concatenate together and concat '/' to end
    transformClasses = transformClasses + '/';
  }
  // https://cloudinary.com/blog/painless_image_and_video_manipulation_with_javascript
  const imgSrcPath = `${ASSET_PATH}${transformClasses}${imgSrc}.${ext}`;
  console.log(height && width);
  return (
    <>
      <Image
        src={imgSrcPath}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
      />
    </>
  );
};

export { Img };
export type { ImgPropsType };
