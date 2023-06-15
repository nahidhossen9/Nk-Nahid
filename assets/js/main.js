(() => {

    const open_nav = document.querySelector(".open_nav");
    close_nav = document.querySelector(".close_nav");
    side_area = document.querySelector(".side_area");
    nav = document.querySelector(".nav");

    mediaSize = 992;
    open_nav.addEventListener("click", toggleNavOpen);
    close_nav.addEventListener("click", toggleNavClose);
    menuOverly = document.querySelector('.menu_overly');
    menuOverly.addEventListener('click', toggleMenuOverly);

    // Select all nav_link
    const nav_item = document.querySelectorAll(".nav_item");
    nav_item.forEach(item => {
        item.addEventListener("click", (e) => {

            if (e.target.hasAttribute("data-toggle")) {
                const itemHasChildren = e.target.parentElement;
                if (itemHasChildren.classList.contains("active")) {
                    collapseSubMenu();
                } else {
                    if (nav.querySelector(".itemHasChildren.active")) {
                        collapseSubMenu();
                    }

                    itemHasChildren.classList.add("active");
                    const subMenu = document.querySelector(".sub_menu");
                    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                }
            }

            nav_item.forEach(item => {
                item.classList.remove("nav_item_active");
            })
            item.classList.add("nav_item_active");


        })
    });

    // sub_menu 
    let subMenu = document.querySelectorAll(".sub_menu .nav_item");
    subMenu.forEach(subMenuitem => {
        subMenuitem.addEventListener("click", () => {





            subMenu.forEach(subMenuitem => {
                subMenuitem.classList.remove("sub_item_active");
            })
            subMenuitem.classList.add("sub_item_active");

        })
    });

    // Quick Link
    // let quickLink = document.querySelectorAll(".contact_middle_quick_link_nav_item");
    // quickLink.forEach((quickLinkItem) => {
    //     quickLinkItem.addEventListener("click", () => {

    //         quickLink.forEach((quickLinkItem) => {
    //             quickLinkItem.classList.remove("activeQL");
    //         })
    //         quickLinkItem.classList.add("activeQL");

    //     })

    // });


    function toggleNavOpen() {
        side_area.classList.add("open");
        open_nav.classList.remove('open_nav');
        close_nav.classList.add('close_nav_Show');
        menuOverly.classList.toggle("menuOverlyActivve");
        document.body.classList.add("hidden_scrolling");
    }

    function toggleNavClose() {
        side_area.classList.remove("open");
        open_nav.classList.add('open_nav');
        close_nav.classList.remove('close_nav_Show');
        menuOverly.classList.remove("menuOverlyActivve");
        document.body.classList.remove("hidden_scrolling");

        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }
    }

    function toggleMenuOverly() {
        side_area.classList.remove("open");
        open_nav.classList.add('open_nav');
        close_nav.classList.remove('close_nav_Show');
        menuOverly.classList.remove("menuOverlyActivve");
        document.body.classList.remove("hidden_scrolling");
        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }
    }


    function collapseSubMenu() {
        nav.querySelector(".itemHasChildren.active .sub_menu").removeAttribute("style");
        nav.querySelector(".itemHasChildren.active").classList.remove("active");
    }


    // nav_link
    home = document.querySelector(".home");
    about = document.querySelector(".about");
    service = document.querySelector(".service");
    project = document.querySelector(".project");
    contact = document.querySelector(".contact");
    menuOverly = document.querySelector(".menu_overly");

    home.addEventListener("click", () => {
        open_nav.classList.add('open_nav');
        close_nav.classList.remove("close_nav_Show");
        document.body.classList.remove("hidden_scrolling");
        side_area.classList.remove("open");
        menuOverly.classList.remove("menuOverlyActivve");
        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }

    });
    about.addEventListener("click", () => {
        open_nav.classList.add('open_nav');
        close_nav.classList.remove("close_nav_Show");
        document.body.classList.remove("hidden_scrolling");
        side_area.classList.remove("open");
        menuOverly.classList.remove("menuOverlyActivve");
        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }

    });
    service.addEventListener("click", () => {
        open_nav.classList.add('open_nav');
        close_nav.classList.remove("close_nav_Show");
        document.body.classList.remove("hidden_scrolling");
        side_area.classList.remove("open");
        menuOverly.classList.remove("menuOverlyActivve");
        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }

    });
    project.addEventListener("click", () => {
        open_nav.classList.add('open_nav');
        close_nav.classList.remove("close_nav_Show");
        document.body.classList.remove("hidden_scrolling");
        side_area.classList.remove("open");
        menuOverly.classList.remove("menuOverlyActivve");
        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }

    });
    contact.addEventListener("click", () => {
        open_nav.classList.add('open_nav');
        close_nav.classList.remove("close_nav_Show");
        document.body.classList.remove("hidden_scrolling");
        side_area.classList.remove("open");
        menuOverly.classList.remove("menuOverlyActivve");
        if (nav.querySelector(".itemHasChildren.active")) {
            collapseSubMenu();
        }

    });


})();





// typed skill
var type = new Typed("#professionDynamic", {
    strings: [
        "Web-Designer ",
        "",
        "Web-Developer "
        // "",
        // "Graphics-Designer "
    ],
    typeSpeed: 90,
    backSpeed: 40,
    loop: true
});