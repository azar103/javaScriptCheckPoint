class Ball {
  ballType;
  constructor(ballType="regular"){
    this.ballType = ballType
  }
}


ball1 = new Ball();
console.log(ball1.ballType)
ball2 = new Ball("super");
console.log(ball2.ballType)