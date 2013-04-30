activeCamera=scene.cameras.getByIndex(0);
function asyProjection() {activeCamera.projectionType=activeCamera.TYPE_ORTHOGRAPHIC;
activeCamera.viewPlaneSize=15.7999998837692;
activeCamera.binding=activeCamera.BINDING_MAX;
}

asyProjection();

handler=new CameraEventHandler();
runtime.addEventHandler(handler);
handler.onEvent=function(event) 
{
  asyProjection();
  scene.update();
}
var zero=new Vector3(0,0,0);
var meshes=scene.meshes;
var count=meshes.count;

var index=new Array();
for(i=0; i < count; i++) {
  var mesh=meshes.getByIndex(i); 
  var name=mesh.name;
  end=name.lastIndexOf(".")-1;
  if(end > 0) {
    if(name.substr(end,1) == "\001") {
      start=name.lastIndexOf("-")+1;
      n=end-start;
      if(n > 0) {
        index[name.substr(start,n)]=i;
        mesh.name=name.substr(0,start-1);
      }
    }
  }
}

var center=new Array(
Vector3(-0.582747009497368,-0.941239426452128,-26.6198478034793),
Vector3(-0.582747009497368,2.42019143946755,-26.0838830208766),
Vector3(-4.89767385986111,1.99039068183153,-23.3882851386846),
Vector3(-4.89767385986111,-1.37104018408814,-23.9242499212873),
Vector3(-2.16802614747354,1.31097742970598,-19.1271830093258),
Vector3(-2.16802614747354,-2.05045343621369,-19.6631477919285),
Vector3(-4.5380966223308,-0.494865737805221,-24.0148918824859),
Vector3(-0.582747009497368,0.739476006507709,-26.351865412178),
Vector3(4.87654841527778,-2.30006593070323,-18.0976435447617),
Vector3(-3.75330528544971,-2.7394885877353,-12.6394521825523),
);

billboardHandler=new RenderEventHandler();
billboardHandler.onEvent=function(event)
{
  var camera=scene.cameras.getByIndex(0); 
  var position=camera.position;
  var direction=position.subtract(camera.targetPosition);
  var up=camera.up.subtract(position);

  function f(i,k) {
    j=index[i];
    if(j >= 0) {
      var mesh=meshes.getByIndex(j);
      var name=mesh.name;
      var R=Matrix4x4();
      R.setView(zero,direction,up);
      var c=center[k];
      var T=mesh.transform;
      T.setIdentity();
      T.translateInPlace(c.scale(-1));
      T.multiplyInPlace(R);
      T.translateInPlace(c);
    }
  }
f(0,0);
f(1,0);
f(2,0);
f(3,0);
f(4,0);
f(5,0);
f(6,0);
f(7,0);
f(8,0);
f(9,0);
f(10,0);
f(11,0);
f(12,0);
f(13,0);
f(14,1);
f(15,1);
f(16,1);
f(17,1);
f(18,1);
f(19,1);
f(20,1);
f(21,1);
f(22,1);
f(23,1);
f(24,1);
f(25,1);
f(26,1);
f(27,1);
f(28,1);
f(29,1);
f(30,1);
f(31,1);
f(32,2);
f(33,2);
f(34,2);
f(35,2);
f(36,2);
f(37,2);
f(38,2);
f(39,2);
f(40,2);
f(41,2);
f(42,2);
f(43,2);
f(44,2);
f(45,2);
f(46,2);
f(47,2);
f(48,3);
f(49,3);
f(50,3);
f(51,3);
f(52,3);
f(53,3);
f(54,3);
f(55,3);
f(56,3);
f(57,3);
f(58,3);
f(59,3);
f(60,3);
f(61,3);
f(62,3);
f(63,3);
f(64,3);
f(65,4);
f(66,4);
f(67,4);
f(68,4);
f(69,4);
f(70,4);
f(71,4);
f(72,4);
f(73,4);
f(74,4);
f(75,4);
f(76,4);
f(77,4);
f(78,4);
f(79,4);
f(80,4);
f(81,4);
f(82,4);
f(83,4);
f(84,4);
f(85,4);
f(86,5);
f(87,5);
f(88,5);
f(89,5);
f(90,5);
f(91,5);
f(92,5);
f(93,5);
f(94,5);
f(95,5);
f(96,5);
f(97,5);
f(98,5);
f(99,5);
f(100,5);
f(101,5);
f(102,5);
f(103,5);
f(104,5);
f(105,5);
f(106,5);
f(107,5);
f(108,6);
f(109,6);
f(110,6);
f(111,6);
f(112,6);
f(113,6);
f(114,6);
f(115,6);
f(116,6);
f(117,6);
f(118,6);
f(119,6);
f(120,6);
f(121,6);
f(122,6);
f(123,6);
f(124,6);
f(125,6);
f(126,6);
f(127,6);
f(128,6);
f(129,6);
f(130,6);
f(131,6);
f(132,7);
f(133,7);
f(134,7);
f(135,7);
f(136,7);
f(137,7);
f(138,7);
f(139,7);
f(140,7);
f(141,7);
f(142,7);
f(143,7);
f(144,7);
f(145,7);
f(146,7);
f(147,7);
f(148,7);
f(149,7);
f(150,7);
f(151,7);
f(152,7);
f(153,7);
f(154,7);
f(155,7);
f(156,7);
f(157,7);
f(158,7);
f(159,7);
f(160,7);
f(161,7);
f(162,7);
f(163,7);
f(164,7);
f(165,7);
f(166,7);
f(167,7);
f(168,8);
f(169,8);
f(170,8);
f(171,8);
f(172,8);
f(173,8);
f(174,8);
f(175,8);
f(176,8);
f(177,8);
f(178,8);
f(179,8);
f(180,8);
f(181,8);
f(182,8);
f(183,8);
f(184,8);
f(185,9);
f(186,9);
f(187,9);
f(188,9);
f(189,9);
f(190,9);
f(191,9);
f(192,9);
f(193,9);
f(194,9);
f(195,9);
f(196,9);
f(197,9);
f(198,9);
f(199,9);
f(200,9);
f(201,9);
f(202,9);
f(203,9);
f(204,9);
f(205,9);
f(206,9);
f(207,9);
f(208,9);
f(209,9);
f(210,9);
f(211,9);
f(212,9);
f(213,9);
f(214,9);
f(215,9);

  runtime.refresh(); 
}
 
runtime.addEventHandler(billboardHandler); 

runtime.refresh(); 
