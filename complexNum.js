/*
This is a JavaScript Library used to calculate complex numbers usnig JavaScript programming language.
Created by David Leni Fernandez, in 6/27/2020.
You can find more JavaScript applications on engcalculator.blogspot.com
*/
//Complex Number Source Code <start>
var complexNum = {
    addRectangular: function (real1, imag1, real2, imag2){
        var real = real1 + real2;
        var imag = imag1 + imag2;
        var num = {
            real: real, 
            imag: imag,
            magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
            angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag / real)* 180/Math.PI))
        };
        return num;
        },
    addPolar: function (magnitude1, angle1, magnitude2, angle2, type){
        if(type == "d"){
            var real = magnitude1 * (Math.cos(angle1 * Math.PI / 180)) + magnitude2 * (Math.cos(angle2 * Math.PI / 180));
            var imag = magnitude1 * (Math.sin(angle1 * Math.PI / 180)) + magnitude2 * (Math.sin(angle2 * Math.PI / 180));
            var num = {
                real: real,
                imag: imag,
                magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
                angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag / real)* 180/Math.PI))
            };
            return num;
        } else if(type == "r"){
            var real = magnitude1 * (Math.cos(angle1)) + magnitude2 * (Math.cos(angle2));
            var imag = magnitude1 * (Math.sin(angle1)) + magnitude2 * (Math.sin(angle2));
            var num = {
                real: real,
                imag: imag,
                magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
                angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag / real)))
            };
            return num;
        } else{
            alert("Wrong or missing angle type!\n The type should be in degree or radian.");
        }
    },
    subRectangular: function (real1, imag1, real2, imag2){
        var real = real1 - real2;
        var imag = imag1 - imag2;
        var num = {
        real: real, 
        imag: imag,
        magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
        angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag / real) * 180 / Math.PI)) 
        };
        return num;
    },
    subPolar: function (magnitude1, angle1, magnitude2, angle2, type){
        if(type == "d"){
            var real = magnitude1 * (Math.cos(angle1 * Math.PI / 180)) - magnitude2 * (Math.cos(angle2 * Math.PI / 180));
            var imag = magnitude1 * (Math.sin(angle1 * Math.PI / 180)) - magnitude2 * (Math.sin(angle2 * Math.PI / 180));
            var num = {
                real: real,
                imag: imag,
                magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
                angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag/real)* 180/Math.PI))
            };
            return num;
        } else if(type == "r"){
            var real = magnitude1 * (Math.cos(angle1)) - magnitude2 * (Math.cos(angle2));
            var imag = magnitude1 * (Math.sin(angle1)) - magnitude2 * (Math.sin(angle2));
            var num = {
                real: real,
                imag: imag,
                magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
                angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag/real)))
            };
            return num;
        } else{
            alert("Wrong or missing angle type!\n The type should be in degree or radian.");
        }
    },
    mulRectangular: function (real1, imag1, real2, imag2){
        var real = (real1*real2)-(imag1*imag2);
        var imag = (real1*imag2)+(real2*imag1);
        var num = {
        real: real, 
        imag: imag,
        magnitude: Math.sqrt(Math.pow(real, 2) + Math.pow(imag, 2)),
        angle: complexNum.phaseQuadrant(real, imag, (Math.atan(imag / real) * 180 / Math.PI))
        };
        return num;
    },
    mulPolar: function (magnitude1, angle1, magnitude2, angle2, type){
        if(type == "d"){
        var magnitude = magnitude1 * magnitude2;
        var angle = angle1 + angle2;
        var real = magnitude * (Math.cos(angle * Math.PI / 180));
        var imag = magnitude * (Math.sin(angle * Math.PI / 180));
        var num = {
        magnitude: magnitude,
        angle: complexNum.phaseQuadrant(real, imag, (angle)),
        real: real,
        imag: imag
        };
        return num;
        } else if(type == "r"){
        var magnitude = magnitude1 * magnitude2;
        var angle = angle1 + angle2;
        var real = magnitude * (Math.cos(angle));
        var imag = magnitude * (Math.sin(angle));
        var num = {
        magnitude: magnitude,
        angle: complexNum.phaseQuadrant(real, imag, (angle)),
        real: real,
        imag: imag
        };
        return num;
        }else{
            alert("Wrong or missing angle type!\n The type should be in degree or radian.");
        }
    },
    divRectangular: function (real1, imag1, real2, imag2){
        imag2 *= -1;
        var real = ((real1*real2)+(-1*imag1*imag2))/(Math.pow(real2, 2)+Math.pow(imag2, 2));
        var imag = ((real1*imag2)+(imag1*real2))/(Math.pow(real2, 2)+Math.pow(imag2, 2));
        var magnitude = Math.sqrt(Math.pow(real, 2)+Math.pow(imag, 2));
        var angle = Math.atan(imag/real)* 180/Math.PI;
        var num = {
        magnitude: magnitude,
        angle: complexNum.phaseQuadrant(real, imag, (angle)),
        real: real,
        imag: imag
        };
        return num;
    },
    divPolar: function (magnitude1, angle1, magnitude2, angle2, type){
        if(type == "d"){
        var magnitude = magnitude1 / magnitude2;
        var angle = angle1 - angle2;
        var real = magnitude * (Math.cos(angle * Math.PI / 180));
        var imag = magnitude * (Math.sin(angle * Math.PI / 180)); 
        var num = {
        magnitude: magnitude,
        angle: complexNum.phaseQuadrant(real, imag, (angle)),
        real: real,
        imag: imag
        };
        return num;
        } else if(type == "r"){
        var magnitude = magnitude1 / magnitude2;
        var angle = angle1 - angle2;
        var real = magnitude * (Math.cos(angle));
        var imag = magnitude * (Math.sin(angle));
        var num = {
        magnitude: magnitude,
        angle: complexNum.phaseQuadrant(real, imag, (angle)),
        real: real,
        imag: imag
        };
        return num;
        }else{
            alert("Wrong or missing angle type!\n The type should be in degree or radian.");
        }
    },
    fromPolarToRectangular: function(magnitude, angle, type){
        if(type == "d"){
        var real = magnitude * (Math.cos(angle * Math.PI / 180));
        var imag = magnitude * (Math.sin(angle * Math.PI / 180)); 
        var num = {
        real: real,
        imag: imag
        };
        return num;
        } else if(type == "r"){
        var real = magnitude * (Math.cos(angle));
        var imag = magnitude * (Math.sin(angle));
        var num = {
        real: real,
        imag: imag
        };
        return num;
        }else{
            alert("Wrong or missing angle type!\n The type should be in degree or radian.");
        }
    },
    fromRectangularToPolar: function(real, imag){
        var magnitude = Math.sqrt(Math.pow(real, 2)+Math.pow(imag, 2));
        var angle = Math.atan(imag/real)* 180/Math.PI;
        var num = {
        magnitude: magnitude,
        angle: complexNum.phaseQuadrant(real, imag, (angle)),
        };
        return num;
    },
    phaseQuadrant: function(real, imag, angle){
        if(real > 0 && imag > 0){//First Quadrant
            return angle;
        } else if(real < 0 && imag > 0){//Second Quadrant
            angle *= -1;
            return 180 - angle;
        } else if(real < 0 && imag < 0){//Third Quadrant
            return -1 * (180 - angle);
        } else{//Fourth Quadrant
            return angle;
        }
    }
};
//Complex Number Source Code <end>