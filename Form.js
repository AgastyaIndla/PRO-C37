class Form {
    constructor(){
        this.button = createButton("REFRESH"); 
    }

    display(){
        this.button.mousePressed(()=>{
            refreshDrawing();
          });

          
        function refreshDrawing(){
            drawing = [];
            currentPath = [];
            path = [];
        }
    }
}