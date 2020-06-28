#How to program using JavaScript complex lib.
First, embed this tag in your header tag:
<script src="https://davidleni.github.io/javascript-complexlib/complexNum.js"></script>
Before we start you should know I made complex numbers have the type of Object not a number in JavaScript.

For example, typeof(complexNum) //This will return Object.

Note! We use complexNum object when we deal with complex numbers.

Let's say we have complex numbers for example,
X = 3-j4
Y = 2+j6
W = 31∠50°
Z = 10∠-36°
And we want to Add, Subtract, Multiply, and Divide them as well as converting from one complex form to another.

#To Add two complex numbers in rectangular form:
complexNum.addRectangular(real1, imag1, real2, imag2).property

X = 3-j4 = real1 - imag1 >>> real1 = 3 , imag1 = -4
Y = 2+j6 = real2 - imag2 >>> real2 = 2 , imag2 = 6
ans = X + Y
In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X + Y:
complexNum.addRectangular(3, -4, 2, 6).real               //This will return 5
complexNum.addRectangular(3, -4, 2, 6).imag               //This will return 2
complexNum.addRectangular(3, -4, 2, 6).magnitude          //This will return 5.385164807134504
complexNum.addRectangular(3, -4, 2, 6).angle              //This will return 21.80140948635181 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Subtract two complex numbers in rectangular form:
complexNum.subRectangular(real1, imag1, real2, imag2).property

X = 3-j4 = real1 - imag1 >>> real1 = 3 , imag1 = -4
Y = 2+j6 = real2 - imag2 >>> real2 = 2 , imag2 = 6
ans = X - Y
In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X - Y:
complexNum.subRectangular(3, -4, 2, 6).real               //This will return 1
complexNum.subRectangular(3, -4, 2, 6).imag               //This will return -10
complexNum.subRectangular(3, -4, 2, 6).magnitude          //This will return 10.04987562112089
complexNum.subRectangular(3, -4, 2, 6).angle              //This will return -84.28940686250037 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Multiply two complex numbers in rectangular form:
complexNum.mulRectangular(real1, imag1, real2, imag2).property

X = 3-j4 = real1 - imag1 >>> real1 = 3 , imag1 = -4
Y = 2+j6 = real2 - imag2 >>> real2 = 2 , imag2 = 6
ans = X * Y
In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X * Y:
complexNum.mulRectangular(3, -4, 2, 6).real               //This will return 30
complexNum.mulRectangular(3, -4, 2, 6).imag               //This will return 10
complexNum.mulRectangular(3, -4, 2, 6).magnitude          //This will return 31.622776601683793
complexNum.mulRectangular(3, -4, 2, 6).angle              //This will return 18.43494882292201 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Divide two complex numbers in rectangular form:
complexNum.divRectangular(real1, imag1, real2, imag2).property

X = 3-j4 = real1 - imag1 >>> real1 = 3 , imag1 = -4
Y = 2+j6 = real2 - imag2 >>> real2 = 2 , imag2 = 6
ans = X / Y
In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X / Y:
complexNum.divRectangular(3, -4, 2, 6).real               //This will return -0.45
complexNum.divRectangular(3, -4, 2, 6).imag               //This will return -0.65
complexNum.divRectangular(3, -4, 2, 6).magnitude          //This will return 0.7905694150420949
complexNum.divRectangular(3, -4, 2, 6).angle              //This will return -124.69515353123396 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Add two complex numbers in polar form:
complexNum.addPolar(magnitude1, angle1, magnitude2, angle2, angle_type).property

W = 31∠50°  = magnitude1 ∠angle1 >>> magnitude1= 31, angle1= 50
Z = 10∠-36° = magnitude2 ∠angle2 >>> magnitude2= 10, angle2= -36
The angle_type = "d" for degree and angle_type = "r" for radian.
ans = X + Y

Note! angle_type is important because without it you will get an alert with error message

In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X + Y:
complexNum.addPolar(31, 50, 10, -36, "d").real               //This will return 28.016585844032193
complexNum.addPolar(31, 50, 10, -36, "d").imag               //This will return 17.869525213763588
complexNum.addPolar(31, 50, 10, -36, "d").magnitude          //This will return 33.2302424565539
complexNum.addPolar(31, 50, 10, -36, "d").angle              //This will return 32.530525523101765 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Subtract two complex numbers in polar form:
complexNum.subPolar(magnitude1, angle1, magnitude2, angle2, angle_type).property

