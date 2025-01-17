$(function () {
  let contact = $("#contact");
  let aboutMeBtn = $("#aboutMeBtn");
  let aboutMe = $("#aboutMe");
  aboutMe.hide();

  contact.on("click", function (e) {
    e.preventDefault();

    const email = "stojchevkristijan@gmail.com";

    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
      if (contact.text() === "contact") {
        contact.text(`${email} - copied`);
      } else if (contact.text() === `${email} - copied`) {
        contact.text("contact");
      }
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });

  aboutMeBtn.on("click", function () {
    aboutMe.toggle(500);
  });
});
