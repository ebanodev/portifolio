var entries = [{
    
    image: 'img/c.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'Linguagem C'
  },
  {
    image: 'img/git.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'GIT'
  },
  {
    image: 'img/html.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'HTML'
  },
  {
    image: 'img/javascript.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'JavaScript'
  },
  {
    image: 'img/css.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'CSS'
  },
  {
    image: 'img/php.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'PHP'
  },
  {
    image: 'img/sql.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'SQL'
  },
  {
    image: 'img/gimp.svg',
    width: '200',
    height: '200',
    url: '#',
    target: '_top',
    tooltip: 'Gimp'
  }

];

var settings = {

  entries: entries,
  width: 940,
  height: 880,
  radius: '74%',
  radiusMin: 75,
  bgDraw: true,
  bgColor: 'white',
  opacityOver: 1.00,
  opacityOut: 0.05,
  opacitySpeed: 6,
  fov: 800,
  speed: 1,
  fontFamily: 'Anonymous Pro, sans-serif',
  fontSize: '15',
  fontColor: 'black',
  fontWeight: 'normal', //bold
  fontStyle: 'normal', //italic 
  fontStretch: 'ultra-expanded', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  fontToUpperCase: true,
  tooltipFontFamily: 'Oswald, Arial, sans-serif',
  tooltipFontSize: '30',
  tooltipFontColor: 'black',
  tooltipFontWeight: 'normal', //bold
  tooltipFontStyle: 'normal', //italic 
  tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  tooltipFontToUpperCase: false,
  tooltipTextAnchor: 'left',
  tooltipDiffX: 0,
  tooltipDiffY: 10

};

$('#tagcloud').svg3DTagCloud(settings);

