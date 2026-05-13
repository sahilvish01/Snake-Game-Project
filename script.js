let canvas = document.querySelector("canvas")

let pen = canvas.getContext("2d");

// let food = canvas.getContext("2d");

let snakecell = [[0,0]];

let cell = 50;

let direction = "right";

let foodcellX = Math.floor(Math.random()*20)*50;
let foodcellY = Math.floor(Math.random()*12)*50;

// let snakeSize = 0;

// food.fillStyle = "red";

// food.fillRect(foodcellX, foodcellY, 50, 50);

// let foodarr = [[(Math.floor(Math.random()*20) )*cell], [(Math.floor(Math.random()*6))*cell]]; 


let GameOver = false;

let score = 0;

let id = setInterval(() => {
    // if(snakecell[snakecell.length - 1][0] < canvas.width && snakecell[snakecell.length-1][1] < canvas.height && snakecell[snakecell.length-1][0] >= 0 && snakecell[snakecell.length-1][1] >= 0) 
    // {
    //     draw();
    //     update();
    //     // GenFood(); 
    // }

    draw();
    update();
}, 200)


document.addEventListener("keydown", (e) => {

    if(e.key == "ArrowUp")
    {
        direction = "up";
    }
    else if(e.key == "ArrowDown")
    {
        direction = "down";
    }
    else if(e.key == "ArrowLeft")
    {
        direction = "left";
    }
    else
    {
        direction = "right";
    }

})


function draw()
{
    
    if(GameOver)
    {
        clearInterval(id);
        pen.fillStyle = "white"
        pen.font = "40px sans-serif";
        pen.fillText("Game Over", 400, 300);
        return;

    }
    
    pen.clearRect(0, 0, 1000, 600);


    if(snakecell[snakecell.length-1][0] == foodcellX && snakecell[snakecell.length-1][1] == foodcellY)
    {
        // pen.fillStyle = "red";

        foodcellX = Math.floor(Math.random()*20)*50;
        foodcellY = Math.floor(Math.random()*12)*50;

        score++;

        // cell += 50;
        // console.log(foodcellX,foodcellY,"hehe");
        

        // snakeSize = snakeSize + 1;

    }


    pen.fillStyle = "white"
    pen.font = "20px sans-sarif";
    pen.fillText(`Score: ${score}`, 20, 30);

    for(let a of snakecell)
    {
        pen.fillStyle = "lightblue";
    
        // if(direction == "left" || direction == "right")
        // {
        //     pen.fillRect(a[0], a[1], cell + snakeSize, cell);
        // }
        // else
        // {
        //     pen.fillRect(a[0], a[1], cell, cell + snakeSize);
        // }

        // for(let i = 0; i <= snakeSize; i++)
        // {
        // }
        
        pen.fillRect(a[0], a[1], cell, cell);

        pen.fillStyle = "red";

        pen.fillRect(foodcellX, foodcellY, 50, 50);

        
        
        
    }

    
}

function update()
{

    // delcanvas.fillStyle = "black";
    let headX = snakecell[snakecell.length-1][0];
    let headY = snakecell[snakecell.length-1][1];

    if(direction == "right")
    {
        newX = headX + cell;
        newY = headY

        if(newX == canvas.width)
        {
            GameOver = true
        }

    }
    else if(direction == "left")
    {
        newX = headX - cell;
        newY = headY

        if(newX < 0)
        {
            GameOver = true
        }
    }
    else if(direction == "down")
    {
        newX = headX;
        newY = headY + cell;

        if(newY == canvas.height)
        {
            GameOver = true
        }

    }
    else
    {
        newX = headX;
        newY = headY - cell;

        if(newY < 0)
        {
            GameOver = true;
        }
    }


    snakecell.push([newX,newY]);

    if(!(snakecell[snakecell.length-1][0] == foodcellX && snakecell[snakecell.length-1][1] == foodcellY))
    {
        snakecell.shift();
    }

}



// function GenFood()
// {
//     if(snakecell[snakecell.length-1][0] == foodcellX && snakecell[snakecell.length-1][1] == foodcellY)
//     {
//         food.fillStyle = "red";

//         foodcellX = Math.floor(Math.random()*20)*50;
//         foodcellY = Math.floor(Math.random()*12)*50;

//         food.fillRect(foodcellX, foodcellY, 50, 50);
//     }
// }



// console.log((Math.floor(Math.random()*(20 - 0)) + 0)*50);

// console.log((Math.floor(Math.random()*(6 - 0)) + 0) * 50);


