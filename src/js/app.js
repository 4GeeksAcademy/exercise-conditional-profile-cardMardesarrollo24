import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover === false) cover = "<div class='cover'></div>";

  let socialMediaLinks = "";

  if (variables.twitter) {
    socialMediaLinks += `<li><a href="https://twitter.com/${variables.twitter}"><i class="fab fa-twitter"></i></a></li>`;
  }
  if (variables.github) {
    socialMediaLinks += `<li><a href="https://github.com/${variables.github}"><i class="fab fa-github"></i></a></li>`;
  }
  if (variables.linkedin) {
    socialMediaLinks += `<li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>`;
  }
  if (variables.instagram) {
    socialMediaLinks += `<li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>`;
  }

  let socialMediaClass =
    variables.socialMediaPosition === "position-left"
      ? "position-left"
      : "position-right";

  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${variables.name == null ? "Lucy" : variables.name} ${
    variables.lastName == null ? "Biolet" : variables.lastName
  }</h1>
      <h2>${variables.role == null ? "Web Developer" : variables.role}</h2>
      <h3>${variables.city == null ? "Miami" : variables.city} ${
    variables.country == null ? "USA" : variables.country
  }</h3>
      <ul class="${socialMediaClass}">
        ${socialMediaLinks}
      </ul>
    </div>
  `;
}

window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };

  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value === "" || this.value === "null"
          ? null
          : this.value === "true"
          ? true
          : this.value === "false"
          ? false
          : this.value;

      render(Object.assign(window.variables, values));
    });
  });
};
