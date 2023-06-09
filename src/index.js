var other = (function(){ 
    function other(){
    } 
    other.prototype.myFunction = function() { 
        console.log("Hello from d.ts file"); 
    } 
    /** 
    * add to global namespace 
    */ 


})(); 
exports.other = other;