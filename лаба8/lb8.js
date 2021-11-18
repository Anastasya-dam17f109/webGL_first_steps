// 04.js
////шейдер для бесконечно удаленного источника

// Vertex shader program
// const VSHADER_SOURCE =
    // '#version 100\n' +
	// 'attribute vec4 a_Position;\n'+
	// 'attribute vec3 a_norm;\n'+
    // 'attribute float a_size;\n'+
    // 'attribute vec4 a_color;\n '+
	// 'uniform float isAxis;\n '+
    // 'varying vec4 k_color;\n'+
    // 'uniform mat4 motion;\n'+
	// 'uniform vec4 u_LightColor;\n' +
	// 'uniform mat3 uNMatrix;\n'+
    // 'uniform vec3 u_LightDirection;\n' +
    // 'uniform vec4 u_AmbientLight;\n' +
    // 'varying vec4 vLightWeighting;\n'+
	// 'uniform vec3 u_LookDirection;\n' +
	// 'uniform vec3 u_glassLIght;\n' +
	// 'uniform float m;\n' +
    // 'void main() {\n' +
    // '    gl_Position = motion*a_Position;\n' +
    // '    gl_PointSize = a_size;\n' +
    // '    k_color = a_color;'+
	// '    if(isAxis<1.0){\n'+
	// '    vec3 normal = uNMatrix*a_norm;\n'+
	// '    vec3 norm = normalize(normal);'+
	// '    vec3 refl = normalize(reflect(-u_LightDirection,norm));'+
	// '    vec3 v    = normalize(u_LookDirection-a_Position.rgb);'+
    // '    float nDotL = max(dot(u_LightDirection,norm),0.0);\n' +
	// '    float sDotL = max(dot(refl,v),0.0);\n' +
	// '    if(dot(u_LightDirection,norm)<=0.0){\n'+
	// '           sDotL = 0.0;}\n'+
    // '        vLightWeighting =  vec4(a_color.rgb * nDotL ,1.0)+vec4(u_AmbientLight.r*u_LightColor.r, u_AmbientLight.g*u_LightColor.g,   u_AmbientLight.b*u_LightColor.b,  1.0)+  vec4(a_color.rgb * pow(sDotL,m) ,1.0);\n'+
	// '    }else{\n'+
	// '         vLightWeighting = k_color;}\n'+
    // '}\n';
	
	
////шейдер для точечного источника с радиальным затуханием

// const VSHADER_SOURCE =
    // '#version 100\n' +
	// 'attribute vec4 a_Position;\n'+
	// 'attribute vec3 a_norm;\n'+
    // 'attribute float a_size;\n'+
    // 'attribute vec4 a_color;\n '+
	
    // 'uniform float isAxis;\n '+
	// 'varying vec4 k_color;\n'+
	
    // 'uniform mat4 motion;\n'+
	// 'uniform vec4 u_LightColor;\n' +
	// 'uniform mat3 uNMatrix;\n'+
    // 'uniform vec3 u_LightDirection;\n' +
	
    // 'uniform vec4 u_AmbientLight;\n' +
    // 'varying vec4 vLightWeighting;\n'+
	// 'uniform vec3 u_LookDirection;\n' +
	// 'uniform vec3 u_glassLIght;\n' +
	// 'uniform float m;\n' +
    // 'void main() {\n' +
    // '    gl_Position = motion*a_Position;\n' +
    // '    gl_PointSize = a_size;\n' +
    // '    k_color = a_color;'+
	// '    if(isAxis<1.0){\n'+
	// '    vec3 normal = uNMatrix*a_norm;\n'+
	// '    vec3 norm = normalize(normal);'+
	// '    vec3 refl = normalize(reflect(-u_LightDirection,norm));'+
	// '    vec3 v    = normalize(u_LookDirection-a_Position.rgb);'+
	// '    vec3 direction =  normalize(u_LightDirection-a_Position.rgb);\n'+
    // '    float nDotL = max(dot( direction ,norm),0.0);\n' +
	// '    float sDotL = max(dot(refl,v),0.0);\n' +
	// '    float f_rad = 1.0/(0.5+0.7*length(u_LightDirection-a_Position.rgb)+0.8*pow(length(u_LightDirection-a_Position.rgb),2.0));\n'+
	// '    if(dot(u_LightDirection,norm)<=0.0){\n'+
	// '           sDotL = 0.0;}\n'+
    // '        vLightWeighting =  vec4(a_color.rgb * nDotL*f_rad ,1.0)+vec4(u_AmbientLight.r*u_LightColor.r*f_rad, u_AmbientLight.g*u_LightColor.g*f_rad,   u_AmbientLight.b*u_LightColor.b*f_rad,  1.0)+  vec4(a_color.rgb * pow(sDotL,m)*f_rad,1.0);\n'+
	// '    }else{\n'+
	// '         vLightWeighting = k_color;}\n'+
    // '}\n';
	
//вершинный шейдер для прожектора

