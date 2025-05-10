const Lava = props => (
  <svg
    viewBox='0 0 1440 900'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='none'
    {...props}>
    <defs>
      <linearGradient id='lavaGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stopColor='#a78bfa'>
          <animate
            attributeName='stop-color'
            values='#a78bfa;#ec4899;#ef4444;#a78bfa'
            dur='12s'
            repeatCount='indefinite'
          />
        </stop>
        <stop offset='100%' stopColor='#ef4444'>
          <animate
            attributeName='stop-color'
            values='#ef4444;#a78bfa;#ec4899;#ef4444'
            dur='12s'
            repeatCount='indefinite'
          />
        </stop>
      </linearGradient>
    </defs>

    <path fill='url(#lavaGradient)' opacity='0.8'>
      <animate
        attributeName='d'
        dur='20s'
        repeatCount='indefinite'
        values='
            M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 C1400,300 1440,600 1440,900 L0,900Z;
  
            M0,400 C200,500 400,300 600,400 C800,500 1000,300 1200,400 C1400,500 1440,300 1440,900 L0,900Z;
  
            M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 C1400,300 1440,600 1440,900 L0,900Z
          '
      />
    </path>
  </svg>
);

export default Lava;
