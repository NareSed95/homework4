
// Question N1
const starsNumber = function(star) {
	if (star === 0) {
		return"";
	}
	    return "*" + starsNumber(star - 1);
};
const spacesNumber = function(space) {
	if (space === 0) {
		return "";
	}
		return " " + spacesNumber(space - 1);
};

const triangleStars = function(input) { 
	if (input === 0) {
		return "";
	}
	console.log(spacesNumber((number - input)) + (starsNumber((2 * input) - 1)));
	return triangleStars(input - 1);
};
const number = 10;
const result = triangleStars(number);

//Question N2

const pow = function(base, n) {
    if(n<=1)
        return base;
    if (n===0) {
      return 1;
    }
    else {
    }
      return base * pow(base, n-1);
    };
  console.log(pow(20, 5));
  
  
// Question N3
const reverseMystring = function(string) {
    const array = string.length;
    const showLastCharacter = function(array) {
     if(array<=0)
    return'';
             if(string.length===1) {
    return str; 
             }
    return string[array-1] + showLastCharacter(array-1);   
    };
    return showLastCharacter(array);
};
console.log(reverseMystring('Nare Sedrakyan'));

//Question N4
const checkerboard=function(n, stars)
{const lines=n;
const interprat=function(n, stars)
{
	if(n<=0)
		return "";
	if(stars)
		return " "+interprat(n-1, !stars);
	else
		return "*"+interprat(n-1, !stars);
};
const a=function(n)
{
	if(n<=0)
		return;
	if(n%2===0)
		console.log(" "+interprat(2*lines));
	else
		console.log(interprat(2*lines));
	a(n-1);
};
return a (n);
};
checkerboard(8);

// Question 5
const stars = function(a) {
  if(a<=0) {
  return'';
}
return ('*' + stars(a-1));
};

const spaces = function(a) {
  if(a<=0) {
  return'';
}
return (' ' + spaces(a-1));
};

const parus = function(a) {
   const F1 = function(b) {
     if(b<=1) {
    return '';
   } 
   console.log(spaces(b-1) + stars(((((3*a)/4)-((3*a)/4)/6)-b)+1));
   F1(b-1);
   };
   return F1(((3*a)/4)-((3*a)/4)/6);
  };
  
  const kay = function(a) {
    const F2 = function(b) {
      if(b<=0) {
        return '';
      }
      console.log(spaces(a-1) + '*');
      F2(b-1);
    };
    return F2(((3*a)/4)/6);
  };
  
  const bark = function(a) {
    const F3 = function(b) {
     if(b<=a/3) {
    return '';
   } 
   console.log(spaces(a-b) + stars(3*b-1));
   F3(b-1);
   };
   return F3(a);
  };
  
const sailboat = function(height) {
 if(height<7) {
   return 'It is possible to print sailboat using height smaller than 7, but lets print much more picturesque';
 }
 parus(height);
 kay(((3*height)/4)-((2*height)/4)/6);
 bark(3*(height/4));
};

sailboat(7);