// const VSHADER_SOURCE =
    // '#version 100\n' +
	// 'attribute vec4 a_Position;\n'+
	// 'attribute vec3 a_norm;\n'+
    // 'attribute float a_size;\n'+
    // 'attribute vec4 a_color;\n '+
	// 'uniform float isAxis;\n '+
    // 'varying vec4 k_color;\n'+
    // 'uniform mat4 motion;\n'+
	// 'uniform vec4 u_LightColor;\n' +
	// 'uniform mat3 uNMatrix;\n'+
    // 'uniform vec3 u_LightDirection;\n' +
	// 'uniform float cos_teta;\n '+
    // 'uniform vec4 u_AmbientLight;\n' +
    // 'varying vec4 vLightWeighting;\n'+
	// 'uniform vec3 u_LookDirection;\n' +
	// 'uniform vec3 u_glassLIght;\n' +
	// 'uniform float m;\n' +
    // 'void main() {\n' +
    // '    gl_Position = motion*a_Position;\n' +
    // '    gl_PointSize = a_size;\n' +
    // '    k_color = a_color;'+
	// '    if(isAxis<1.0){\n'+
	// '    vec3 normal = uNMatrix*a_norm;\n'+
	// '    vec3 norm = normalize(normal);'+
	// '    vec3 refl = normalize(reflect(-u_LightDirection,norm));'+
	// '    vec3 v    = normalize(u_LookDirection-a_Position.rgb);'+
	// '    vec3 direction =  normalize(u_LightDirection-a_Position.rgb);\n'+
    // '    float nDotL = max(dot( direction ,norm),0.0);\n' +
	// '    float sDotL = max(dot(refl,v),0.0);\n' +
	// '    float f_rad = 1.0/(0.5+0.7*length(direction)+0.8*pow(length(direction),2.0));\n'+
	// '    vec3 directionL =  normalize(-u_LightDirection-u_LightDirection);\n'+
	// '    float projDotL = dot(directionL,-direction);\n' +
	// '    if(projDotL<cos_teta){\n'+
	// '           projDotL = 0.0;}\n'+
	// '    if(dot(u_LightDirection,norm)<=0.0){\n'+
	// '           sDotL = 0.0;}\n'+
	// '    f_rad = 1.0;\n'+
    // '        vLightWeighting =  vec4(a_color.rgb * nDotL*f_rad*pow(projDotL,8.0) ,1.0)  ;\n'+
	// '    }else{\n'+
	// '         vLightWeighting = k_color;}\n'+
    // '}\n';



// Fragment shader program
// const FSHADER_SOURCE =
	// 'precision mediump float;\n' +
	// 'varying vec4 k_color ;\n '+
	// 'uniform float u_Width;\n'+
	// 'uniform float u_Height;\n'+
	// 'varying vec4 vLightWeighting;\n'+
    // 'void main() {\n' +
    // '	gl_FragColor = vLightWeighting;\n' +
    // '}\n';
//вершинный для фонга	
	// const VSHADER_SOURCE =
    // '#version 100\n' +
	// 'attribute vec4 a_Position;\n'+
	// 'attribute vec3 a_norm;\n'+
    // 'attribute float a_size;\n'+
    // 'attribute vec4 a_color;\n '+
	// '    uniform mat3 uNMatrix;\n'+
   
	// 'varying vec4 k_color;\n'+
	// 'varying vec3 v_norm;\n'+
    // 'varying vec4 vPosition;\n'+
	
    // 'uniform mat4 motion;\n'+
    // 'void main() {\n' +
    // '    gl_Position = motion*a_Position;\n' +
    // '    gl_PointSize = a_size;\n' +
    // '    k_color = a_color;'+
	// '	 vPosition = gl_Position;\n'+
	
	// '    vec3 normal = uNMatrix*a_norm;\n'+
	// '	 v_norm = normal;\n'+
    // '}\n';
	
//шейдер для модели фонга с добавкой полости в объект

