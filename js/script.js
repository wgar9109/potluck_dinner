const addGuestButton = document.querySelector(".invite");
const guestInputLabel = document.querySelector(".add-guest label");
const guestInput = document.querySelector(".add-guest input");
const guestList = document.querySelector(".guest-list");
const guestCount = document.querySelector(".attendance");
const guestFull = document.querySelector(".alert");
const assignButton = document.querySelector(".assign");
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", funtion () {
    const guest = guestInput.value;
    if (guest !== "") {
        addToList(guest);
        updateGuestCount();
        clearInput();
    }
});

const addToList = function (guest) {
    const listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
};

const clearInput = function () {
    guestInput.value = "";
};

const updateGuestCount = function () {
    const guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length;

    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};

const assignItems = function () {
    const potLuckItems = [
        "cheese",
        "crackers",
        "fresh fruit",
        "coleslaw",
        "apple cake",
        "gazpacho",
        "baguette",
        "egg salad",
        "summer rolls",
        "hummus",
        "cookies"
    ];

    const allGuests = document.querySelectorAll(".guest-list li");

    for (let guest of allGuests) {
        let randomPotLuckIndex = Math.floor(Math.random() * potLuckItems.length);
        let randomPotLuckItem = potLuckItems[randomPotLuckIndex];

        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotLuckItem}.`;
        assignedItems.append(listItem);

        potLuckItems.splice(randomPotluckIndex, 1);
    }
};

assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});
