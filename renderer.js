class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }

    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer)
    {
		var pt0 = {x : 90, y : 90};
		var pt1 = {x : 555, y : 300};
		this.drawRectangle(pt0, pt1, [255, 100, 90, 200], framebuffer);
		this.drawPoint(pt0,framebuffer);
		this.drawPoint(pt1, framebuffer);
		this.drawPoint({x : pt0.x, y : pt1.y}, framebuffer);
		this.drawPoint({x : pt1.x, y : pt0.y}, framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer)
	{
		var pt0 = {x : 350, y : 450};
		this.drawCircle(pt0, 100, [140,200,140,220], framebuffer);
		this.drawPoint(pt0, framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) 
	{
		var pt0 = {x : 150, y : 150};
		var pt1 = {x : 150, y : 350};
		var pt2 = {x : 350, y : 350};
		var pt3 = {x : 350, y : 150};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [100, 240, 255, 255], framebuffer);
		
		pt0 = {x : 470, y : 220};
		pt1 = {x : 615, y : 300};
		pt2 = {x : 500, y : 545};
		pt3 = {x : 650, y : 530};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [255, 240, 30, 255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) 
	{
		//J draw pattern
		var pt0 = {x : 75, y : 250};
		var pt1 = {x : 75, y : 150};
		var pt2 = {x : 120, y : 150};
		var pt3 = {x : 120, y : 250};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [255, 100, 255, 255], framebuffer);
		var pt0 = {x : 60, y : 250};
		var pt1 = {x : 60, y : 120};
		var pt2 = {x : 160, y : 105};
		var pt3 = {x : 170, y : 250};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [255, 100, 255, 255], framebuffer);
		this.drawPoint({x : 60, y : 250}, framebuffer);
		this.drawPoint({x : 75, y : 250}, framebuffer);
		this.drawLine({x : 60, y : 250}, {x : 75, y : 250}, [255, 100, 255, 255], framebuffer);
		this.drawPoint({x : 120, y : 250}, framebuffer);
		this.drawPoint({x : 120, y : 450}, framebuffer);
		this.drawLine({x : 120, y : 250}, {x : 120, y : 450}, [255, 100, 255, 255], framebuffer);
		this.drawPoint({x : 170, y : 250}, framebuffer);
		this.drawPoint({x : 170, y : 450}, framebuffer);
		this.drawLine({x : 170, y : 250}, {x : 170, y : 450}, [255, 100, 255, 255], framebuffer);
		
		this.drawPoint({x : 70, y : 430}, framebuffer);
		this.drawPoint({x : 220, y : 450}, framebuffer);
		this.drawPoint({x : 220, y : 430}, framebuffer);
		this.drawPoint({x : 70, y : 450}, framebuffer);
		this.drawRectangle({x : 70, y : 430}, {x : 220, y : 450}, [255, 100, 255, 255], framebuffer)
		
		// O draw pattern
		var pt0 = {x : 250, y : 250};
		var pt1 = {x : 250, y : 350};
		var pt2 = {x : 350, y : 350};
		var pt3 = {x : 350, y : 250};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [100, 100, 255, 255], framebuffer);
		
		var pt0 = {x : 250, y : 250};
		var pt1 = {x : 250, y : 150};
		var pt2 = {x : 350, y : 150};
		var pt3 = {x : 350, y : 250};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [100, 100, 255, 255], framebuffer);
	
		var pt0 = {x : 300, y : 250};
		this.drawCircle(pt0, 20, [100, 100, 255, 255], framebuffer);
		
		//S draw pattern
		pt0 = {x : 470, y : 220};
		pt1 = {x : 615, y : 300};
		pt2 = {x : 500, y : 545};
		pt3 = {x : 650, y : 530};
		this.drawBezierCurve(pt0, pt1, pt2, pt3, [255, 240, 30, 225], framebuffer);
		//H draw pattern
		pt2 = {x : 600, y : 300};
		pt0 = {x : 650, y : 200};
		this.drawRectangle(pt2, pt0, [120, 255, 255, 200], framebuffer);
		this.drawPoint(pt0, framebuffer);
		this.drawPoint(pt2, framebuffer);
		this.drawPoint({x : pt0.x, y : pt2.y}, framebuffer);
		this.drawPoint({x : pt2.x, y : pt0.y}, framebuffer);
		
		pt2 = {x : 700, y : 300};
		pt0 = {x : 750, y : 200};
		this.drawRectangle(pt2, pt0, [120, 255, 255, 200], framebuffer);
		this.drawPoint(pt0, framebuffer);
		this.drawPoint(pt2, framebuffer);
		this.drawPoint({x : pt0.x, y : pt2.y}, framebuffer);
		this.drawPoint({x : pt2.x, y : pt0.y}, framebuffer);
		
		this.drawLine({x : 650, y : 250}, {x : 700, y : 250}, [120, 255, 255, 200], framebuffer);
		this.drawPoint({x : 650, y : 250}, framebuffer);
		this.drawPoint({x : 700, y : 250}, framebuffer);
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawRectangle(left_bottom, right_top, color, framebuffer)
    {
		var rb = {x : right_top.x, y :left_bottom.y};
		var lt = {x : left_bottom.x, y : right_top.y};
		this.drawLine(left_bottom, lt, color, framebuffer);
		this.drawLine(left_bottom, rb, color, framebuffer);
		this.drawLine(right_top, rb, color, framebuffer);
		this.drawLine(right_top, lt, color, framebuffer);
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, color, framebuffer)
	{
		var theta = (2 * Math.PI) / this.num_curve_sections;
		var angle = 0;
		var i;
		var pt0;
		var pt1 =  {x : (center.x + radius), y : center.y};
		while(angle < 2 * Math.PI)
		{
			pt0 = pt1;
			angle = angle + theta;
			pt1 = {x : (center.x + Math.round(radius * Math.cos(angle))), y : (center.y + Math.round(radius * Math.sin(angle)))};
			this.drawLine(pt0, pt1, color, framebuffer);
			this.drawPoint(pt1, framebuffer);
		}
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(pt0, pt1, pt2, pt3, color, framebuffer)
	{
		var delta = 1.00 / this.num_curve_sections;
		var t = 0.00 + delta;
		var i;
		var point1;
		var point2 = pt0;
		while(t <= 1.01)
		{
			var ex = Math.round((Math.pow((1-t), 3) * pt0.x) + (3 * Math.pow((1-t), 2) * t * pt1.x) + (3 * (1-t) * Math.pow(t, 2) * pt2.x) + (Math.pow(t, 3) * pt3.x));
			var why = Math.round((Math.pow((1-t), 3) * pt0.y) + (3 * Math.pow((1-t), 2) * t * pt1.y) + (3 * (1-t) * Math.pow(t, 2) * pt2.y) + (Math.pow(t, 3) * pt3.y));
			point1 = point2;
			point2 = {x : ex, y : why};
			this.drawLine(point1, point2, color, framebuffer);
			this.drawPoint(point2, framebuffer);
			t = t + delta;
		}
		this.drawCPoint(pt0, framebuffer);
		this.drawCPoint(pt1, framebuffer);
		this.drawCPoint(pt2, framebuffer);
		this.drawCPoint(pt3, framebuffer);
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawLine(pt0, pt1, color, framebuffer)
    {
		var x0 = pt0.x;
		var y0 = pt0.y;
		var x1 = pt1.x;
		var y1 = pt1.y;
        if (Math.abs(y1 - y0) <= Math.abs(x1 - x0)) //|m| <= 1
			{
				if (x0 < x1)
				{
					drawLineLow(x0, y0, x1, y1, color, framebuffer);
				}
				else
				{
					drawLineLow(x1, y1, x0, y0, color, framebuffer);
				}
			}
		else
		{
			if (y0 < y1)
			{
				drawLineHigh(x0, y0, x1, y1, color, framebuffer);
			}
			else
			{
				drawLineHigh(x1, y1, x0, y0, color, framebuffer);
			}
		}
    }

	//a function to determine if a vertex should have a marker drawn. Then draws it.
	drawPoint(pt0, framebuffer)
	{
		if (this.show_points == true)
		{
			this.drawRectangle({x: pt0.x - 3, y: pt0.y - 3}, {x: pt0.x + 3, y: pt0.y + 3}, [0,0,0,255], framebuffer);
		}
	}
	
	//a function to determine if bezier curve control points should be drawn and then draws them.
	drawCPoint(pt0, framebuffer)
	{
		if (this.show_points == true)
		{
			this.drawRectangle({x: pt0.x - 3, y: pt0.y - 3}, {x: pt0.x + 3, y: pt0.y + 3}, [0,255,0,255], framebuffer);
		}
	}
};

//functions taken from code made in class
function pixelIndex(x, y, framebuffer)
{
	return 4 * y * framebuffer.width + 4 * x;
}

function setFramebufferColor(framebuffer,px,color)
{
		framebuffer.data[px + 0]=color[0];
		framebuffer.data[px + 1]=color[1];
		framebuffer.data[px + 2]=color[2];
		framebuffer.data[px + 3]=color[3];
}

function drawLineLow(x0, y0, x1, y1, color, framebuffer)
{
	var A = y1 - y0;
	var B = x0 - x1;
	var iy = 1;
	if(A < 0)
	{
		iy = -1;
		A *= -1;
	}
	var D = 2 + A + B;
	var x = x0;
	var y = y0;
	var px;

	while(x <= x1)
	{
		px = pixelIndex(x, y, framebuffer);
		setFramebufferColor(framebuffer, px, color);
		x++;
		if (D <= 0)
		{
			D += 2 * A;
		}
		else
		{
			D += 2 * A + 2 * B;
			y += iy;
		}
	}
}

function drawLineHigh(x0, y0, x1, y1, color, framebuffer)
{
	var A = x1 - x0;
	var B = y0 - y1;
	var ix = 1;
	if(A < 0)
	{
		ix = -1;
		A *= -1;
	}
	var D = 2 + A + B;
	var x = x0;
	var y = y0;
	var px;

	while(y <= y1)
	{
		px = pixelIndex(x, y, framebuffer);
		setFramebufferColor(framebuffer, px, color);
		y++;
		if (D <= 0)
		{
			D += 2 * A;
		}
		else
		{
			D += 2 * A + 2 * B;
			x += ix;
		}
	}
}