// const FSHADER_SOURCE =
	// 'precision mediump float;\n' +
	// 'varying vec4 k_color ;\n '+
	// 'uniform float u_Width;\n'+
	// 'uniform float u_Height;\n'+
	// 'uniform float isAxis;\n '+
	
	// 'uniform vec4 u_LightColor;\n' +
	
    // 'uniform vec3 u_LightDirection;\n' +
    // 'uniform vec4 u_AmbientLight;\n' +
	// 'uniform vec3 u_LookDirection;\n' +
	// 'uniform vec3 u_glassLIght;\n' +
	// 'uniform float m;\n' +
	// 'varying vec4 vPosition;\n'+
	// 'varying vec3 v_norm;\n'+
    // 'void main() {\n' +
    // 'vec4 vLightWeighting =  vec4(1.0,1.0,1.0,1.0);\n'+
	// 'if(isAxis<1.0){\n'+
	// '    vec3 normal = v_norm;\n'+
	// '    vec3 norm = normalize(normal);'+
	// '    if (!gl_FrontFacing){\n'+
	// '        norm = -norm;}\n'+
	// '    vec3 refl = normalize(reflect(-u_LightDirection,norm));'+
	// '    vec3 v    = normalize(u_LookDirection-vPosition.rgb);'+
	// '    vec3 direction =  normalize(u_LightDirection-vPosition.rgb);\n'+
    // '    float nDotL = max(dot( direction ,norm),0.0);\n' +
	// '    float sDotL = max(dot(refl,v),0.0);\n' +
	// '    float f_rad = 1.0/(0.5+0.7*length(u_LightDirection-vPosition.rgb)+0.8*pow(length(u_LightDirection-vPosition.rgb),2.0));\n'+
	// '    if(dot(u_LightDirection,norm)<=0.0){\n'+
	// '           sDotL = 0.0;}\n'+
    // '        vLightWeighting =  vec4(k_color.rgb * nDotL*f_rad ,1.0)+vec4(u_AmbientLight.r*u_LightColor.r*f_rad, u_AmbientLight.g*u_LightColor.g*f_rad,   u_AmbientLight.b*u_LightColor.b*f_rad,  1.0)+  vec4(k_color.rgb * pow(sDotL,m)*f_rad,1.0);\n'+
	// '    }else{\n'+
	// '         vLightWeighting = k_color;}\n'+
	// '	 gl_FragColor = vLightWeighting;\n' +
    // '}\n';

//туман

const VSHADER_SOURCE =
    '#version 100\n' +
	'attribute vec4 a_Position;\n'+
	'attribute vec3 a_norm;\n'+
    'attribute float a_size;\n'+
    'attribute vec4 a_color;\n '+
	
	'    uniform mat3 uNMatrix;\n'+
   'varying vec4 a_pos;\n'+
	'varying vec4 k_color;\n'+
	'varying vec3 v_norm;\n'+
    'varying vec4 vPosition;\n'+
	
    'uniform mat4 motion;\n'+
    'void main() {\n' +
    '    gl_Position = motion*a_Position;\n' +
    '    gl_PointSize = a_size;\n' +
    '    k_color = a_color;'+
	'	 vPosition = gl_Position;\n'+
	'a_pos = a_Position;\n'+
	'    vec3 normal = uNMatrix*a_norm;\n'+
	'	 v_norm = normal;\n'+
    '}\n';
	
	const FSHADER_SOURCE =
	'precision mediump float;\n' +
	'varying vec4 k_color ;\n '+
	'uniform float u_Width;\n'+
	'uniform float u_Height;\n'+
	'uniform float isAxis;\n '+
	
	'uniform vec4 u_LightColor;\n' +
	'varying vec4 a_pos;\n'+
    'uniform vec3 u_LightDirection;\n' +
    'uniform vec4 u_AmbientLight;\n' +
	'uniform vec3 u_LookDirection;\n' +
	'uniform vec3 u_glassLIght;\n' +
	'uniform float m;\n' +
	'varying vec4 vPosition;\n'+
	'varying vec3 v_norm;\n'+
    'void main() {\n' +
    'vec4 vLightWeighting =  vec4(1.0,1.0,1.0,1.0);\n'+
	'vec3  beg = vec3(0.5,0.6,0.6);\n'+
	'    float d = pow(dot(a_pos.rgb-beg,a_pos.rgb-beg),0.5);\n'+
	'    float dmin = 0.0;\n'+
	'    float dmax = 1.0;\n'+
	'	 float  f = 1.0;\n'+
	'	 if (d>dmin){'+
	'		if (d>dmax){'+
	'			f = 0.0;\n'+
	'		}else{\n'+
	'		    f = (dmax-d)/dmax-dmin;}}\n'+
	//'	 		if (!gl_FrontFacing){\n'+
	//'        		f = 1.0;}}}\n'+
	'	 else {f = 1.0;}\n'+
	'if(isAxis<1.0){\n'+
	'    vec3 normal = v_norm;\n'+
	'    vec3 norm = normalize(normal);'+
	'    if (!gl_FrontFacing){\n'+
	'        norm = -norm;}\n'+
	'    vec3 refl = normalize(reflect(-u_LightDirection,norm));'+
	'    vec3 v    = normalize(u_LookDirection-vPosition.rgb);'+
	'    vec3 direction =  normalize(u_LightDirection-vPosition.rgb);\n'+
    '    float nDotL = max(dot( direction ,norm),0.);\n' +
	'    float sDotL = max(dot(refl,v),0.0);\n' +
		 
	'    float f_rad = 1.0/(0.5+0.7*length(u_LightDirection-vPosition.rgb)+0.8*pow(length(u_LightDirection-vPosition.rgb),2.0));\n'+
	'    if(dot(u_LightDirection,norm)<=0.0){\n'+
	'           sDotL = 0.0;}\n'+
    '        vLightWeighting =  vec4(u_AmbientLight.rgb*k_color.rgb,1.0)*f+  f*vec4(k_color.rgb * pow(sDotL,m)*f_rad,1.0)+(1.0-f)*vec4(0.2775,0.2775,0.2775,1.0);\n'+
	//'	if(!gl_FrontFacing){ vLightWeighting = vec4(k_color.rgb * nDotL*f_rad ,1.0)+vec4(u_LightColor.rgb,  1.0)+  vec4(k_color.rgb * pow(sDotL,m)*f_rad,1.0);}\n'+
	'    }else{\n'+
	'         vLightWeighting = f*k_color;}\n'+
	'	 gl_FragColor = vLightWeighting;\n' +
    '}\n';
	
