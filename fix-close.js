const fs = require('fs');
fs.appendFileSync('css/colors.css', `

/* Custom PrettyPhoto Close Button */
div.pp_pic_holder a.pp_close {
  display: block !important;
  position: absolute !important;
  right: 15px !important;
  top: 15px !important;
  width: 32px !important;
  height: 32px !important;
  background: var(--primary-color) !important;
  border-radius: 50% !important;
  color: #ffffff !important;
  text-align: center !important;
  line-height: 32px !important;
  font-size: 20px !important;
  font-weight: bold !important;
  text-decoration: none !important;
  z-index: 10000 !important;
  text-indent: 0 !important;
  overflow: visible !important;
  box-shadow: 0 0 5px rgba(0,0,0,0.5) !important;
}
div.pp_pic_holder a.pp_close::before {
  content: '✖';
  display: block;
}
div.pp_pic_holder a.pp_close:hover {
  background: var(--dark-color) !important;
}
`);
console.log('Close button CSS appended.');
