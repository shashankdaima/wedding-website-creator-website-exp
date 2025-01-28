export default function FlowerCorner() {
  return (
    <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="flower-corner-animation">
        <path d="M10,90 Q30,70 50,50 T90,10" stroke="#C1A57B" strokeWidth="1.5" fill="none"/>
        <g transform="translate(20,80)">
          <path d="M0,0 C3,-3 6,-3 9,0 C12,3 9,6 6,6 C3,6 0,3 0,0Z" fill="#E6B8AF"/>
          <path d="M7,3 C10,0 13,0 16,3 C19,6 16,9 13,9 C10,9 7,6 7,3Z" fill="#E6B8AF"/>
          <circle cx="8" cy="4" r="1.2" fill="#D5745B"/>
        </g>
        <g transform="translate(50,50) rotate(-45)">
          <path d="M0,0 C3,-3 6,-3 9,0 C12,3 9,6 6,6 C3,6 0,3 0,0Z" fill="#E6B8AF"/>
          <path d="M7,3 C10,0 13,0 16,3 C19,6 16,9 13,9 C10,9 7,6 7,3Z" fill="#E6B8AF"/>
          <circle cx="8" cy="4" r="1.2" fill="#D5745B"/>
        </g>
        <g transform="translate(80,20) rotate(-90)">
          <path d="M0,0 C3,-3 6,-3 9,0 C12,3 9,6 6,6 C3,6 0,3 0,0Z" fill="#E6B8AF"/>
          <path d="M7,3 C10,0 13,0 16,3 C19,6 16,9 13,9 C10,9 7,6 7,3Z" fill="#E6B8AF"/>
          <circle cx="8" cy="4" r="1.2" fill="#D5745B"/>
        </g>
      </g>
    </svg>
  );
}
