/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let str = s;

    const map = new Map();
    map.set("(", ')' );
    map.set("[", ']') ;
    map.set("{", "}" ) ;

    let temp;
    let strng = s;

    while (str.length >=1) {

        //temp = str.substr(str.length -1 , str.length)
        //console.log(temp);


        temp = str.substr(0, 1);
        if (map.has(temp)) {
            if (map.get(temp) === (str.substr(1, 1))) {
                strng = str;
                str = strng.substr(2, strng.length);
            }
            else if (map.get(temp) === str.substr(str.length -1 , str.length)) {
                strng = str;
                str = strng.substr(1, strng.length - 2);
            }
            else {
                return false;
            }

        }
        else {
            return false;
        }

    }



    return true;
};



console.log(isValid("([]())"));
