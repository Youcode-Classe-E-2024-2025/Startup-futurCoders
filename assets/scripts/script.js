"use strict";
// navbar functionality
const mynav = document.getElementById("sidenav");
const openbtn = document.getElementById("burger-icon");

openbtn.addEventListener("click", function () {
	mynav.classList.toggle("show");
});

//////// display the list of products ////////
const currentUrlPathname = window.location.pathname;
import products from "./data.js";

// making this code running just if we are on the products page
if (currentUrlPathname === "/pages/products/products.html") {
	// importing the list of products
	// get categories of products
	const categories = [...new Set(products.map((p) => p.category))];

	// select the main container
	const main = document.querySelector("#products-main");
	const productsAsHTML = products.map((product, i) => {
		return {
			category: product.category,
			markup: `
		<article class="product-card">
			<div class="image">
				<img src="../../assets/images/products/${product.imageSrc}" alt="${product.title}" />
			</div>
			<button>
				<i class="fa-solid fa-cart-plus"></i> Add To Cart
			</button>
			<h4 class="title">${product.title}</h4>
			<p class="price">${product.price}</p>
		</article>`,
		};
	});

	const productByCategoryAsHTML = categories.map((category) => {
		// // create a section
		const productsSection = document.createElement("section");
		productsSection.setAttribute("class", "products");
		// // adding a title to section
		const title = document.createElement("h1");
		title.setAttribute("class", "title");
		title.textContent = category;
		productsSection.appendChild(title);
		// // adding a wrapper for the products
		const wrapper = document.createElement("div");
		wrapper.setAttribute("class", "wrapper");
		// adding products filtered by category to the wrapper
		let products = productsAsHTML.filter(
			(product) => product.category.toLowerCase() === category.toLowerCase()
		);
		products = products.map((product) => product.markup).join("");
		wrapper.innerHTML = products;
		// appending the wrapper in the section
		productsSection.appendChild(wrapper);
		return { category: category, markup: productsSection };
	});

	// main.insertAdjacentElement("beforeend", productByCategoryAsHTML[0].markup);
	function displayProductsByCategory(category) {
		const sectionProducts = productByCategoryAsHTML.find(
			(section) => section.category.toLowerCase() === category.toLowerCase()
		);

		main.insertAdjacentElement("beforeend", sectionProducts.markup);
	}

	function displayAllProducts() {
		categories.forEach((category) => displayProductsByCategory(category));
	}

	displayAllProducts();
}
