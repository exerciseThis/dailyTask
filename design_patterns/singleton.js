//Singleton Window example
var SingletonWindow = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object({name: "The singleton window", width:800, height: 600});
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var window1 = SingletonWindow.getInstance();
    print(window1.name)
    var window2 = SingletonWindow.getInstance();
    print(window1.name)    
 
    print(instance1 === instance2);  
}

run()