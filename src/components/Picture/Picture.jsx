import React from 'react';
import PropTypes from 'prop-types';

import {
  wrapperStyle,
  placeholderStyle,
  pictureStyle,
  imgStyle,
} from './Picture.styles.jsx';

const config = {
  minSize: 30, // square placeholder's width
  // Based on min-width
  breakpoints: {
    lg: 1280, // Desktops
    md: 768, // New smartphones / tablets
    sm: 0, // Old/small smartphones
  },
  max: 2560,
  widths: {
    sm: 768,
    md: 1280,
    lg: {
      full: 2560,
      '100': 1280,
    },
  },
};

const parseRatio = ratio => ratio.split('/').map(i => parseInt(i, 10));
const sanitizeSrc = src => src.split('/upload/')[1];
const setSrc = (w, h, src, mode) =>
  `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD}/image/upload/c_${mode},w_${w},h_${h}/${src}`;

const measureImage = (breakpoint, scale, ratio) => {
  const [w, h] = parseRatio(ratio);
  const { widths } = config;

  const full = widths[breakpoint].full || widths[breakpoint];
  const container = widths[breakpoint]['100'] || widths[breakpoint];

  // Format
  const factor = parseInt(scale, 10);
  const width = scale === 'full' ? full : (container * factor) / 100;
  const height = (width * h) / w;

  return {
    width: Math.round(width),
    height: Math.round(height),
  };
};

const Img = ({ src, ratio, sm, md, lg, alt, mode }) => {
  const [w, h] = parseRatio(ratio);
  const sizes = { sm, md, lg };
  const img = sanitizeSrc(src);
  const { breakpoints, max, minSize } = config;

  const regexExt = new RegExp(/(\.(gif|jpg|jpeg|tiff|png|webp))/g);
  const placeholder = setSrc(minSize, minSize, img, mode).replace(
    regexExt,
    '.jpg'
  );

  // Generate full path based on breakpoint and scale
  const getPath = (breakpoint, scale, ext, retina = false) => {
    const { width, height } = measureImage(breakpoint, scale, ratio);
    const dpi = retina && width * 2 <= max ? 2 : 1;

    return setSrc(width * dpi, height * dpi, img, mode).replace(
      regexExt,
      `.${ext}`
    );
  };

  return (
    <div style={{ ...wrapperStyle, paddingTop: `${(100 * h) / w}%` }}>
      <div
        style={{
          ...placeholderStyle,
          ...pictureStyle,
          backgroundImage: `url('${placeholder}')`,
        }}
      />
      <picture style={pictureStyle}>
        {Object.keys(breakpoints).map(b => (
          <React.Fragment key={b}>
            <source
              media={`(min-width: ${breakpoints[b]}px)`}
              srcSet={`
    ${getPath(b, sizes[b], 'webp')} 1x,
    ${getPath(b, sizes[b], 'webp', true)} 2x`}
              type="image/webp"
            />
            <source
              media={`(min-width: ${breakpoints[b]}px)`}
              srcSet={`
    ${getPath(b, sizes[b], 'jpg')} 1x,
    ${getPath(b, sizes[b], 'jpg', true)} 2x`}
            />
            {'\n\n'}
          </React.Fragment>
        ))}
        <img
          style={imgStyle}
          src={`${getPath('md', sizes.md, 'jpg')}`}
          alt={alt}
        />
        {'\n'}
      </picture>
    </div>
  );
};

Img.propTypes = {
  src: PropTypes.string,
  ratio: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  alt: PropTypes.string,
  mode: PropTypes.string,
};

Img.defaultProps = {
  src: '',
  mode: 'fill',
  ratio: '16/9',
  sm: '100',
  md: '100',
  lg: '100',
  alt: 'Alternative text; must describe the image',
};

export default Img;
