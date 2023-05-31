import React from 'react';

const GobackButton: React.FC = () => {
return (
<button className="cursor-pointer border-none outline-none bg-transparent z-10 absolute top-[35px] left-[10px] lg:hidden" onClick={() => window.history.back()}><svg width="14" height="26" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2885 1.08597C13.3758 1.17306 13.445 1.27651 13.4923 1.39041C13.5396 1.50431 13.5639 1.62641 13.5639 1.74972C13.5639 1.87304 13.5396 1.99514 13.4923 2.10904C13.445 2.22293 13.3758 2.32639 13.2885 2.41347L2.70035 12.9997L13.2885 23.586C13.4645 23.762 13.5634 24.0008 13.5634 24.2497C13.5634 24.4987 13.4645 24.7374 13.2885 24.9135C13.1124 25.0895 12.8737 25.1884 12.6247 25.1884C12.3758 25.1884 12.137 25.0895 11.961 24.9135L0.710972 13.6635C0.623666 13.5764 0.554398 13.4729 0.507136 13.359C0.459874 13.2451 0.435547 13.123 0.435547 12.9997C0.435547 12.8764 0.459874 12.7543 0.507136 12.6404C0.554398 12.5265 0.623666 12.4231 0.710972 12.336L11.961 1.08597C12.0481 0.998667 12.1515 0.929399 12.2654 0.882137C12.3793 0.834875 12.5014 0.810547 12.6247 0.810547C12.748 0.810547 12.8701 0.834875 12.984 0.882137C13.0979 0.929399 13.2014 0.998667 13.2885 1.08597Z" fill="#28221E"/>
</svg>
</button>
)
}
export default GobackButton