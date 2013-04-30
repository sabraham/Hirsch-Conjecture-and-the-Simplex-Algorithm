if(!settings.multipleView)
 settings.batchView=false;
settings.tex="pdflatex";

// Beginning of Asymptote Figure 1
eval(quote{
defaultfilename='essay-1';
if(settings.render < 0) settings.render=4;
settings.inlineimage=true;
settings.embed=true;
settings.outformat='';
settings.toolbar=false;
viewportmargin=(1,1);

size(10cm);
pen bg=gray(0.9)+opacity(0.5);
path a=(0,0)--(1,-1)--(3,-2)--(5,-1.5)--(6,1)--(4,4)--(2,3)--cycle;
filldraw(a,bg,black);
dot((0,0)); dot((1,-1)); dot((3,-2));
dot((5,-1.5),red); dot((6,1)); dot((4,4));
dot((2,3),red);
path b=(8,4)--(9,0)--(10,-1)--(12,-2)--(13,-1)--(15,4);
path c=(8,4)--(9,0)--(10,-1)--(12,-2)--(13,-1)--(15,4)--cycle;
filldraw(c,bg,white);
draw(b);
dot((8.5,2),red); dot((9,0)); dot((10,-1));
dot((12,-2)); dot((13,-1)); dot((14,1.5),red);
viewportsize=(449.55354pt,0);
});
// End of Asymptote Figure 1

// Beginning of Asymptote Figure 2
eval(quote{
defaultfilename='essay-2';
if(settings.render < 0) settings.render=4;
settings.inlineimage=true;
settings.embed=true;
settings.outformat='';
settings.toolbar=false;
viewportmargin=(1,1);

import three;
import patterns;
add("tile",tile());
currentprojection=orthographic(5,7,2,center=true);
size(10cm);
size3(3cm,5cm,8cm);
pen bg=gray(0.9)+opacity(0.5);
path3 p=(3,0,2)--(3,0,0)--(0,0,0)--(0,0,2)--cycle;
draw((0,0,2)--(3,0,2)--(3,0,0)--(0,0,0));
draw((0,0,0)--(0,0,2),red);
draw(surface(p),bg,bg);
path3 h=(6,6,2)--(6,6,0)--(-2,-2,0)--(-2,-2,2)--cycle;
draw(surface(h),blue+opacity(0.5));
draw((0,0,0)--(3,3,0)--(3,3,2)--(0,0,2));
dot("$O$",(0,0,0),align=S);
dot("$z$",(0,0,2),align=N);
dot("$y$",(3,0,2),align=N);
dot("$x$",(3,0,0),align=S);
dot("$y'$",(3,3,2),align=N);
dot("$x'$",(3,3,0),align=S);
draw((3,0,0)--(3,4,0),Arrow3);
draw((3,0,2)--(3,4,2),Arrow3);
draw((0,0,2)--(0,4,2),Arrow3);
draw((0,0,0)--(0,6,0),Arrow3);
draw((0,0,0)--(0,0,2),red);
label("$P$",(2.75,0,.5),NE);
label("$K$",(0,0,1),E,red);
label("$L$",(0,6,0),N);
label("$H$",(6,6,.25),blue,align=NE);
viewportsize=(449.55354pt,0);
});
// End of Asymptote Figure 2

// Beginning of Asymptote Figure 3
eval(quote{
defaultfilename='essay-3';
if(settings.render < 0) settings.render=4;
settings.inlineimage=true;
settings.embed=true;
settings.outformat='';
settings.toolbar=false;
viewportmargin=(1,1);

size(14cm);
pen bg=gray(0.9)+opacity(0.75);
draw((0,0)--(0,1)--(1,1)--(1,0)--cycle);
filldraw((0,0)--(1,0)--(1,1)--cycle,bg,black);
dot((0,0)); dot((1,0)); dot((1,1));
draw((-2,0)--(-2,1)--(-1,1)--(-1,0)--cycle);
draw((-2,0)--(-1,1));
dot((-2,0)); dot((-1,1));
filldraw((2,0)--(2,1)--(3,1)--(3,0)--cycle,bg,black);
dot((2,0)); dot((2,1)); dot((3,1)); dot((3,0));
viewportsize=(449.55354pt,0);
});
// End of Asymptote Figure 3