function main() {
	const canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
    const gl = getWebGLContext(canvas);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    console.log('1');
  // Initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
		console.log('Failed to intialize shaders.');
		return;
    }

    gl.clearColor(0.2775,0.2775,0.2775, 1);
    let n = 0;
    //gl.clearColor(0, 0, 0, 1);
    gl.enable(gl.BLEND);
	let mat_r = mat4.create();
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
	gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.DEPTH_BUFFER_BIT);
	
//отрисовка системы координат

	let centerDownY = [-0.5,0.7,0];
	let centerUpY   = [-0.5,0.75,0];
	let centerDownX = [-0.15,0,0];
	let centerUpX   = [-0.1,0,0];
	let centerDownZ = [-0.5,0,0.5];
	let centerUpZ   = [-0.5,0,0.6]; 
	
	drawCoordSystem(gl, centerDownY, centerUpY , [0.0, 1.0, 0.0, 1.0],"y");
	drawCoordSystem(gl, centerDownX, centerUpX , [0.0, 0, 1.0, 1.0],"x");
	drawCoordSystem(gl, centerDownZ, centerUpZ , [1.0, 0, 0.0, 1.0],"z");
	centerDownY = [0.5,0.7,0];
	centerUpY   = [0.5,0.75,0];
	centerDownX = [0.85,0,0];
	centerUpX   = [0.9,0,0];
	centerDownZ = [0.5,0,0.5];
	centerUpZ   = [0.5,0,0.6]; 
	
	drawCoordSystem(gl, centerDownY, centerUpY , [0.0, 1.0, 0.0, 1.0],"y");
	drawCoordSystem(gl, centerDownX, centerUpX , [0.0, 0, 1.0, 1.0],"x");
	drawCoordSystem(gl, centerDownZ, centerUpZ , [1.0, 0, 0.0, 1.0],"z");

//отрисовка преобразованного конуса 
	
	let rad = 0.25; 
	let nodeAmount = 100;
	let centerDown = [0.5,0,0];
	let centerUp = [0.5,0.5,0];
	let nodeContainer ={nodes: [], meshContainer:[],down:centerDown, up:centerUp,normals:[], firstPart:0, secondPart:0,thirdPart:0, type:"figure"}
	createNodeContainer(nodeContainer.nodes, nodeAmount,rad,centerDown,"y",0.5);
	nodeContainer.nodes.push(centerDown[0]);
	nodeContainer.nodes.push(centerDown[1]);
	nodeContainer.nodes.push(centerDown[2]);
	createNodeContainer(nodeContainer.nodes, nodeAmount,rad*0.5,centerUp,"y",0.5);
	nodeContainer.nodes.push(centerUp[0]);
	nodeContainer.nodes.push(centerUp[1]);
	nodeContainer.nodes.push(centerUp[2]);
	createRoadMesh(nodeContainer,centerDown,centerUp, nodeAmount);
	
	size_obj = {val:0, matrFlag : true}
	n = initVertexBuffersElemsNew(gl,size_obj,nodeAmount,[0.7804,0.5687,0.1137, 1.0],nodeContainer,1)
	let step = 3
	for(var i = 0; i< n; i+=step)
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	// n = initVertexBuffersElemsNew(gl,size_obj,nodeAmount,[0.7804,0.5687,0.1137, 1.0],nodeContainer,2)
	// for(var i = 0; i< n; i+=step)
		// gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	n = initVertexBuffersElemsNew(gl,size_obj,nodeAmount,[0.7804,0.5687,0.1137, 1.0],nodeContainer,3)
	for(var i = 0; i< n; i+=step)
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	
//отрисовка непреобразованного конуса 
	
	centerDown = [-0.5,0,0];
	centerUp   = [-0.5,0.5,0];
	nodeContainer.nodes = []
	nodeContainer.meshContainer = []
	nodeContainer.normals = []
	
	nodeContainer.down = centerDown
	nodeContainer.up   = centerUp
	createNodeContainer(nodeContainer.nodes, nodeAmount,rad,centerDown,"y",-0.5);
	nodeContainer.nodes.push(centerDown[0]);
	nodeContainer.nodes.push(centerDown[1]);
	nodeContainer.nodes.push(centerDown[2]);
	createNodeContainer(nodeContainer.nodes, nodeAmount,rad*0.5,centerUp,"y",-0.5);
	nodeContainer.nodes.push(centerUp[0]);
	nodeContainer.nodes.push(centerUp[1]);
	nodeContainer.nodes.push(centerUp[2]);
	createRoadMesh(nodeContainer,centerDown,centerUp, nodeAmount);
	
	size_obj.matrFlag = false
	n = initVertexBuffersElemsNew(gl,size_obj,nodeAmount,[0.7804,0.5687,0.1137 ,1.0],nodeContainer, 1)
	for(var i = 0; i< n; i+=step)
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	n = initVertexBuffersElemsNew(gl,size_obj,nodeAmount,[0.7804,0.5687,0.1137, 1.0],nodeContainer, 2)
	for(var i = 0; i< n; i+=step)
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	n = initVertexBuffersElemsNew(gl,size_obj,nodeAmount,[0.7804,0.5687,0.1137, 1.0],nodeContainer, 3)
	for(var i = 0; i< n; i+=step)
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	
	
}

