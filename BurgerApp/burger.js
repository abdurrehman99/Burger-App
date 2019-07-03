let beef=0,cheese = 0,ketchup = 0,salad = 0;
let price = 30;
let br="<br>";
$('#cheese-btn').on('click',function()
{
    if(cheese<3)
    {
        $('#burger').after(`<div class="cheese"></div>`);
        cheese++;
        price+=30;
        $('#price').html(price);
    }
    else
    {
        swal({
            icon : 'warning',
            title : "That's enough for your burger :)",
        });
    } 
    
});

$('#ketchup-btn').on('click',function()
{
    if(ketchup<3)
    {
        $('#burger').after(`<div class="ketchup"></div>`);
        ketchup++;
        price+=10;
        $('#price').html(price);

    }
    else
    {
        swal({
            icon : 'warning',
            title : "That's enough for your burger :)",
        });
    }    
});

$('#beef-btn').on('click',function()
{
    if(beef<3)
    {
        $('#burger').after(`<div class="kebab"></div>`);
        beef++;
        price+=100;
        $('#price').html(price);

    }
    else
    {
        swal({
            icon : 'warning',
            title : "That's enough for your burger :)",
        });
    }
});

$('#salad-btn').on('click',function()
{
    if(salad<3)
    {
        $('#burger').after(`<div class="salad"></div>`);    
        salad++;
        price+=20;
        $('#price').html(price);

    }
    else
    {
        swal({
            icon : 'warning',
            title : "That's enough for your burger :)",
        });
    }
});

$('#order-btn').on('click',function()
{
    var span = document.createElement("span");
    span.innerHTML=`Beef Pattie : ${beef}<br>Cheese : ${cheese}<br>
    Ketchup : ${ketchup}<br>Salad : ${salad}<br><br><h4>Total Price : ${price}</h4>`;
    
    if(beef >=1)
    {
        swal({
            title : 'Your Delicious Burger Has',
            content: span,
            buttons: [true, "Confirm Order !"], 
            closeOnClickOutside: false,
            closeOnEsc: false,
        })
        .then((next) => 
          {
            if(next) {
                $('.salad, .cheese, .ketchup, .kebab').remove();
                beef=0,cheese = 0,ketchup =  0,salad = 0,price = 30;
                $('#price').html(price);
                swal({
                    icon : 'success',
                    title : 'Your burger has been ordered !'
                });

            } 
          });
    }

    else
    {
        swal({
            title: 'Plz add some Ingredients !',
        });
    }
});