W = 31∠50°  = magnitude1 ∠angle1 >>> magnitude1= 31, angle1= 50
Z = 10∠-36° = magnitude2 ∠angle2 >>> magnitude2= 10, angle2= -36
The angle_type = "d" for degree and angle_type = "r" for radian.
ans = X - Y

Note! angle_type is important because without it you will get an alert with error message

In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X - Y:
complexNum.subPolar(31, 50, 10, -36, "d").real               //This will return 11.836245956533245
complexNum.subPolar(31, 50, 10, -36, "d").imag               //This will return 29.625230259613048
complexNum.subPolar(31, 50, 10, -36, "d").magnitude          //This will return 31.902209739744396
complexNum.subPolar(31, 50, 10, -36, "d").angle              //This will return 68.22167933861564 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Multiply two complex numbers in polar form:
complexNum.mulPolar(magnitude1, angle1, magnitude2, angle2, angle_type).property

W = 31∠50°  = magnitude1 ∠angle1 >>> magnitude1= 31, angle1= 50
Z = 10∠-36° = magnitude2 ∠angle2 >>> magnitude2= 10, angle2= -36
The angle_type = "d" for degree and angle_type = "r" for radian.
ans = X * Y

Note! angle_type is important because without it you will get an alert with error message

In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X * Y:
complexNum.mulPolar(31, 50, 10, -36, "d").real               //This will return 300.7916751455589
complexNum.mulPolar(31, 50, 10, -36, "d").imag               //This will return 74.995787635897
complexNum.mulPolar(31, 50, 10, -36, "d").magnitude          //This will return 310
complexNum.mulPolar(31, 50, 10, -36, "d").angle              //This will return 14 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.

#To Divide two complex numbers in polar form:
complexNum.divPolar(magnitude1, angle1, magnitude2, angle2, angle_type).property

W = 31∠50°  = magnitude1 ∠angle1 >>> magnitude1= 31, angle1= 50
Z = 10∠-36° = magnitude2 ∠angle2 >>> magnitude2= 10, angle2= -36
The angle_type = "d" for degree and angle_type = "r" for radian.
ans = X / Y

Note! angle_type is important because without it you will get an alert with error message

In complexNum we have four properties
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)
.magnitude  >>> This will return the magnitude of the result. (polar form)
.angle      >>> This will return the angle in degree of the result. (polar form)

To solve this example X / Y:
complexNum.divPolar(31, 50, 10, -36, "d").real               //This will return 0.2162450686067889
complexNum.divPolar(31, 50, 10, -36, "d").imag               //This will return 3.092448555805455
complexNum.divPolar(31, 50, 10, -36, "d").magnitude          //This will return 3.1
complexNum.divPolar(31, 50, 10, -36, "d").angle              //This will return 86 remember this is in degree

Note! Multiply the angle with Math.PI/180 to convert it from degree to radian.


#To convert from polar form to rectangular form:
complexNum.fromPolarToRectangular(magnitude, angle, angle_type).property

W = 31∠50°  = magnitude ∠angle >>> magnitude= 31, angle= 50
The angle_type = "d" for degree and angle_type = "r" for radian.
ans = real +j imag

Note! angle_type is important because without it you will get an alert with error message

In complexNum we have four properties but here we use only two
.real       >>> This will return the real part of the result. (rectangular form)
.imag       >>> This will return the imaginary part of the result. (rectangular form)

To solve this example W:
complexNum.fromPolarToRectangular(31, 50, "d").real               //This will return 19.92641590028272
complexNum.fromPolarToRectangular(31, 50, "d").imag               //This will return 23.747377736688318


#To convert from rectangular form to polar form:
complexNum.fromRectangularToPolar(real, imag).property

X = 3-j4 = real - imag >>> real = 3 , imag = -4
ans = magnitude ∠angle°

In complexNum we have four properties but here we use only two
.magnitude       >>> This will return the magnitude of the result. (polar form)
.angle       >>> This will return the angle of the result. (polar form)

To solve this example X:
complexNum.fromRectangularToPolar(3, -4, "d").magnitude              //This will return 5
complexNum.fromRectangularToPolar(3, -4, "d").angle               //This will return -53.13010235415598