//функция для вычисления матрицы преобразования

function createMatrFromAxis(coords1,coords2,s){

//матрица перемещения
	let v1 = []
	let v2 ;
	if(vec3.length(coords1)<vec3.length(coords2)){
		v1.push(-coords1[0])
		v1.push(-coords1[1])
		v1.push(-coords1[2])
		v1.push(1)
		v2 = [coords2[0]-coords1[0],coords2[1]-coords1[1],coords2[2]-coords1[2]]
	}
	else{
		v1.push(-coords2[0])
		v1.push(-coords2[1])
		v1.push(-coords2[2])
		v1.push(1)
		v2 = [-coords2[0]+coords1[0],-coords2[1]+coords1[1],-coords2[2]+coords1[2]]
	}
	
	let transMatrix = mat4.create();
	mat4.set( transMatrix,1,0,0,0,0,1,0,0,0,0,1,0,v1[0],v1[1],v1[2],1 )
	// let a = v2[0]/vec3.length(v2)
	// let b = v2[1]/vec3.length(v2)
	// let c = v2[2]/vec3.length(v2)
	
	// let v3 = [a,0, c]
	// let d  = vec3.length(v3)
	// let rotateMatrixZ  = mat4.fromValues()
	//поворот вокруг z
	// let vZ = vec3.fromValues(0,0,1)
	
	// let rotV = vec3.fromValues(v2[0],0, v2[2])
	// console.log(rotV)
	// let bZ;
	// if(vec3.length(rotV)!=0)
		// bZ = vec3.angle(vZ, rotV )
	// else 
		// bZ = 0
	// console.log(bZ)
	// if(v2[0]>0)
		  // bZ = -bZ
	
	// let rotateMatrixZ = mat4.create();
	// mat4.fromRotation(rotateMatrixZ,bZ,[0,1,0]);
	//let proj = vec4.fromValues(v2[0],0, v2[2],1)
	//mat4.multiply( proj,rotateMatrixZ, proj)
	
	
	//console.log(rotateMatrixZ[0]*proj.x+rotateMatrixZ[4]*proj.y+rotateMatrixZ[8]*proj.z+rotateMatrixZ[12]*proj[3])
	//поворот вокруг z
	// let vX = vec3.fromValues(0,1,0)
	// rotV = vec3.fromValues(0,v2[1], v2[2])
	// console.log(rotV)
	// if(vec3.length(rotV)!=0)
	    // bZ = vec3.angle(vX, rotV )
	// else 
		// bZ = Math.PI/2
	 // if(v2[0]>0)
		  // bZ = -bZ
	// console.log(bZ)
	// let rotateMatrixX = mat4.create();
	////mat4.fromRotation(rotateMatrixX,bZ,[1,0,0]);
	// mat4.multiply( rotateMatrixX, rotateMatrixX,  rotateMatrixZ)
	let axis = vec3.create()
	vec3.cross(axis,v2, [0,1,0])
	let bZ = vec3.angle( [0,1,0],v2)
	let rotateMatrixX = mat4.create();
	mat4.fromRotation(rotateMatrixX,bZ,axis);
	
	let scaleMatrix = mat4.create();
	mat4.set(scaleMatrix,1,0,0,0, 0,s,0,0, 0,0,1,0,0,0,0,1)
	
	let invRotateMatrix = mat4.create();
	mat4.invert(invRotateMatrix,rotateMatrixX)
	
	let invTranslateMatrix = mat4.create();
	mat4.invert(invTranslateMatrix, transMatrix)
	
	mat4.multiply( transMatrix, rotateMatrixX, transMatrix)
	mat4.multiply( transMatrix, scaleMatrix, transMatrix)
	mat4.multiply( transMatrix, invRotateMatrix, transMatrix)
	mat4.multiply( transMatrix, invTranslateMatrix, transMatrix)
	return transMatrix;

}

//функция, в которой рисуется система координат

