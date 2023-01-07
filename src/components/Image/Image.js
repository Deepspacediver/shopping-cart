const Image = ({ src, alt, name }) => (
  <img className={name} src={src} alt={alt + " image"} />
);

export default Image;
