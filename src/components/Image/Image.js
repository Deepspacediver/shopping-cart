import styled from "styled-components";

const Image = ({ src, alt }) => <StyledImage src={src} alt={alt + " image"} />;

const StyledImage = styled.img``;
export default Image;
