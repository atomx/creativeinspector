// Retrieve the stored data and pass it as a message to the embedding page
chrome.storage.local.get('recent', function(items) {
  window.postMessage({type: 'recent', content: (items.recent || [])}, location.href);
});
