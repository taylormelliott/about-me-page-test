let yestBtn = document.querySelector("#yes");

let noBtn = document.querySelector("#no");

let body = document.querySelector("body");

yestBtn.addEventListener("click", () => {
  alert("Thanks for seeing the beauty in nothing");
});

noBtn.addEventListener("click", () => {
  const jesusBtn = document.createElement("img");
  jesusBtn.src =
    "https://res.cloudinary.com/teepublic/image/private/s--zpGpBPMI--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1571803033/production/designs/6433690_0.jpg";
  body.appendChild(jesusBtn);
});
