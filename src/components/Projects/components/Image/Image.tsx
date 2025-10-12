import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

const Images: React.FC<ImageProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width='400' height='400' loading='lazy' />;
};

export default Images;