function drawCoordSystem(gl,centerDownY, centerUpY ,color,axis){
	
	let amount = 30;
	let rad = 0.03;
	let flag = 0
	
	let nodeContainer ={nodes: [], meshContainer:[], type:"coord", normals:[]}
	if(centerDownY[0]<0)
		createNodeContainer(nodeContainer.nodes, amount,rad,centerDownY,axis,-0.5);
	else
		createNodeContainer(nodeContainer.nodes, amount,rad,centerDownY,axis,0.5);
	nodeContainer.nodes.push(centerUpY[0]);
	nodeContainer.nodes.push(centerUpY[1]);
	nodeContainer.nodes.push(centerUpY[2]);

	if(axis == "y"){
		for(var i = 0; i< amount; i++){
			nodeContainer.meshContainer.push(amount);
			nodeContainer.meshContainer.push(i+1);
			nodeContainer.meshContainer.push(i);
			
		}
		nodeContainer.meshContainer.push(amount);		
		nodeContainer.meshContainer.push(0);
		nodeContainer.meshContainer.push(amount-1);
		flag = 4
	}
	else{
		for(var i = 0; i< amount; i++){
			nodeContainer.meshContainer.push(amount);
			nodeContainer.meshContainer.push(i);
			nodeContainer.meshContainer.push(i+1);
		}
		nodeContainer.meshContainer.push(amount);
		nodeContainer.meshContainer.push(amount-1);
		nodeContainer.meshContainer.push(0);
		if (axis=='z')
			flag = 5
		else
			flag = 6
		
		
	}
	
	size_obj = {val:0, matrFlag : false}
	
	let n = initVertexBuffersElemsNew(gl,size_obj,amount,color,nodeContainer,flag)
	let step = 3
	for(var i = 0; i< n; i+=step)
	{
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, i* size_obj.val)
	}
	
	nodeContainer.nodes = []
	nodeContainer.meshContainer = []
	nodeContainer.nodes.push(centerDownY[0]);
	nodeContainer.nodes.push(centerDownY[1]);
	nodeContainer.nodes.push(centerDownY[2]);
	if(centerDownY[0]<0)
		nodeContainer.nodes.push(-0.5);
	else
		nodeContainer.nodes.push(0.5);
	nodeContainer.nodes.push(0);
	nodeContainer.nodes.push(0);
	nodeContainer.meshContainer.push(0);
	nodeContainer.meshContainer.push(1);
	n = initVertexBuffersElemsNew(gl,size_obj,amount,color,nodeContainer, 0)
	gl.drawElements(gl.LINES, 2, gl.UNSIGNED_SHORT, 0)
	
}

//вычисление координат точек сетки верхней и нижней окружностей конуса

function createNodeContainer(nCont, amount,rad,center,axis,offset){
	let angleStep = Math.PI*2/amount;
	let firstAngle = 0;
	for(var i = 0; i< amount; i++){
		let x = Math.cos(firstAngle)*rad;
		let z = Math.sin(firstAngle)*rad;
		if(axis=="y"){
			nCont.push(x+offset);
			nCont.push(center[1]);
			nCont.push(z);
		}
		else{
			if(axis=="z"){
				console.log("ssss")
				nCont.push(x+offset);
				nCont.push(z);
				nCont.push(center[2]);
			}
			else{
				nCont.push(center[0]);
				nCont.push(x);
				nCont.push(z);
			}
		}
		firstAngle += angleStep;
	}
}

//создание сетки для построения поверхности конуса

function createRoadMesh(nodeContainer,centerD,centerU,amount){
	for(var i = 0; i< amount-1; i++){
		nodeContainer.meshContainer.push(amount);
		nodeContainer.meshContainer.push(i);
		nodeContainer.meshContainer.push(i+1);
	}
		nodeContainer.meshContainer.push(amount);
		nodeContainer.meshContainer.push(amount-1);
		nodeContainer.meshContainer.push(0);

	nodeContainer.firstPart = 3*(amount)
	
	for(var i = 0; i< amount-1; i++){
		nodeContainer.meshContainer.push(2*amount+1);
		nodeContainer.meshContainer.push(amount+i+2);
		nodeContainer.meshContainer.push(amount+i+1);	
	}
	nodeContainer.meshContainer.push(2*amount+1);
	nodeContainer.meshContainer.push(amount+1);
	nodeContainer.meshContainer.push(2*amount);
	
	nodeContainer.secondPart = 6*(amount)
	
	for(var i = 0; i< amount-1; i++){
		nodeContainer.meshContainer.push(amount+1+i);
		nodeContainer.meshContainer.push(i+1);
		nodeContainer.meshContainer.push(i);
			
		nodeContainer.meshContainer.push(amount+1+i);
		nodeContainer.meshContainer.push(amount+2+i);
		nodeContainer.meshContainer.push(i+1);	
	}
	nodeContainer.meshContainer.push(2*amount);
	nodeContainer.meshContainer.push(0);
	nodeContainer.meshContainer.push(amount-1);
	
	nodeContainer.meshContainer.push(2*amount);
	nodeContainer.meshContainer.push(amount+1);
	nodeContainer.meshContainer.push(0);

	nodeContainer.thirdPart = nodeContainer.meshContainer.length 
	
}

