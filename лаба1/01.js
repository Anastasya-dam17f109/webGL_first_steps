"use strict";

// 01.js
function main() {
    // Retrieve <canvas> element
    const canvas = document.getElementById('mycanvas');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return false;
    }

    // Get the rendering context for 2DCG
    const ctx = canvas.getContext('2d');

    //Draw a blue rectangle
    //ctx.fillStyle = "Blue"; // Set color to blue
    ////ctx.fillStyle = 'rgb(0, 0, 255)'; // Set color to blue
    //////ctx.fillStyle = "#0000ff"; // Set color to blue
    //ctx.fillRect(10, 100, 500, 100); // Fill a rectangle with the color

    //Поверх синего прямоугольника рисуем прямоугольник с заливкой, но уже
    //полупрозрачным зеленым цветом.
    //ctx.fillStyle = "rgba(0, 127, 0, 0.5)"; // Задаем для контура темно-зеленый полупрозрачный цвет.
    ////ctx.globalAlpha = 0.5;
    //ctx.fillRect(100, 0, 200, 300);        

    //Нарисовать прямоугольник без заливки (т.е. только контур прямоугольника) 
    //ctx.strokeStyle = "red"; // Set color to red
    //ctx.strokeRect(20, 20, 360, 260);
    //ctx.fillStyle = "blue"; // Set color to red
    //ctx.fillRect(20, 20, 360, 260);

    ////Рисуем большой прямоугольник с заливкой, занимающий всю канву, после чего
    ////создаем в его середине прямоугольную "прореху".
    //ctx.fillRect(0, 0, 400, 300);
    //ctx.clearRect(100, 100, 200, 100);

    ////Очищаем всю канву от всей присутствующей на ней графики.
    //ctx.clearRect(0, 0, 535, 360);

    ////Вывод текста в виде сплошной заливки
    //ctx.fillStyle = "red";
    //ctx.fillText("HTML, CSS", 50, 40);

    ////Вывод текста, представляющего собой один лишь контур без заливки
    //ctx.strokeStyle = "blue";
    ////Настраиваем атрибуты шрифта
    // ctx.font = "italic 72pt Times";
    //ctx.strokeText("JavaScript", 100, 100, 100);

    //ctx.textAlign = "center"; /*"left";*/ /*"right";*/ /*"start";*/ /*"end";*/
    //ctx.fillText("HTML, CSS", 100, 100);

    //ctx.textBaseline = "top";
    //ctx.fillText("HTML, CSS", 100, 100);

    ////Вычисляем ширину строки, после чего выводим ее на канву, указав для него мак-
    ////симальную ширину, равную 2/3 от вычисленной.
    //const s = "HTML, CSS, JavaScript, PHP, MySQL";
    //ctx.font = "bold 24pt Tahoma";
    //const w = ctx.measureText(s).width;
    //ctx.fillText(s, 100, 100, 2 * w / 3);

    ////Рисуем красный треугольник без заливки.
    //ctx.strokeStyle = "red";
    //ctx.beginPath();
    //ctx.moveTo(20, 20);
    //ctx.lineTo(380, 20);
    //ctx.lineTo(200, 280);
    //ctx.closePath();
    //ctx.stroke();

    ////Здесь мы рисуем круг с зеленым контуром.
    //ctx.strokeStyle = "green";
    //ctx.beginPath();
    //ctx.arc(200, 150, 100, 0, Math.PI, true);
    //ctx.stroke();
    //ctx.closePath();

    ////дуга окружности синего цвета, построенная по трем точкам
    //ctx.strokeStyle = 'blue';
    //for (let j = 0; j <= 280; j += 40) {
    //   ctx.beginPath();
    //   ctx.moveTo(20, 20);
    //   ctx.arcTo(240, 240, 460, 20, j);
    //   ctx.lineTo(460, 20);
    //   ctx.stroke();
    //   ctx.closePath();
    //}    

    ////Кривая Безье
    //ctx.beginPath();
    //ctx.moveTo(100, 100);
    //ctx.bezierCurveTo(120, 80, 160, 20, 100, 200);
    //ctx.stroke();
    //ctx.closePath();

    ////дуга окружности красного цвета, построенная с помощью кривой Безье
    //ctx.beginPath();
    //ctx.strokeStyle = "red";
    //ctx.moveTo(100, 100);
    //ctx.quadraticCurveTo(200, 100, 200, 200);
    //ctx.stroke();
    //ctx.closePath();

    ////сектор окружности красного цвета
    //ctx.beginPath();
    //ctx.fillStyle = "red";
    //ctx.moveTo(100, 100);
    //ctx.quadraticCurveTo(200, 100, 200, 200);
    //ctx.lineTo(100, 200);
    //ctx.fill();
    //ctx.closePath();

    ////Пример создания прямоугольника со скругленными углами
    //ctx.beginPath();
    //ctx.moveTo(20, 0);
    //ctx.lineTo(180, 0);
    //ctx.quadraticCurveTo(200, 0, 200, 20);
    //ctx.lineTo(200, 80);
    //ctx.quadraticCurveTo(200, 100, 180, 100);
    //ctx.lineTo(20, 100);
    //ctx.quadraticCurveTo(0, 100, 0, 80);
    //ctx.lineTo(0, 20);
    //ctx.quadraticCurveTo(0, 0, 20, 0);
    //ctx.stroke();
    //ctx.closePath();

    ////Рисуем фигуру, состоящую их трех накладывающихся друг на друга разноцветных
    ////квадратов.
    //ctx.beginPath();
    //ctx.moveTo(0, 0);
    //ctx.fillStyle = "red";
    //ctx.rect(50, 50, 50, 50);
    //ctx.fillStyle = "green";
    //ctx.rect(75, 75, 50, 50);
    //ctx.fillStyle = "blue";
    //ctx.rect(100, 100, 50, 50);
    //ctx.fill();
    //ctx.closePath();

    ////Атрибуты линии
    // ctx.fillStyle = 'red';
    // ctx.font = 'bold 13pt Courier';
    // ctx.strokeStyle = 'blue';
    // ctx.textBaseline = 'top';
    // ctx.lineWidth = 20;
    // const caps = ['butt', 'round', 'square'];
    // const joins = ['round', 'bevel', 'miter'];

    // for (let j = 0; j < 3; ++j) {
      // for (let k = 0; k < 3; ++k) {
          // ctx.lineCap = caps[j];
          // ctx.lineJoin = joins[k];

          // ctx.fillText(' cap:' + caps[j], 33 + j * 180, 45 + k * 120);
          // ctx.fillText('join:' + joins[k], 33 + j * 180, 65 + k * 120);

          // ctx.beginPath();
          // ctx.moveTo(20 + j * 180, 100 + k * 120);
          // ctx.lineTo(20 + j * 180, 20 + k * 120);
          // ctx.lineTo(155 + j * 180, 20 + k * 120);
          // ctx.lineTo(155 + j * 180, 100 + k * 120);
          // ctx.stroke();
          // ctx.closePath();
      // }
    // }

    ////Определение вхождения точки в состав контура
    //ctx.beginPath();
    //ctx.rect(50, 50, 50, 50);
    //ctx.stroke();
    //ctx.closePath();
    //if (ctx.isPointInPath(60, 40)) {
    //   window.alert("Stroke contains point");
    //}
	
	//cамостоятельная работа
	ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.fillStyle = "red";
    ctx.rect(50, 50, 50, 50);
    //ctx.fillStyle = "green";
    ctx.rect(70, 100, 10, 25);
	ctx.rect(25, 125, 100, 10);
	ctx.rect(50, 125+10, 50, 50);
	ctx.rect(50, 125+10+50, 10, 25);
	ctx.rect(50+30+10, 125+10+50, 10, 25);
    //ctx.fillStyle = "blue";
    //ctx.rect(100, 100, 50, 50);
    ctx.fill();
    ctx.closePath();
}
