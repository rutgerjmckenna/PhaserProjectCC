//Create config to start app

//Make sure to add 'scene' as a key or the assets won't load!
//This can be seen as an object containing the preloaded assets, and
//the create function.

const config = {
    width: 300,
    height: 500,
    backgroundColor: 0xdda0dd,
    scene: {
      preload,
      create,
      update,
    }
  }
  
  const game = new Phaser.Game(config);
  
  //Making a new game to track within our scene
  
  let gameState = {}
  
  //Preload assets to have initially loaded when program is run
  
  //Remember loading assets uses this.load.(whatever is loaded)
  //then takes the reference name followed by the actual link!
  
  function preload(){
    this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png')
  }
  
  //Create new game
  
  function create() {
    gameState.codey = this.add.sprite(30, 60, 'codey');
    gameState.cursors = this.input.keyboard.createCursorKeys();
  }
  
  //Remember! Much like React, Phaser uses a state. So updating what
  //is happening in the game (i.e. movement) updates our state
  //Now we make a conditional to check just that (in this case if the
  //key is pressed down) to update Codey's position on the y axis!
  
  function update() {
    if (gameState.cursors.down.isDown) {
      gameState.codey.y += 1;
    }
  }