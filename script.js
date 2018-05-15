$('document').ready(function(){
    
    var canvas = document.getElementById('canvas');
    canvas.width = 400;
    canvas.height = 400;
    
    var c = canvas.getContext('2d');
    
    
    var rows = 10;
    var cols = 10;
    var sideWidth = canvas.width/rows
    var grid = [];
    
    function Cell(x,y){
        this.x = x;
        this.y = y;
        
        this.show = function(){
            
            c.rect(this.x * sideWidth, this.y * sideWidth, sideWidth, sideWidth);
            c.strokeStyle = 0;
            c.stroke();
        }
    }
    
    for (var x = 0; x < rows; x++){
        for (var y = 0; y < cols; y++){
            var cell = new Cell(x,y)
            grid.push(cell);
        }
    }
    
    for (var i = 0; i < grid.length; i++){
        grid[i].show();
        console.log("fire!");
    }
})