const fs = require('fs');
fs.appendFileSync('css/colors.css', `
.css-spinner {
  width: 60px;
  height: 60px;
  border: 5px solid rgba(0, 114, 255, 0.2);
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`);
console.log('CSS spinner added');
