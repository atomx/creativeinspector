var matches = document.body.innerHTML.match(/<!-- ([0-9:]+) -->/);
if (matches && document.referrer.indexOf('atomx.com/inspectcreative/') == -1) {
  var btn = document.createElement('a');
  btn.setAttribute('id', 'atomxinspect');
  btn.setAttribute('href', 'http://www.atomx.com/inspectcreative/' + matches[1]);
  btn.setAttribute('target', '_blank');
  btn.innerHTML = '<em>i</em><span>Inspect this creative on atomx.com</span>';

  document.body.appendChild(btn);
}
