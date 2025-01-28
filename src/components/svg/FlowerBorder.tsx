export default function FlowerBorder() {
  return (
    <svg className="w-full h-auto" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="flower-animation">
        <path d="M10,50 C10,50 100,20 400,50 C700,80 790,50 790,50" stroke="#C1A57B" strokeWidth="2" fill="none"/>
        <g transform="translate(50,45)">
          <path d="M0,0 C5,-5 10,-5 15,0 C20,5 15,10 10,10 C5,10 0,5 0,0Z" fill="#E6B8AF"/>
          <path d="M12,5 C17,0 22,0 27,5 C32,10 27,15 22,15 C17,15 12,10 12,5Z" fill="#E6B8AF"/>
          <circle cx="13" cy="7" r="2" fill="#D5745B"/>
        </g>
        <g transform="translate(350,45)">
          <path d="M0,0 C5,-5 10,-5 15,0 C20,5 15,10 10,10 C5,10 0,5 0,0Z" fill="#E6B8AF"/>
          <path d="M12,5 C17,0 22,0 27,5 C32,10 27,15 22,15 C17,15 12,10 12,5Z" fill="#E6B8AF"/>
          <circle cx="13" cy="7" r="2" fill="#D5745B"/>
        </g>
        <g transform="translate(650,45)">
          <path d="M0,0 C5,-5 10,-5 15,0 C20,5 15,10 10,10 C5,10 0,5 0,0Z" fill="#E6B8AF"/>
          <path d="M12,5 C17,0 22,0 27,5 C32,10 27,15 22,15 C17,15 12,10 12,5Z" fill="#E6B8AF"/>
          <circle cx="13" cy="7" r="2" fill="#D5745B"/>
        </g>
      </g>
    </svg>
  );
}
