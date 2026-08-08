import type { JSX } from "astro/jsx-runtime";

type Props = {
  className?: string;
  width?: string;
  height?: string;
};

export default function Angular({
  className = "",
  width = "",
  height = "",
}: Props): JSX.Element {
  return (
      <svg 
      className={className}
      width={width}
      height={height}
      fill="#fff"
      version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 960 960">
<g>
	<polygon className="st0" points="562.6,109.8 804.1,629.5 829.2,233.1 	"/>
	<polygon className="st0" points="624.9,655.9 334.3,655.9 297.2,745.8 479.6,849.8 662,745.8 	"/>
	<polygon className="st0" points="384.1,539.3 575.2,539.3 479.6,307 	"/>
	<polygon className="st0" points="396.6,109.8 130,233.1 155.1,629.5 	"/>
</g>
</svg>
  );
}