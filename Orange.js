class Orange{
    constructor(x,y,width,height) {
      var options = {
          //isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     // console.log(this.body.speed);
    // console.log(mouseY);
      if(this.body.speed < 8){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(247,148,49);
      rect(pos.x, pos.y, this.width, this.height);
    }else{
      World.remove(world, this.body);
    }

    }
  };