//вычисление нормалей

function createNormals(nodeContainer,step){
	var begin = 0;
	var end   = 0;
	if(nodeContainer.type== "figure" ){
		
		if (step == 1){
			end = nodeContainer.firstPart
		}
		else{
			if (step == 2){
				end   = nodeContainer.secondPart
				begin = nodeContainer.firstPart
			}
			else{
				if (step == 3){
					end   = nodeContainer.thirdPart
					begin = nodeContainer.secondPart
				}
			}
		}	
	}
	else{
		end = nodeContainer.meshContainer.length;
	}

	for (var i = begin; i<end; i+=3){
		let v1 = vec3.fromValues(nodeContainer.nodes[nodeContainer.meshContainer[i]*3]-nodeContainer.nodes[nodeContainer.meshContainer[i+1]*3],
		nodeContainer.nodes[nodeContainer.meshContainer[i]*3+1]-nodeContainer.nodes[nodeContainer.meshContainer[i+1]*3+1],nodeContainer.nodes[nodeContainer.meshContainer[i]*3+2]-nodeContainer.nodes[nodeContainer.meshContainer[i+1]*3+2])
		
		let v2 =vec3.fromValues(nodeContainer.nodes[nodeContainer.meshContainer[i+2]*3]-nodeContainer.nodes[nodeContainer.meshContainer[i+1]*3],
		nodeContainer.nodes[nodeContainer.meshContainer[i+2]*3+1]-nodeContainer.nodes[nodeContainer.meshContainer[i+1]*3+1],nodeContainer.nodes[nodeContainer.meshContainer[i+2]*3+2]-nodeContainer.nodes[nodeContainer.meshContainer[i+1]*3+2])
		
		let v3 = vec3.create()
		vec3.cross(v3,v2, v1)
		vec3.normalize(v3,v3);
		nodeContainer.normals[nodeContainer.meshContainer[i]*3]   = v3[0]
		nodeContainer.normals[nodeContainer.meshContainer[i]*3+1] = v3[1]
		nodeContainer.normals[nodeContainer.meshContainer[i]*3+2] = v3[2]
		
		nodeContainer.normals[nodeContainer.meshContainer[i+1]*3]   = v3[0]
		nodeContainer.normals[nodeContainer.meshContainer[i+1]*3+1] = v3[1]
		nodeContainer.normals[nodeContainer.meshContainer[i+1]*3+2] = v3[2]
		
		nodeContainer.normals[nodeContainer.meshContainer[i+2]*3]   = v3[0]
		nodeContainer.normals[nodeContainer.meshContainer[i+2]*3+1] = v3[1]
		nodeContainer.normals[nodeContainer.meshContainer[i+2]*3+2] = v3[2]
		
	}

	if (nodeContainer.type != "figure" ){
		if (step == 4){
			nodeContainer.normals[90] = 0
			nodeContainer.normals[91] = 1
			nodeContainer.normals[92] = 0
		}
		else{
			if (step == 5){
				nodeContainer.normals[90] = 0
				nodeContainer.normals[91] = 0
				nodeContainer.normals[92] = 1
			}
			else{
				if (step == 6){
					nodeContainer.normals[90] = 1
					nodeContainer.normals[91] = 0
					nodeContainer.normals[92] = 0
				}
			}
		}	
	}
}

//занесение информации в буфер

