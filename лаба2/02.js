// 02.js

"use strict";

// Vertex shader program
const VSHADER_SOURCE =
'attribute vec4 a_Position;\n' + // attribute variable
'attribute float a_size;\n' +
 'void main() {\n' +
 // '  gl_Position = vec4(0.0, 0.5, -0.9, 1.0);\n' + // Set the vertex coordinates of the point
'  gl_Position = a_Position;\n' +
 '  gl_PointSize = a_size;\n' +                    // Set the point size
 '}\n';

// Fragment shader program
const FSHADER_SOURCE =
 'void main() {\n' +
 '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' + // Set the point color
 '}\n';

function main() {
  // Retrieve <canvas> element
    const canvas = document.getElementById('mycanvas');

  // Get the rendering context for WebGL
  const gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Set clear color
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

   // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
     console.log('Failed to intialize shaders.');
     return;
   }

   // Get the storage location of a_Position
  const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
     console.log('Failed to get the storage location of a_Position');
     return;
  }
	const a_size = gl.getAttribLocation(gl.program, 'a_size');
	if (a_size < 0) {
     console.log('Failed to get the storage location of a_Position');
     return;
  }
	gl.vertexAttrib3f(a_Position, 0.8, 0.0, 0.0);
   // Pass vertex position to attribute variable
  gl.vertexAttrib1f(a_size, 20.0);
  gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
   // Draw a point
  gl.drawArrays(gl.POINTS, 0, 1);
  gl.vertexAttrib1f(a_size, 40.0);
  gl.vertexAttrib3f(a_Position, 0.8, 0.0, 0.0);
   // Draw a point
  gl.drawArrays(gl.POINTS, 0, 1);
}
