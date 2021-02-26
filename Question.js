class Question {
    constructor(){
      this.input = createInput("Name");
      this.button = createButton("Play");
      this.title = createElement("h3");
      this.question = createElement("h3");
      this.option1 = createElement("h4");
      this.option2 = createElement("h4");
      this.option3 = createElement("h4");
      this.option4 = createElement("h4");
      this.input2 = createInput("Enter The Correct Option");
    }
  
    hide(){
      this.title.hide();
      this.input.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(450,25);
      this.input.position(130,300);
      this.input2.position(300,300);
      this.button.position(150,350);
      this.question.html("Question:- What is your favourite Outdoor Game,Mobile Game and Subject?");
      this.question.position(150,80);
      this.option1.html("1: Cricket,Free Fire,S.S");
      this.option1.position(150,120);
      this.option2.html("2: VolleyBall,Free Fire,Math");
      this.option2.position(150,160);
      this.option3.html("3: Cricket,Free Fire,Math");
      this.option3.position(150,200);
      this.option4.html("4: VolleyBall,Free Fire,S.S");
      this.option4.position(150,240);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.input2.hide();
        contestant.name = this.input.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
  }
  