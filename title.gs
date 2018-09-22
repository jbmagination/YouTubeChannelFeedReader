function YOUTUBEFEEDTITLE(input) {
  var array = [];
  var youtubefeed = 'https://www.youtube.com/feeds/videos.xml?channel_id='
  var url = ''+youtubefeed+input;
  var xml = UrlFetchApp.fetch(url).getContentText();
  var document = XmlService.parse(xml);
  var root = document.getRootElement();
  var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');
  var entries = document.getRootElement().getChildren('entry', atom);
  for (var i = 0; i < entries.length; i++) {
    var title = entries[i].getChild('title', atom).getText();
    array.push([title]);
  }
  return array;
}

