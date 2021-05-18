class Block{
  constructor(x, y, width, height) {
     this.blockimage = loadImage("block.png")
      this.fade = 255
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
       if(this.body.speed < 3){
        var pos= this.body.position;
        imageMode(CENTER);
        image(this.blockimage,pos.x,pos.y,this.width, this.height);
       }
       else{
         World.remove(world, this.body)
         push()
         this.fade = this.fade -5
         tint(255, this.fade)
         image(this.blockimage,this.body.position.x,this.body.position.y, this.width,this.height)
         pop()
       }
      
    }

}