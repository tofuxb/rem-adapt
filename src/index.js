export default function (designWidth, rem2px) {
  var div = window.document.createElement('div');
  div.style.width = '1rem';
  div.style.display = "none";
  var head = window.document.getElementsByTagName('head')[0];
  head.appendChild(div);
  var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
  div.remove();
  var fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
  document.documentElement.style.fontSize = fonsSize;
  var st = document.createElement('style');
  var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ fonsSize +";}}";
  var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ fonsSize +";}}"
  st.innerHTML = portrait + landscape;
  head.appendChild(st);
  return defaultFontSize
}