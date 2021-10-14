block_y = 1;
block_x = 1;

console.log("If the output is presented the program or my dame JS editor is working ")

block_iamge_width = 350;
block_image_height = 450;

var block_image_object = "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_image_object = Img;

        block_iamge_object.scaleToWidth(block_image_width);
        block_iamge_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:block_y,
            left:block_x
        })
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log("Key Pressed");

    if(keyPresesd == '82')
    {
        new_image("rr1.png");
        console.log("Red Master Ranger");
    } 

    if(keyPresesd == '72')
    {
        block_x = 200;
        new_image("gr.png");
        console.log("Green Master Ranger");
    }

    if(keyPresesd == '89')
    {
        block_x = 350;
        new_image("yr.png");
        console.log("Yellow Master Ranger");

    }

    if(keyPresesd == '80')
    {
        block_x = 600;
        new_image("pr.png");
        console.log("Pink Master Ranger");

    }

    if(keyPresesd == '66')
    {
        block_x = 700;
        new_image("br.png");
        console.log("Blue Master Ranger");

    }
}