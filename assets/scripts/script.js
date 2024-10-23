// navbar functionality
mynav = document.getElementById("sidenav");
openbtn = document.getElementById("burger-icon");

openbtn.addEventListener("click", function () {
	mynav.classList.toggle("show");
});

// display the list of products
const products = [
	// PCs
	{
		id: 0,
		category: "Computers",
		imageSrc: "1.webp",
		title: "Gaming Desktop PC",
		price: "$1200",
		description:
			"A high-performance gaming desktop with an Intel Core i7 processor, 16GB RAM, and NVIDIA GTX 3080.",
		size: "L",
	},
	{
		id: 1,
		category: "Computers",
		imageSrc: "2.webp",
		title: "Workstation PC",
		price: "$1500",
		description:
			"Engineered for professionals with AMD Ryzen 9 CPU and 64GB of RAM for 3D rendering and video editing.",
		size: "XL",
	},
	{
		id: 2,
		category: "Computers",
		imageSrc: "3.webp",
		title: "All-in-One PC",
		price: "$1000",
		description:
			"Sleek all-in-one with a 27-inch 4K display and Intel Core i5 processor for home or office use.",
		size: "M",
	},
	{
		id: 3,
		category: "Computers",
		imageSrc: "4.webp",
		title: "Compact Mini PC",
		price: "$600",
		description:
			"Mini PC with 16GB RAM and 512GB SSD, perfect for light gaming and portability.",
		size: "S",
	},
	{
		id: 4,
		category: "Computers",
		imageSrc: "5.webp",
		title: "Budget Desktop PC",
		price: "$500",
		description:
			"Affordable PC with Intel Core i5, 8GB RAM, and 1TB hard drive for students or home users.",
		size: "M",
	},
	{
		id: 5,
		category: "Computers",
		imageSrc: "6.webp",
		title: "High-End Gaming PC",
		price: "$2500",
		description:
			"Features Intel Core i9 and NVIDIA RTX 4090 for ultra-realistic gaming with ray tracing.",
		size: "XL",
	},
	{
		id: 6,
		category: "Computers",
		imageSrc: "7.webp",
		title: "Business Desktop PC",
		price: "$1100",
		description:
			"Intel Core i7 and 32GB RAM for multitasking, with enterprise-level security features.",
		size: "L",
	},
	{
		id: 7,
		category: "Computers",
		imageSrc: "8.webp",
		title: "Home Office PC",
		price: "$908",
		description:
			"Intel Core i5, 16GB RAM, and 1TB SSD for remote work and quiet home office setups.",
		size: "M",
	},

	// Keyboards
	{
		id: 8,
		category: "Keyboards",
		imageSrc: "9.webp",
		title: "Mechanical Gaming Keyboard",
		price: "$100",
		description:
			"RGB backlit mechanical keyboard with customizable macros for gamers.",
		size: "M",
	},
	{
		id: 9,
		category: "Keyboards",
		imageSrc: "10.webp",
		title: "Wireless Ergonomic Keyboard",
		price: "$80",
		description:
			"Ergonomically designed wireless keyboard for long hours of comfortable typing.",
		size: "L",
	},
	{
		id: 10,
		category: "Keyboards",
		imageSrc: "11.webp",
		title: "Compact Keyboard",
		price: "$50",
		description:
			"Compact and portable keyboard ideal for mobile workstations.",
		size: "S",
	},
	{
		id: 11,
		category: "Keyboards",
		imageSrc: "12.webp",
		title: "Bluetooth Keyboard",
		price: "$60",
		description: "Bluetooth-enabled keyboard with multi-device pairing.",
		size: "M",
	},
	{
		id: 12,
		category: "Keyboards",
		imageSrc: "13.webp",
		title: "Mechanical Keyboard with Numpad",
		price: "$90",
		description:
			"Full-sized mechanical keyboard with a dedicated numeric keypad.",
		size: "L",
	},
	{
		id: 13,
		category: "Keyboards",
		imageSrc: "14.webp",
		title: "Waterproof Keyboard",
		price: "$45",
		description: "Durable, waterproof keyboard for everyday use.",
		size: "M",
	},
	{
		id: 14,
		category: "Keyboards",
		imageSrc: "15.webp",
		title: "RGB Mechanical Keyboard",
		price: "$110",
		description:
			"High-quality RGB keyboard with customizable lighting effects.",
		size: "M",
	},
	{
		id: 15,
		category: "Keyboards",
		imageSrc: "16.webp",
		title: "Silent Mechanical Keyboard",
		price: "$85",
		description:
			"A silent mechanical keyboard designed for quiet typing in office environments.",
		size: "M",
	},

	// Headphones
	{
		id: 16,
		category: "Headphones",
		imageSrc: "17.webp",
		title: "Wireless Over-Ear Headphones",
		price: "$150",
		description:
			"Premium wireless headphones with active noise cancellation.",
		size: "L",
	},
	{
		id: 17,
		category: "Headphones",
		imageSrc: "18.webp",
		title: "In-Ear Bluetooth Headphones",
		price: "$80",
		description:
			"Compact Bluetooth headphones with long battery life, ideal for workouts.",
		size: "XS",
	},
	{
		id: 18,
		category: "Headphones",
		imageSrc: "19.webp",
		title: "Gaming Headset",
		price: "$120",
		description:
			"Surround sound gaming headset with a detachable microphone.",
		size: "M",
	},
	{
		id: 19,
		category: "Headphones",
		imageSrc: "20.webp",
		title: "Noise-Cancelling Headphones",
		price: "$200",
		description:
			"Over-ear noise-cancelling headphones with memory foam ear pads.",
		size: "L",
	},
	{
		id: 20,
		category: "Headphones",
		imageSrc: "21.webp",
		title: "Studio Monitor Headphones",
		price: "$250",
		description:
			"High-fidelity studio headphones designed for professional audio mixing.",
		size: "L",
	},
	{
		id: 21,
		category: "Headphones",
		imageSrc: "22.webp",
		title: "Sports Earbuds",
		price: "$60",
		description: "Waterproof sports earbuds with secure fit for workouts.",
		size: "XS",
	},
	{
		id: 22,
		category: "Headphones",
		imageSrc: "23.webp",
		title: "Wireless Earbuds",
		price: "$100",
		description:
			"Truly wireless earbuds with a charging case for on-the-go use.",
		size: "XS",
	},
	{
		id: 23,
		category: "Headphones",
		imageSrc: "24.webp",
		title: "Bud24.webpget Over-Ear Headphones",
		price: "$40",
		description: "Affordable over-ear headphones with clear sound quality.",
		size: "M",
	},

	// Mice
	{
		id: 24,
		category: "Mice",
		imageSrc: "25.webp",
		title: "Wireless Gaming Mouse",
		price: "$60",
		description:
			"Ergonomic wireless gaming mouse with adjustable DPI and RGB lighting.",
		size: "S",
	},
	{
		id: 25,
		category: "Mice",
		imageSrc: "26.webp",
		title: "Wired Optical Mouse",
		price: "$20",
		description:
			"Reliable wired mouse with precise tracking for everyday use.",
		size: "XS",
	},
	{
		id: 26,
		category: "Mice",
		imageSrc: "27.webp",
		title: "Bluetooth Travel Mouse",
		price: "$35",
		description: "Compact Bluetooth mouse for professionals on the go.",
		size: "XS",
	},
	{
		id: 27,
		category: "Mice",
		imageSrc: "28.webp",
		title: "Vertical Ergonomic Mouse",
		price: "$50",
		description:
			"Vertical mouse for wrist comfort during long computer sessions.",
		size: "M",
	},
	{
		id: 28,
		category: "Mice",
		imageSrc: "29.webp",
		title: "RGB Gaming Mouse",
		price: "$70",
		description:
			"Gaming mouse with full RGB lighting and high-precision sensor.",
		size: "S",
	},
	{
		id: 29,
		category: "Mice",
		imageSrc: "30.webp",
		title: "Ambidextrous Mouse",
		price: "$25",
		description:
			"Designed for both left- and right-handed users with smooth tracking.",
		size: "S",
	},
	{
		id: 30,
		category: "Mice",
		imageSrc: "31.webp",
		title: "Silent Click Mouse",
		price: "$30",
		description:
			"Mouse with silent click buttons, perfect for quiet workspaces.",
		size: "S",
	},
	{
		id: 31,
		category: "Mice",
		imageSrc: "32.webp",
		title: "Rechargeable Wireless Mouse",
		price: "$40",
		description:
			"Eco-friendly wireless mouse with rechargeable battery and USB-C charging.",
		size: "S",
	},
];
const categories = [...new Set(products.map((p) => p.category))];
console.log(categories);

const productsWrapper = document.querySelector("main .wrapper");
console.log(productsWrapper);
const productsAsHTML = products.map((product, i) => {
	return {
		category: product.category,
		markup: `<article class="product-card">
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

`<section class="products">
				<h1 class="title">computers</h1>
				<div class="wrapper">
					<article class="product-card">
						<div class="image">
							<img src="../../assets/images/products/1.webp" alt="" />
						</div>
						<button>
							<i class="fa-solid fa-cart-plus"></i> Add To Cart
						</button>
						<h4 class="title">MSI Raider GE78 HX</h4>
						<p class="price">189$</p>
					</article>
					
				</div>
			</section>`;
productsAsHTML.forEach((product) =>
	productsWrapper.insertAdjacentHTML("beforeend", product.markup)
);
