$(function () {
  let contact = $("#contact");

  contact.on("click", function (e) {
    e.preventDefault();
    if (contact.text() == "contact") {
      contact.text("stojcev_kristijan@hotmail.com");
    } else if (contact.text() == "stojcev_kristijan@hotmail.com") {
      contact.text("contact");
    }
  });
});
