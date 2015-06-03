var scene, camera, renderer,a,b;
var WI=window.innerWidth//window.innerWidth//1000//
var HE=window.innerHeight//window.innerWidth//1000//
var maps=[
//[['e','e','e','e','e','e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,1,1,1,1,1,'e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,'e','e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e']],
[['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,1,1,2,2,2,'e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,1,1,1,2,2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,2,1,'e','e',2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,1,1,1,2,2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e']],
[['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],[2,2,1,1,1,2,2,2,'e','e','e','e','e','e','e','e','e','e','e','e'],[2,'e',1,1,'e',2,'e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,1,1,1,2,2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,2,1,'e','e',2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,1,1,1,2,2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',1,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',2,2,2,2,'e','e','e','e','e','e','e','e','e','e','e','e','e','e'],[2,2,2,'e','e',2,'e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e',2,'e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e']],
[['e','e','e',2,2,2,2,'e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e',2,2,'e','e',3,3,2,2,2,2,2,'e','e','e','e','e','e','e'],['e','e',2,'e',2,2,2,2,2,3,1,'e',2,2,2,2,'e','e','e','e'],['e','e',2,2,2,3,2,2,3,3,4,4,4,3,'e',2,'e','e','e','e'],['e',2,2,2,'e','e',2,'e',0,3,0,0,0,3,'e',1,'e','e','e','e'],['e',3,'e','e',1,1,1,1,'e',4,3,3,3,3,'e',1,'e','e','e','e'],['e','e','e','e',1,'e','e',1,'e','e','e',3,'e','e','e',1,'e','e','e','e'],['e','e','e',1,1,1,'e',1,'e',2,2,2,'e',3,3,3,'e','e','e','e'],['e','e',1,1,'e',1,1,1,2,2,2,2,'e',3,'e','e','e','e','e','e'],['e','e','e',1,1,1,1,1,'e',2,2,2,'e',3,'e','e','e','e','e','e'],['e','e','e','e',1,'e',1,1,'e','e','e',3,3,3,'e','e','e','e','e','e'],['e','e','e','e',1,1,1,1,'e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e'],['e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e','e']],
[['e','e','e','e','e','e','e','e',3,3,3,3,3,3,3,3,3,'e','e','e'],['e','e','e','e','e','e','e',3,3,'e','e','e',3,'e','e','e',3,'e','e','e'],['e','e','e','e',3,3,'e','e',3,3,3,'e',3,3,3,3,3,'e','e','e'],['e','e','e','e','e',3,3,3,'e',3,'e','e',3,'e','e','e','e',3,3,3],['e','e',1,1,1,'e','e',3,'e',3,'e',3,3,3,'e',3,3,3,'e',3],['e','e',1,'e',1,1,3,3,3,3,3,3,'e',3,3,3,'e',3,'e',3],['e','e',1,1,'e',1,'e','e','e',3,'e','e','e','e','e','e','e',3,3,3],['e','e','e',1,1,1,'e',1,1,1,'e',1,1,1,1,1,'e','e','e','e'],['e','e',1,'e','e',1,1,1,'e',1,'e',1,'e','e','e',1,1,1,1,'e'],['e','e',1,'e','e',1,1,1,'e','e','e',1,1,1,'e','e','e','e','e','e'],['e',1,1,1,'e',1,'e',1,1,1,1,'e','e',1,1,1,1,3,3,'e'],['e',1,'e',1,1,'e','e','e','e','e',1,1,1,1,'e','e','e','e',3,'e'],['e',1,1,'e','e','e','e','e','e','e',1,1,'e','e','e','e',3,3,3,'e'],['e','e',1,1,1,1,'e','e','e','e','e','e',3,3,3,'e',3,'e',3,3],[1,'e',1,'e','e',1,'e','e','e','e','e','e',3,'e',3,'e',3,'e',3,'e'],[1,1,1,'e','e',1,'e','e','e','e','e','e',3,'e',3,3,3,3,3,'e'],['e','e','e',1,1,1,'e','e',2,2,2,'e',3,'e','e',3,'e','e',3,3],[1,'e',1,1,1,'e','e','e',2,2,2,3,3,3,3,3,'e','e','e',3],[1,'e',1,1,1,1,1,1,2,2,2,'e','e',3,'e','e',3,3,3,3],[1,1,1,1,'e','e','e','e','e','e','e','e','e',3,3,'e',3,'e',3,'e']]
]

var map=[]		
var imx=imy=fmx=fmy=0
var fine=[7,1]	
var inizio=[2,8]
var direzione=0
var actSpd=20
var dirz={'N':[-1,0],'E':[0,1],'S':[1,0],'W':[0,-1]}	//y,x
var dirs=['N','E','S','W']
var lockInput=false
var rot_ang=0
var trl=0
var actionIndex=0
var step=0
var fast_texture=[]
var cx=inizio[0]
var cy=inizio[1]
var colliders=[]
var lc=localStorage
var segni=0;
var supSegni=[]
var supSegniId=[]
var otherImg=[]
var l_int=1.8


if(lc['livello']){
	var m=parseInt(lc['livello'])
	segni=parseInt(lc['segni'])
	init(m)
}
else{
	lc.setItem('livello','0')
	lc.setItem("cippa","1")
	lc.setItem('segni','10')
	segni=10;
	init(0)
}
if(lc['opt_rot']){
	actSpd=parseInt(lc['opt_rot'])
}
if(lc['opt_l']){
	l_int=parseInt(lc['opt_l'])/2
}

function init(n) {
	console.log(n);
	map = maps[n]
	nx=WI/2
	ny=HE/2
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WI , HE );    	
    camera = new THREE.PerspectiveCamera( 65, WI / HE, 1, 800 );
    camera.position.set(inizio[0]*100,0,inizio[1]*100)
    load_ftexture()

}

function make_map(callback){
	for(y=0; y<20; y++){
		for(x=0; x<20; x++){
			console.log(map[y][x])
			if(map[y][x]!="e"){
				console.log(map[y][x])
				make_tile(y,x)
			}
		}
	}
	make_sprite(fine[0]*100,0,fine[1]*100,otherImg[2],false,90)
	callback()
}


var lgt;
var lgt_int=1.5;
var lgt_next=1.5
var lgt_count=0;
var elgt;
function make_dbg_light(){
	lgt = new THREE.PointLight( 0xFFE6AE, l_int, 700 );
	lgt.position.copy(camera.position);
	elgt = new THREE.PointLight( 0x954BC0, 2.7, 200 );
	elgt.position.set(fine[0]*100,0, fine[1]*100)
	scene.add(lgt)
	scene.add(elgt)

}

function place_sign(){
	var dir  = new THREE.Vector3(0,0,-1)
	dir.applyAxisAngle(new THREE.Vector3(0,1,0),camera.rotation.y)
	var rc = new THREE.Raycaster(camera.position, dir);
	var inters = rc.intersectObjects(colliders);
	if(inters[0]  && inters[0].distance<52 && segni>0){
		var geometry = new THREE.PlaneGeometry(32,32)
		var material = new THREE.MeshLambertMaterial({map:otherImg[0],transparent:true, side: THREE.DoubleSide})
		var mesh = new THREE.Mesh(geometry,material);
		var pos_vec=new THREE.Vector3(0,0,-50)
		mesh.position.copy(camera.localToWorld(pos_vec))
		mesh.rotation.y=camera.rotation.y+Math.PI/2+0.1;
		scene.add(mesh);
		segni-=1;
	}
}

function makeTrWall(px,py,pz,img,size,rotx,roty,blocca){
	var geometry = new THREE.PlaneGeometry(size,size)
	var material = new THREE.MeshLambertMaterial({map:img,transparent:true, side: THREE.DoubleSide})
	var mesh = new THREE.Mesh(geometry,material);
	mesh.position.set(px,py,pz);
	mesh.rotation.y+=roty
	mesh.rotation.x+=rotx
	scene.add(mesh);
	if (blocca)
		colliders.push(mesh)

}

function spawnSupl(y,x){
	var spt = make_sprite(x*100,-25,y*100,otherImg[1],false,32)
	supSegniId.push(spt.id)
}

function checkSupl(){
	for(var i=0; i<supSegni.length; i++){
		if(cx == supSegni[i][1] && cy == supSegni[i][0]){
			segni +=10;
			supSegni[i][0]=-1
			supSegni[i][1]=-1
			scene.remove(scene.getObjectById(supSegniId[i]))
		}
	}
}

function generateCoords(){
	return [((Math.random()*100).toFixed())%20,((Math.random()*100).toFixed())%20]
}

function randomSign(){
	var i;
	var valid;
	var steppable=[]
	for(y=0; y<20; y++){
		for(x=0; x<20; x++){
			if (map[y][x]!='e')
				steppable.push([y,x])
		}
	}
	console.log(steppable)
	for( var count=0; count<2; count++){
		var i = steppable[((Math.random()*1000).toFixed())%steppable.length]
		console.log(i)
		spawnSupl(i[0],i[1]);
		supSegni.push(i);
	}
}


function update_head_light(){
	lgt.position.copy(camera.position)
	lgt.position.y +=10;
	lgt_count+=1;
	if(lgt_count==20){
		lgt_count=0
		lgt_next=l_int+(Math.random())
	}
	if (lgt_int>lgt_next)
		lgt_int-=0.01;
	else if(lgt_next>lgt_int)
		lgt_int+=0.01;

	lgt.intensity=lgt_int;
	elgt.intensity=lgt_int*5;
}

function make_wall(px,py,pz,img,size,rotx,roty,blocca){
	var geometry = new THREE.PlaneGeometry(size,size)
	var material = new THREE.MeshLambertMaterial({map:img,side:THREE.DoubleSide})
	var mesh = new THREE.Mesh(geometry,material);
	mesh.position.set(px,py,pz);
	mesh.rotation.y+=roty
	mesh.rotation.x+=rotx
	scene.add(mesh);
	if (blocca)
		colliders.push(mesh)
}
function make_sprite(px,py,pz,img,blocca,scale){
	var material = new THREE.SpriteMaterial( {map: img,transparent: true} );
	var sprite = new THREE.Sprite( material ); 
	sprite.position.set(px,py,pz)
	sprite.scale.set(scale,scale,1,1)
	scene.add( sprite );	
	if (blocca)
		colliders.push(sprite)
	return sprite;

}
function make_tile(y,x){
	var dx=x*100
	var dz=y*100
	make_wall(dx,50,dz,fast_texture[6],101,Math.PI/2,0,false)		//soffitto
	make_wall(dx,-50,dz,fast_texture[5],101,Math.PI/2,0,false)	//pavimento
	for(i in dirz){							//muri per ogni pos. adiacente	
		var oy=dirz[i][0]+y
		var ox=dirz[i][1]+x
		if (!map[oy] || !map[oy][ox] ||map[oy][ox]=='e'  ){
			r=0
			if(i=='W' || i=='E'){
				r=Math.PI/2
			}
			console.log(map[y][x])
			make_wall(100*x+50*dirz[i][1],0,100*y+50*dirz[i][0],fast_texture[map[y][x]],100,0,r,true)
		}
	}
}

var counter=0

function load_ftexture(){
	var ta=['Images/w0.jpg','Images/w1.jpg','Images/w2.jpg','Images/w3.jpg','Images/w4.jpg','Images/f0.jpg','Images/c0.jpg']
	var tb = ['Images/sign.png','Images/ric.png','Images/Exit.png']
	for(var i=0;i<ta.length; i++){
		fast_texture.push(new THREE.ImageUtils.loadTexture(ta[i],null,function(){counter ++; check_counter()}))
		console.log(" load_ftexture",i)
	}
	for(var i=0; i<tb.length; i++)
		otherImg.push(new THREE.ImageUtils.loadTexture(tb[i],null,function(){counter ++; check_counter()}))
}

function check_counter(){
	if (counter>=10){
	   	randomSign()
	    console.log("fuori da load_ftexture")
	   	make_dbg_light()   	
	    document.body.appendChild( renderer.domElement );
	    make_map(function() {
	    	animate();
	    });    	
	}
	else
		console.log(counter)
}



function clk(e){
	fmx=WI/2
	fmy=HE/2
	imx=parseInt(e.clientX,10);
	imy=parseInt(e.clientY,10);
	if (!lockInput){
		lockInput=true
		var dx=fmx-imx
		var dy=fmy-imy
		if(dx<-50 || dx>50){
			var i=0
			if(dx<0)
				i=-1
			else 
				i=1
			rot_ang=(i*Math.PI/(2*actSpd))
		}
		else if(dy<-50 || dy>15){
			d=0
			if (dy<0){
				d=-Math.PI
			}
			if(!check_tyle(d)){
				var i=0
				if(dy>0){
					i=-1
				}
				else 
					i=1
				trl=(i*100/actSpd)
				step +=1
			}
		}
		
		imx=imy=fmx=fmy=0
	}
}
function check_tyle(y_dir){	//sempre in avanti. per radar alle spalle y_dir -Math.PI
	var r=new THREE.Raycaster();
	var dir  = new THREE.Vector3(0,0,-1)
	dir.applyAxisAngle(new THREE.Vector3(0,1,0),camera.rotation.y+y_dir)
	r.set(camera.position,dir);
	var intersect= r.intersectObjects(colliders);
	return(intersect[0] && intersect[0].distance<55)
}

function rotaziona(ang){
	camera.rotation.y+=ang
}

function riposiziona(t){
	camera.translateZ(t)
}

function move(){
	actionIndex+=1
	rotaziona(rot_ang)
	riposiziona(trl)
	if (actionIndex==actSpd){
		actionIndex=0
		lockInput=false
		rot_ang=0
		trl=0
	}
}
function leaveLevel(){
	if(confirm("Return to main Menu?"))
		document.location.href = "index.html";
}
function check_end(){
	if(cx == fine[0] && cy == fine[1] ){
		var m=parseInt(lc['livello'])
		if (m<4)
			lc['livello']=m+1
		lc['segni']=segni;
		if(confirm("Maze Solved. Do you want to go to the next maze?"))
			document.location.href = "prova.html";
		else
			document.location.href = "index.html";
	}
}

function animate() {
	cx=parseInt(camera.position.x.toFixed()/100 )
	cy=parseInt(camera.position.z.toFixed()/100)
	update_head_light();
	checkSupl();
	document.getElementById("Posizione").innerHTML="Signals: "+segni+" "+"Steps: "+step+" "+"Level: "+lc['livello'];
	check_end();
	if (lockInput)
		move()
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
