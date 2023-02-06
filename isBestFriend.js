/*
{ name: "abul", friend: "babul" },

{ name: "babul", friend: "abul" }
true
 */

/*
{ name: "abul", friend: "kabul" },

{ name: "kabul", friend: "sabul" }
false
 */ 

/*
{ name: "doe", friend: "alex" },

{ name: "john", friend: "doe" }
false
*/

function isBestFriend(object1, object2){
     if(object1.name == object2.friend && object2.name == object1.friend){
        return true;
     }
     else return false;
}
console.log(isBestFriend({ name: "abul", friend: "babul" },

{ name: "babul", friend: "abul" }))