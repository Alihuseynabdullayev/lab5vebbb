const defaultData = {
  email: "alihuseynabdullayev610@gmail.com",
  phone: "+994 51 514 20 66",
  about: "Mən Web HTML, CSS və JavaScript, Python, C++ sahəsində biliklərim var və daim inkişaf edirəm.",
  education: "Azərbaycan Texniki Universiteti – İnformasiya Təhlükəsizliyi (2024 - 2029)",
  experience: "Frontend Developer: Web saytların dizayn və inkişafı. Kuryer: Bolt, metro çatdırılmaları.",
  skills: "HTML, CSS, JavaScript, Python, C++",
  contact: "Bakı, Azərbaycan, Xətai rayonu. Instagram: alihuseyn.aa"
};

let data = JSON.parse(localStorage.getItem("cvData")) || {...defaultData};
renderData();

function renderData() {
  for (let key in data) {
    const el = document.getElementById(key);
    if (el) {
      el.innerHTML = `<textarea oninput="autoSave('${key}', this.value)">${data[key]}</textarea>`;
    }
  }
  document.getElementById("email").innerText = data.email;
  document.getElementById("phone").innerText = data.phone;

  const savedTime = localStorage.getItem("lastSaved");
  if (savedTime) {
    document.getElementById("last-saved").innerText = "Son yaddaş: " + savedTime;
  }
}

function autoSave(key, value) {
  data[key] = value;
  localStorage.setItem("cvData", JSON.stringify(data));
  localStorage.setItem("lastSaved", new Date().toLocaleString());
  renderData();
}

function resetToDefault() {
  data = {...defaultData};
  localStorage.setItem("cvData", JSON.stringify(data));
  localStorage.setItem("lastSaved", new Date().toLocaleString());
  renderData();
}

function toggleAccordion(id) {
  const content = document.getElementById(id);
  content.classList.toggle("open");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Şəkil yükləmə
document.getElementById("image-upload").addEventListener("change", function(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("profile-image").src = e.target.result;
    localStorage.setItem("profileImage", e.target.result);
  };
  reader.readAsDataURL(event.target.files[0]);
});

window.addEventListener("load", function() {
  const savedImage = localStorage.getItem("profileImage");
  if (savedImage) {
    document.getElementById("profile-image").src = savedImage;
  }
});
