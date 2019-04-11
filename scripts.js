// 1- Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const targetSelector = document.querySelector(".article__header").textContent = "Welcome to Dillon's Blog";

    // console.log("targetSelector", targetSelector)

// 2- Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const targetSelector2 = document.querySelectorAll(".article__header");

for (let i = 0; i < targetSelector2.length; i++) {
  // console.log("targetSelector2[i]", targetSelector2[i])
  targetSelector2[i].classList.add("important")
}

// OR

targetSelector2.forEach(header => {
    // console.log("what is header?", header)
    header.classList.add("forEach");
})

// 3- Obtain a reference the element with a class of dashed and remove it.

const removeDashed = document.querySelector(".dashed")
removeDashed.classList.remove("dashed");
    
    // console.log("removeDashed", removeDashed)

// 4- Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const addGoldenrod = document.querySelector(".article__footer");
addGoldenrod.classList.add("goldenrod");

    // console.log("addGoldenrod",addGoldenrod)

