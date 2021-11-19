        // <head>
        //     <meta charset="UTF-8">
        //         <meta
        //             name="viewport"
        //             content="width=device-width, initial-scale=1.0"
        //         >
        //             <title>Document</title>
        //             <style>
        //                 body {
        //                     margin: 0px;
        //                 margin-top: 10px;
        //                 padding: 0px;
        //                 height: 150vh;
        //         /* To produce scrolling effect */
        //     }

        //                 nav {
        //                     width: 100%;
        //                 background-color: rgb(39, 39, 39);
        //                 overflow: auto;
        //                 height: auto;
        //     }

        //                 .links {
        //                     display: inline-block;
        //                 text-align: center;
        //                 padding: 14px;
        //                 color: rgb(178, 137, 253);
        //                 text-decoration: none;
        //                 font-size: 17px;
        //     }

        //                 .links:hover {
        //                     background - color: rgb(100, 100, 100);
        //     }

        //                 .selected {
        //                     background - color: rgb(0, 18, 43);
        //     }

        //                 .fixed {
        //                     position: fixed;
        //                 top: 0;
        //     }

        //                 .fixed+.sample-content {
        //                     padding - top: 60px;
        //     }

        //             </style>
        //         </head>

        //         <body>
        //             <div class="sample-content">
        //                 <h1>Here are some headers</h1>
        //                 <h2>Here are some headers</h2>
        //                 <h3>Here are some headers</h3>
        //                 <h4>Here are some headers</h4>
        //             </div>
        //             <nav>
        //                 <a
        //                     class="links selected"
        //                     href="#"
        //                 > Home</a>
        //                 <a
        //                     class="links"
        //                     href="#"
        //                 > Login</a>
        //                 <a
        //                     class="links"
        //                     href="#"
        //                 > Register</a>
        //                 <a
        //                     class="links"
        //                     href="#"
        //                 > Contact Us</a>
        //                 <a
        //                     class="links"
        //                     href="#"
        //                 >More Info</a>
        //             </nav>
        //             <div class="sample-content">
        //                 <h1>Here are some headers after nav</h1>
        //                 <h2>Here are some headers after nav</h2>
        //                 <h3>Here are some headers after nav</h3>
        //                 <h4>Here are some headers after nav</h4>
        //             </div>
        //             <script>
        //                 window.onscroll = scrollShowNav;
        //                 let navEle = document.getElementsByTagName( "nav" )[0];
        //                 let stickyTop = navEle.offsetTop;
        //                 function scrollShowNav() {
        //         if ( window.pageYOffset >= stickyTop ) {
        //                     navEle.classList.add( "fixed" );
        //         } else {
        //                     console.log( 'WOW' );
        //                 navEle.classList.remove( "fixed" );
        //         }
        //     }
        //             </script>
        //         </body>

           

        //     <section class="contenedor-seccion-products">
        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="comfy bed"
        //                 data-categories="cats"
        //                 data-price="22"
        //                 data-rating="3"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://cdn.shopify.com/s/files/1/2430/2205/products/meowbilehomewilfieinside_1100x.jpg?v=1601074639"
        //                         alt="comfortable bed"
        //                         class="product-img"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Comfy Bed</h3>
        //                     <p class="product-price">$22</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Three stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <div class="product-actions">
        //                             <button
        //                                 type="button"
        //                                 class="button button-default button-addTo-cart"
        //                             >
        //                                 ADD TO CART
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="https://m.media-amazon.com/images/I/71OOcmmttGL._AC_SX466_.jpg"
        //                 data-categories="cats"
        //                 data-price="50"
        //                 data-rating="5"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://www.rover.com/blog/wp-content/uploads/2019/03/Vesper-with-cats.jpg"
        //                         alt="wood scratcher"
        //                         class="product-img"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Oak Scratcher</h3>
        //                     <p class="product-price">$50</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Five stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="carrot tree"
        //                 data-categories="bunnies"
        //                 data-price="26.39"
        //                 data-rating="2"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="img/Products/s-l640.jpg"
        //                         class="product-img"
        //                         alt="toy tree"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Carrot Tree</h3>
        //                     <p class="product-price">$26.39</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Two stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="interactive feeder"
        //                 data-categories="dogs"
        //                 data-price="20.99"
        //                 data-rating="3"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://www.shingavet.co.za/blog/wp-content/uploads/2014/08/green-interactive-feeder-296x300.jpg"
        //                         class="product-img"
        //                         alt="Dog Interactive Feeder"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Interactive Feeder</h3>
        //                     <p class="product-price">$20.99</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Three stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="bed with removable cover"
        //                 data-categories="dogs"
        //                 data-price="49.99"
        //                 data-rating="5"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://snoozerpetproducts.com/wp-content/uploads/2014/06/orthopedic-cozy-cave-dog-bed-snoozer-pet-products.jpg"
        //                         class="product-img"
        //                         alt="bed and cover"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Bed with Removable Cover</h3>
        //                     <p class="product-price">$49.99</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Five stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="toy bridge"
        //                 data-categories="hamsters"
        //                 data-price="10.30"
        //                 data-rating="1"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://ae01.alicdn.com/kf/H9e08a188a7864d25905934b044ba0200h/Hamster-Supplies-Color-Swing-Hamster-Toy-Nest-Rainbow-Bridge-Seesaw-Pet-Bear-Molar-Supplies-Toy.jpg_Q90.jpg_.webp"
        //                         class="product-img"
        //                         alt="hamster bridge"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Toy Bridge</h3>
        //                     <p class="product-price">$10.30</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="One star"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="grass house"
        //                 data-categories="bunnies"
        //                 data-price="19.99"
        //                 data-rating="3"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://petovly.com/wp-content/uploads/2021/03/Bunny-Grass-House-.jpg"
        //                         class="product-img"
        //                         alt="pet house"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Grass House</h3>
        //                     <p class="product-price">$19.99</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Three stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="food maze"
        //                 data-categories="cats"
        //                 data-price="$32.50"
        //                 data-rating="2"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://m.media-amazon.com/images/I/71lHUId6eDL._AC_SL1250_.jpg"
        //                         class="product-img"
        //                         alt=""
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Food Maze</h3>
        //                     <p class="product-price">$32.50</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Two stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="professional brushes set"
        //                 data-categories="dogs"
        //                 data-price="30.25"
        //                 data-rating="4"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://ae01.alicdn.com/kf/Hc324c3bcf50549ed894755e9fdda33d7i/1PC-Professional-Pet-Double-Open-Knot-Rake-Tie-Comb-Stainless-Steel-Dog-Comb-Brush-Hair-Removal.jpg"
        //                         class="product-img"
        //                         alt="pet brushes"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Professional Brushes Set</h3>
        //                     <p class="product-price">$30.25</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Four stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="soft bed"
        //                 data-categories="house"
        //                 data-price="15.99"
        //                 data-rating="3"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://i5.walmartimages.com/asr/06ce1cdf-bd7f-4539-82ab-878cfc13d0d4_1.8e4ee87f24bf539fc99667e72823a734.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        //                         class="product-img"
        //                         alt="dog bed"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Soft Bed</h3>
        //                     <p class="product-price">$15.99</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Three stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="rope toys set"
        //                 data-categories="Canine"
        //                 data-price="12.30"
        //                 data-rating="3"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://m.media-amazon.com/images/I/91nbP9bR1ZL._AC_SX466_.jpg"
        //                         class="product-img"
        //                         alt="three rope balls"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Rope Toys Set</h3>
        //                     <p class="product-price">$12.30</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Four stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //         <div>
        //             <article
        //                 class="product"
        //                 data-name="automatic feeder"
        //                 data-categories="Animals"
        //                 data-price="35.99"
        //                 data-rating="5"
        //             >
        //                 <div class="product-img-container">
        //                     <img
        //                         src="https://images-na.ssl-images-amazon.com/images/I/615JY7JPrUL._AC_UL200_SR200,200_.jpg"
        //                         class="product-img"
        //                         alt="hamster feeder"
        //                     >
        //                 </div>
        //                 <div class="product-body">
        //                     <h3 class="product-name">Automatic Feeder</h3>
        //                     <p class="product-price">$35.99</p>
        //                     <p class="Product Description">Lorem, ipsum dolor sit amet consectetur
        //                         adipisicing elit. Quidem perferendis perspiciatis itaque esse tempora sed
        //                         repellat enim officiis, consectetur sit quia pariatur. Aut enim dignissimos
        //                         doloremque culpa tenetur. Possimus, quasi.</p>
        //                     <div
        //                         class="rating"
        //                         aria-label="Five stars"
        //                     >
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                         <i class="Star"></i>
        //                     </div>
        //                     <div class="product-actions">
        //                         <button
        //                             type="button"
        //                             class="button button-default button-addTo-cart"
        //                         >
        //                             ADD TO CART
        //                         </button>
        //                     </div>
        //                 </div>
        //             </article>
        //         </div>

        //     </section>
