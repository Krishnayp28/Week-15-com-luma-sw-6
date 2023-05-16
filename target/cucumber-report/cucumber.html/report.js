$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Gear.feature");
formatter.feature({
  "line": 1,
  "name": "Gear Page Test",
  "description": "",
  "id": "gear-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3653393400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should add product to cart successfully",
  "description": "",
  "id": "gear-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Bags tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see product name Overnight Duffle on that product page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I change Qty to 3",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see You added Overnight Duffle to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see product name Overnight Duffle",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see Qty is 3",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see price is $135.00",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I change Qty 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Update Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 76874400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 2201380000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnBagsTab()"
});
formatter.result({
  "duration": 856848800,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnOvernightDuffle()"
});
formatter.result({
  "duration": 886640900,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffleOnThatProductPage()"
});
formatter.result({
  "duration": 112933000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.iChangeQtyTo(int)"
});
formatter.result({
  "duration": 185379200,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 87524200,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "duration": 1743938000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 1889220000,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 220010600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "GearTestSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "duration": 64712100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "GearTestSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "duration": 846808400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.iChangeQty(int)"
});
formatter.result({
  "duration": 116387700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnUpdateShoppingCart()"
});
formatter.result({
  "duration": 59435800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "GearTestSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "duration": 4152281600,
  "status": "passed"
});
formatter.after({
  "duration": 699265400,
  "status": "passed"
});
formatter.uri("Men.feature");
formatter.feature({
  "line": 1,
  "name": "Men Page Test",
  "description": "",
  "id": "men-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2577787700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Add Product to Cart Successfully",
  "description": "",
  "id": "men-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover Men menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Bottoms menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Pant menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on product name Cronus Yoga Pant and click on size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on Cronus Yoga Pant and click on colour Black",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on Cronus Yoga Pant and click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message You added Cronus Yoga Pant to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see that product name Cronus Yoga Pant",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see product size is 32",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see product colour Black",
  "keyword": "And "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iMouseHoverMenMenu()"
});
formatter.result({
  "duration": 2180573600,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iMouseHoverOnBottomsMenu()"
});
formatter.result({
  "duration": 160671800,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iClickOnPantMenu()"
});
formatter.result({
  "duration": 1045444800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 65
    }
  ],
  "location": "MenSteps.iMouseHoverOnProductNameCronusYogaPantAndClickOnSize(int)"
});
formatter.result({
  "duration": 204717100,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iMouseHoverOnCronusYogaPantAndClickOnColourBlack()"
});
formatter.result({
  "duration": 155415900,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iMouseHoverOnCronusYogaPantAndClickOnAddToCartButton()"
});
formatter.result({
  "duration": 162543400,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iShouldSeeMessageYouAddedCronusYogaPantToYourShoppingCart()"
});
formatter.result({
  "duration": 1911910700,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 2017775500,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 27190000,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iShouldSeeThatProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 24814900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 29
    }
  ],
  "location": "MenSteps.iShouldSeeProductSizeIs(int)"
});
formatter.result({
  "duration": 22405800,
  "status": "passed"
});
formatter.match({
  "location": "MenSteps.iShouldSeeProductColourBlack()"
});
formatter.result({
  "duration": 23438000,
  "status": "passed"
});
formatter.after({
  "duration": 661018300,
  "status": "passed"
});
formatter.uri("Women.feature");
formatter.feature({
  "line": 1,
  "name": "Women Page Test",
  "description": "",
  "id": "women-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2372026200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "User should Sort by Product Name Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Sort By filter Product Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2154027000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 147058800,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1084347700,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iSelectSortByFilterProductName()"
});
formatter.result({
  "duration": 20000,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iShouldSeeProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 1298350200,
  "status": "passed"
});
formatter.after({
  "duration": 668629200,
  "status": "passed"
});
formatter.before({
  "duration": 2870969600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "User should Sort by Price Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Select Sort By filter Price",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see products price display in Low to High",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2160140100,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iMouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 135911800,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1563306400,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iSelectSortByFilterPrice()"
});
formatter.result({
  "duration": 20300,
  "status": "passed"
});
formatter.match({
  "location": "WomenSteps.iShouldSeeProductsPriceDisplayInLowToHigh()"
});
formatter.result({
  "duration": 3086674600,
  "status": "passed"
});
formatter.after({
  "duration": 638952900,
  "status": "passed"
});
});