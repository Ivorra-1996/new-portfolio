const EyeSauron = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='70' height='71' fill='none' viewBox='0 0 70 71'>
    <g filter='url(#filter0_d_19_207)'>
      <path
        fill='#000'
        fillOpacity='0.01'
        d='M15 35.59c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20'
        shapeRendering='crispEdges'></path>
      <path
        fill='url(#paint0_radial_19_207)'
        d='M15 35.59c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20'
        shapeRendering='crispEdges'></path>
      <path fill='#000' d='M27.5 35.59a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0'></path>
    </g>
    <defs>
      <radialGradient
        id='paint0_radial_19_207'
        cx='0'
        cy='0'
        r='1'
        gradientTransform='rotate(45 -25.46 60.044)scale(28.2843)'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F60'></stop>
        <stop offset='0.5' stopColor='#F30'></stop>
        <stop offset='0.7' stopOpacity='0'></stop>
      </radialGradient>
      <filter
        id='filter0_d_19_207'
        width='70'
        height='70'
        x='0'
        y='0.59'
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'>
        <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'></feColorMatrix>
        <feOffset></feOffset>
        <feGaussianBlur stdDeviation='7.5'></feGaussianBlur>
        <feComposite in2='hardAlpha' operator='out'></feComposite>
        <feColorMatrix values='0 0 0 0 1 0 0 0 0 0.2 0 0 0 0 0 0 0 0 1 0'></feColorMatrix>
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_19_207'></feBlend>
        <feBlend in='SourceGraphic' in2='effect1_dropShadow_19_207' result='shape'></feBlend>
      </filter>
    </defs>
  </svg>
);

export default EyeSauron;