function initVertexBuffersElemsNew(gl,size_obj,amount,color,nodeContainer,step ){
	let temp_size = []
	let temp_color = []
	for (var i = 0; i<2*(amount+1); i++){
		temp_size[i] = 10.0;
		temp_color[i*4] = color[0];
		temp_color[i*4+1] = color[0+1];
		temp_color[i*4+2] = color[0+2];
		temp_color[i*4+3] = color[0+3];	
	}
	
	var begin = 0;
	var end = 0;
	var isAxis = 0
	if(nodeContainer.type== "figure" ){
		if (step == 1){
			end = nodeContainer.firstPart
		}
		else{
			if (step == 2){
				end   = nodeContainer.secondPart
				begin = nodeContainer.firstPart
			}
			else{
				if (step == 3){
					end   = nodeContainer.thirdPart
					begin = nodeContainer.secondPart
				}
				else{
					if (step == 0){
						isAxis = 1
					}
					}
				}	
			}
		}	
		
	
	else{
		end = nodeContainer.meshContainer.length;
		if (step == 0){
						isAxis = 1
					}
	}
	
	createNormals(nodeContainer,step)
	let mesh = []
	for(var i = begin; i< end; i++)
		mesh.push(nodeContainer.meshContainer[i])
	
    const vertices = new Float32Array(nodeContainer.nodes);	
    const sizes    = new Float32Array(temp_size);
    const colors   = new Float32Array(temp_color);
    const indexes  = new Uint16Array (mesh);
	const normals  = new Float32Array(nodeContainer.normals)
	
	var FSIZE = vertices.BYTES_PER_ELEMENT;
	
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, (vertices.length+sizes.length+normals.length)*FSIZE+ colors.length*FSIZE, gl.STATIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, sizes);
    gl.bufferSubData(gl.ARRAY_BUFFER, FSIZE*sizes.length, vertices);
    gl.bufferSubData(gl.ARRAY_BUFFER, FSIZE*(sizes.length+vertices.length), colors);
	gl.bufferSubData(gl.ARRAY_BUFFER, FSIZE*(sizes.length+vertices.length+colors.length), normals);
	
	const indexBuffer = gl.createBuffer();
	var ISIZE         =  indexes.BYTES_PER_ELEMENT;
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexes, gl.STATIC_DRAW);
	
	
	const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
		console.log('Failed to get the storage location of a_Position');
		return -1;
    }
	 const a_Size = gl.getAttribLocation(gl.program, 'a_size');
	if (a_Size < 0) {
		console.log('Failed to get the storage location of a_Position');
		return -1;
    }
	
    var u_LightDirecion = gl.getUniformLocation(gl.program, 'u_LightDirection');
   // var LightDirection = vec3.fromValues(-1,0.7,0.5);
    var LightDirection = vec3.fromValues(0,0,1);
    vec3.normalize(LightDirection, LightDirection);
    gl.uniform3fv(u_LightDirecion, LightDirection);

    var u_AmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
    var AmbientLight = vec4.fromValues(1,1,1,1);
	gl.uniform4fv(u_AmbientLight, AmbientLight);
	
	var u_LightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
    var LightColor = vec4.fromValues(0.3294,0.2235,0.0275,1);
	gl.uniform4fv(u_LightColor, LightColor);
	
	var  u_LookDirection = gl.getUniformLocation(gl.program, 'u_LookDirection');
    var  LookDirection = vec3.fromValues(0,0.7,0.5);
	gl.uniform3fv( u_LookDirection, LookDirection);
	
	var  u_glassLIght = gl.getUniformLocation(gl.program, 'u_glassLIght');
    var  glassLIght = vec3.fromValues(0.3935,0.2719,0.1667);
	gl.uniform3fv( u_glassLIght, glassLIght);
	
	var  m = gl.getUniformLocation(gl.program, 'm');
	gl.uniform1f( m, 26.0);
	
	// var  teta_cos = gl.getUniformLocation(gl.program, 'cos_teta');
	// console.log(Math.cos(Math.PI/4))
	// gl.uniform1f( teta_cos, Math.cos(Math.PI/4));
	
	const u_motion = gl.getUniformLocation(gl.program, 'motion');
	let out = mat4.create();
	mat4.lookAt(out, [0.5,0.6,0.9], [0.5,0,0], [0,1,0])

	let ort = mat4.create();
	mat4.perspective(ort,1.5, 1, 0.01, 100)
	
	let matr_resize = mat4.create();
	if (size_obj.matrFlag)
		matr_resize = createMatrFromAxis(nodeContainer.down,nodeContainer.up,0.5)
	
	mat4.multiply(out,out,matr_resize);
	mat4.multiply(out,ort,out);
	
	gl.uniformMatrix4fv (u_motion, false, out)

	var u_NMatr = gl.getUniformLocation(gl.program, 'uNMatrix');
	var normalMatrix = mat3.create();
    mat3.normalFromMat4(normalMatrix, matr_resize);
	gl.uniformMatrix3fv (u_NMatr, false, normalMatrix);
	
	var u_isAxis = gl.getUniformLocation(gl.program, 'isAxis');
	gl.uniform1f (u_isAxis, isAxis);
	
	const a_norm  = gl.getAttribLocation (gl.program, 'a_norm');
	const a_Color = gl.getAttribLocation (gl.program, 'a_color');
	const u_Width = gl.getUniformLocation(gl.program, 'u_Width');
    const u_Heigh = gl.getUniformLocation(gl.program, 'u_Heigh');
	gl.uniform1f(u_Width, gl.drawingBufferWidth);
    gl.uniform1f(u_Heigh, gl.drawingBufferHeight);
	
	gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0,  FSIZE*sizes.length);
	gl.vertexAttribPointer(a_norm, 3, gl.FLOAT, false, 0,  FSIZE*(sizes.length+vertices.length+colors.length));
    gl.vertexAttribPointer(a_Size, 1, gl.FLOAT, false, 0, 0);
    gl.vertexAttribPointer(a_Color, 4, gl.FLOAT, false, 0,  FSIZE*(sizes.length+vertices.length));
	gl.enableVertexAttribArray(a_Size);
    gl.enableVertexAttribArray(a_Position);
    gl.enableVertexAttribArray(a_Color);
	gl.enableVertexAttribArray(a_norm);
	
	size_obj.val = ISIZE;
	return indexes.length;
}





