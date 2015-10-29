var matches = document.body.innerHTML.match(/<!-- ([0-9:]+) -->/);

if (matches && document.referrer.indexOf('atomx.com/inspectcreative/') == -1) {

  // Add a button to the top left of all Atomx creatives on the page
  var btn = document.createElement('a');
  btn.setAttribute('id', 'atomxinspect');
  btn.setAttribute('href', 'https://www.atomx.com/inspectcreative/' + matches[1]);
  btn.setAttribute('target', '_blank');
  btn.innerHTML = '<em>i</em><span>Inspect this creative on atomx.com</span>';
  document.body.appendChild(btn);

  // Store the id and time of the creative view locally
  chrome.storage.local.get('recent', function(items) {
    var recent = (items.recent ? items.recent : []);
    recent.unshift([matches[1], (new Date()).toString()]);
    if (recent.length > 50) { // Store at most 50 views
      recent.pop();
    }
    chrome.storage.local.set({'recent': recent});
  });

}
