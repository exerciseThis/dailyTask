//Observer design pattern  

function Engine() {
    this.handlers = [];
}
 
Engine.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    run: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
function run() {
 
    var handler1 = function(item) { 
        print(item+"\n"); 
    };

    var handler2 = function(item) {
        alert(item+"!!! ")
    }
 
    var engine1 = new Engine();
 
    engine1.subscribe(handler1);
    engine1.run('First run');
    engine1.subscribe(handler2);
    engine1.run('Second run');
    engine1.unsubscribe(handler2);
    engine1.run("Third run");

}