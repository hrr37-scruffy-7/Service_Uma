const mongoose = require('mongoose');
var Image = require('../database');

mongoose.connect('mongodb://localhost/images', { useNewUrlParser: true });

var images = [
  new Image({
    imagePath: 'https://www.google.com/aclk?sa=l&ai=DChcSEwj6xZXf86XhAhUiGH0KHcS1DLgYABABGgJwdg&sig=AOD64_26-M4oPh9iPCekz4VM6N94l_7Q3g&ctype=5&q=&ved=0ahUKEwj6tI_f86XhAhUCMnwKHeZXC2YQwg8Iaw&adurl=https://www.walmart.com/ip/Boomer-amp-George-Darker-Stain-Duplex-Dog-House-with-FREE-Dog-Doors/24224852%3Fwmlspartner%3Dwlpa%26selectedSellerId%3D1172%26adid%3D22222222227017373499%26wl0%3D%26wl1%3Ds%26wl2%3Dc%26wl3%3D52580183655%26wl4%3Dpla-79652106255%26wl5%3D9031927%26wl6%3D%26wl7%3D%26wl8%3D%26wl9%3Dpla%26wl10%3D8453398%26wl11%3Donline%26wl12%3D24224852%26wl13%3D%26veh%3Dsem',
    imageId: 23958457
  }),
  new Image({
    imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2FPETCO%2F1216511-right-1&imgrefurl=https%3A%2F%2Fwww.petco.com%2Fshop%2Fen%2Fpetcostore%2Fproduct%2Fdog%2Fhouses-for-dogs%2Fware-premium-plus-a-frame-dog-houses&docid=O6Mf3iprcE9_WM&tbnid=BvZZNptwzuwLXM%3A&vet=10ahUKEwjl5tfL96fhAhVVnJ4KHYfaAWoQMwiDAigDMAM..i&w=1500&h=1500&bih=818&biw=1671&q=dog%20house&ved=0ahUKEwjl5tfL96fhAhVVnJ4KHYfaAWoQMwiDAigDMAM&iact=mrc&uact=8',
    imageId: 23958457
  })
];

var done = 0;
for (var i = 0; i < images.length; i++){
  images[i].save(function(err, result){
    done++;
    if (done === images.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}