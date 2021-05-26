$(function () {
  let contact = $("#contact");
  let aboutMeBtn = $("#aboutMeBtn");
  let aboutMe = $("#aboutMe");
  aboutMe.hide();

  contact.on("click", function (e) {
    e.preventDefault();
    if (contact.text() == "contact") {
      contact.text("stojcev_kristijan@hotmail.com");
    } else if (contact.text() == "stojcev_kristijan@hotmail.com") {
      contact.text("contact");
    }
  });

  aboutMeBtn.on("click", function () {
    aboutMe.toggle(500);
  });
});
