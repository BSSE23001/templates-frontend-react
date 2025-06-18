import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * ResponsiveLogo
 *
 * Props:
 * - src: string (default logo path)
 * - alt: string
 * - width?: number (e.g., 150)
 * - height?: number (auto maintains aspect ratio)
 * - linkTo?: string (optional link path)
 * - theme?: 'light' | 'dark' (used for conditional src swap)
 * - lightSrc?: string (light theme logo)
 * - darkSrc?: string (dark theme logo)
 */
const Logo = ({
  src,
  alt = 'Logo',
  width = 150,
  height,
  linkTo,
  theme,
  lightSrc,
  darkSrc,
}) => {
  // Theme-aware image selection
  const logoSrc =
    theme === 'dark' && darkSrc
      ? darkSrc
      : theme === 'light' && lightSrc
      ? lightSrc
      : src;

  const image = (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      fluid
      style={{ objectFit: 'contain' }}
    />
  );

  // Optional navigation via react-router
  return linkTo ? <Link to={linkTo}>{image}</Link> : image;
};

export default Logo;



//  Example Usage
// import logoDark from '../assets/images/logo_without_bg.png';
// import logoLight from '../assets/images/logo_without_bg.png';
//  export const HomeHeader = () => (
//   <div className="d-flex align-items-center justify-content-start p-3 bg-dark">
//     <Logo
//       src={logoDark}
//       alt="MyApp"
//       linkTo="/"
//       width={120}
//       theme="dark"
//       darkSrc={logoDark}
//       lightSrc={logoLight}
//     />
//   </div>
// );