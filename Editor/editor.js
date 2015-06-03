var scene, camera, renderer,a,b;
var WI=screen.availWidth//window.innerWidth//1000//
var HE=screen.availHeight//window.innerWidth//1000//
var map=[]		
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
var pointer;
var imgPath=['Images/w0.jpg','Images/w1.jpg','Images/w2.jpg','Images/w3.jpg','Images/w4.jpg','Images/f0.jpg','Images/c0.jpg']
var img_index=1
//lc.clear()
var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text2.style.width = 100;
text2.style.height = 100;
text2.style.backgroundColor = "blue";
text2.innerHTML = "hi there!";
text2.style.bottom = 10 + 'px';
text2.style.left = '45%'
var obj=[]
document.body.appendChild(text2);


init()
animate();

function init() {
		console.log("lol")
	nx=WI/2
	ny=HE/2
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WI , HE );    	
    camera = new THREE.PerspectiveCamera( 65, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.set(25,400,300)
    camera.rotation.x = -0.9
    make_pointer();
    load_ftexture();
    init_empty_map();
    console.log("fuori da load_ftexture")
    make_map()
    print_empty();
   	make_dbg_light()
   	console.log("end_init")
   	document.body.appendChild( renderer.domElement );
}

function make_pointer(){
geometry = new THREE.SphereGeometry( 50, 8,8);
material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
pointer = new THREE.Mesh( geometry, material );
pointer.position.z=-100;
pointer.position.y=-50;
pointer.name="pointer"
scene.add( pointer );

}
 function upPointerPos(x,y){
 	a=x
 	b=y
 	a=((a/100).toFixed())*100;
 	b=((b/100).toFixed())*100;
 	pointer.position.set(a,-50,b)

 }

function init_empty_map(){
	for(y=0; y<20; y++){
		var temp=[]
		for(x=0; x<20; x++){
			temp[x]='e';
		}
		map.push(temp)
	}
}

function changeImgIndx(i){
	img_index ++;
	if (img_index>= 5)
		img_index=0
}

function make_map(){
	for(y=0; y<20; y++){
		for(x=0; x<20; x++){
			if(map[y][x]!='e' && map[y][x]>0)
				make_tile(y,x)
		}
	}
	make_sprite(fine[0]*100,0,fine[1]*100,'Images/Exit.png')
	make_sprite(inizio[0]*100,0,inizio[1]*100,'Images/Exit.png')

}

var lgt;
var lgt_int=1.5;
var lgt_next=1.5
var lgt_count=0;
var elgt;

function make_dbg_light(){
	lgt = new THREE.PointLight( 0xFFE6AE, 1.8, 700 );
	lgt.position.copy(camera.position);
	elgt = new THREE.PointLight( 0x954BC0, 2.7, 200 );
	elgt.position.set(fine[0]*100,0, fine[1]*100)
	scene.add(lgt)
	scene.add(elgt)

}


function print_empty(){
	var geometry = new THREE.PlaneGeometry(2000,2000);
	var material = new THREE.MeshBasicMaterial({color: 0xDB944D});
	var mesh = new THREE.Mesh(geometry,material);
	mesh.position.set(1000,-51,1000);
	mesh.rotation.x=-Math.PI/2
	scene.add(mesh);	
}

function a_key(e){
	switch(e.key){
		case 'w':
			camera.position.z+=(-10);
			break;
		case 'a':
			camera.position.x+=(-10);
			break;
		case 's':
			camera.position.z+=(10);
			break;
		case 'd':
			camera.position.x+=(10);
			break;
		case 'e':
			if(map[pointer.position.z/100][pointer.position.x/100]){
				for (i in scene.children){
					if(scene.children[i].position.x==pointer.position.x && scene.children[i].position.z==pointer.position.z && scene.children[i].name != 'pointer' ){
						scene.remove(scene.getObjectById(scene.children[i].id))
						console.log("KILLING SPREEE")
						map[pointer.position.z/100][pointer.position.x/100]='e'
					}
				}
			}
			break;
		case 'g':
			alert(getMap())
			break;				
	}
}

function getMap(){
	var str="["
	for(y=0; y<20; y++){
		str+="["
		for(x=0; x<20; x++){
				console.log(map[y][x])
				if (map[y][x]!='e')
					str+=-1*map[y][x]
				else
				str +="'"+map[y][x]+"'"
				if (x!=19){
					str +=","
				}
		}
		if (y != 19)
			str +="],"
		else
			str +="]"
	}
	str +="]"
	return str;	
}

function update_head_light(){
	lgt.position.copy(camera.position)
	lgt.position.y +=10;
	lgt_count+=1;
	if(lgt_count==20){
		lgt_count=0
		lgt_next=1.5+(Math.random())
	}
	if (lgt_int>lgt_next)
		lgt_int-=0.01;
	else if(lgt_next>lgt_int)
		lgt_int+=0.01;

	lgt.intensity=lgt_int;
	elgt.intensity=lgt_int*5;
}

function make_wall(px,py,pz,img,size,rotx,roty){
	var geometry = new THREE.PlaneGeometry(size,size)
	var material = new THREE.MeshBasicMaterial({map:img,side:THREE.DoubleSide})
	var mesh = new THREE.Mesh(geometry,material);
	mesh.position.set(px,py,pz);
	mesh.rotation.y+=roty
	mesh.rotation.x+=rotx
	scene.add(mesh);
	obj.push(mesh.id)
}
function make_sprite(px,py,pz,img,blocca){
	var imm = THREE.ImageUtils.loadTexture(img);
	var material = new THREE.SpriteMaterial( {map: imm,transparent: true} );
	var sprite = new THREE.Sprite( material ); 
	sprite.position.set(px,py,pz)
	sprite.scale.set(90,90,1,1)
	scene.add( sprite );	
	if (blocca)
		colliders.push(sprite)

}
function make_tile(y,x){
	var dx=x*100
	var dz=y*100
	make_wall(dx,-50,dz,fast_texture[map[y][x]],101,Math.PI/2,0)	//pavimento
	map[y][x] *=-1;		//già disegnato. (vedere condizione per far partire il da make map)
}

function load_ftexture(){
	for(var i=0;i<imgPath.length; i++){
		fast_texture.push(new THREE.ImageUtils.loadTexture(imgPath[i]))
		console.log("load_ftexture",i)
	}	
}

function addTile(i){
	if(map[pointer.position.z/100][pointer.position.x/100]){
		map[(pointer.position.z/100)][pointer.position.x/100]=img_index;
		console.log(map[(pointer.position.z/100)][pointer.position.x/100]=img_index)
		make_map();
	}
}

function clk(e){
	var raycaster = new THREE.Raycaster();
	var mouse= new THREE.Vector2(0,0);
	mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
	raycaster.setFromCamera( mouse, camera );
	var intersects = raycaster.intersectObjects( scene.children );
	if (intersects[0]){
		upPointerPos(intersects[0]["point"].x,intersects[0]["point"].z)
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


function animate() {
	text2.innerHTML=pointer.position.z/100+" "+pointer.position.x/100
	document.getElementById("nextTile").src=imgPath[img_index];
	cx=parseInt(camera.position.x/100 ).toFixed()
	cy=parseInt(camera.position.z/100).toFixed()
	update_head_light();
	if (lockInput)
		move()
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
