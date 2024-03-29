var entries = [{
    
    image: 'img/c.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Linguagem C'
  },
  {
    image: 'img/git.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'GIT'
  },
  {
    image: 'img/aws.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'AWS'
  },
  {
    image: 'img/vim.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'VIM'
  },
  {
    image: 'img/python-logo.svg',
    width: '240',
    height: '240',
    url: '#sobre',
    target: '_top',
    tooltip: 'Python'
  },
  {
    image: 'img/inkscape.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Inkscape'
  },
  {
    image: 'img/html.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'HTML5'
  },
  {
    image: 'img/javascript.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'JavaScript'
  },
  {
    image: 'img/css.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'CSS3'
  },
  {
    image: 'img/php.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'PHP'
  },
  {
    image: 'img/sql.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'SQL'
  },
  {
    image: 'img/gimp.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Gimp'
  },
  {
    image: 'img/sass.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Sass'
  },
  {
    image: 'img/Gnulinux.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'GNU/Linux'
  },
  {
    image: 'img/WordPress.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'WordPress'
  }




];

var settings = {

  entries: entries,
  width: '100%',
  height: '100%',
  radius: '100%',
  radiusMin: 30,
  radiusMax: 1000,
  bgDraw: false,
  bgColor: 'transparent',
  opacityOver: 1.00,
  opacityOut: 0.05,
  opacitySpeed: 15,
  fov: 800,
  speed: 1,
  fontFamily: 'Anonymous Pro, sans-serif',
  fontSize: '14px',
  fontColor: 'black',
  fontWeight: 'normal', //bold
  fontStyle: 'normal', //italic 
  fontStretch: 'ultra-expanded', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  fontToUpperCase: true,
  tooltipFontFamily: 'Oswald, Arial, sans-serif',
  tooltipFontSize: '16',
  tooltipFontColor: 'black',
  tooltipFontWeight: 'normal', //bold
  tooltipFontStyle: 'normal', //italic 
  tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  tooltipFontToUpperCase: false,
  tooltipTextAnchor: 'center',
  tooltipDiffX: 0,
  tooltipDiffY: 10

};

$('#tagcloud').svg3DTagCloud(settings);

