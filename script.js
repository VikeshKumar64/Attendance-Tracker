// document.addEventListener("DOMContentLoaded", function () {
//     const generateLinkButton = document.getElementById("generateLinkButton");
//     const uniqueLinkDisplay = document.getElementById("uniqueLink");

//     generateLinkButton.addEventListener("click", function () {
//         const name = document.getElementById("name").value;
//         const className = document.getElementById("class").value;

//         // Generate unique link using name and class/roll number
//         const uniqueLink = `https://example.com/attendance/${name}-${className}`;
//         uniqueLinkDisplay.textContent = `Your Unique Link: ${uniqueLink}`;

//         // Add a hyperlink to attendance.html with the generated unique link
//         const attendanceLink = document.createElement("a");
//         attendanceLink.href = `attendance.html?link=${roll}`;
//         attendanceLink.textContent = "Go to Attendance Page";
//         document.body.appendChild(attendanceLink);
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    const uniqueLinkDisplay = document.getElementById("uniqueLink");
    const generateLinkButton = document.getElementById("generateLinkButton");

    generateLinkButton.addEventListener("click", function () {
        const name = document.getElementById("name").value; 
        const className = document.getElementById("class").value;
        const cleanedName = name.trim(); 
        const encodedName = encodeURIComponent(cleanedName);

        const spaces = encodeURIComponent(" ");
        const threeSpaces = spaces.repeat(3);

        const uniqueLink = `https://example.com/attendance/${threeSpaces}${encodedName}-${className}`;

        // Create input element to display the link
        const linkInput = document.createElement("input");
        linkInput.type = "text";
        linkInput.value = uniqueLink;
        linkInput.readOnly = true; // Make the input read-only
        linkInput.style.width = "100%"; // Set input width to 100% of its parent container
        uniqueLinkDisplay.innerHTML = ""; // Clear the content of uniqueLinkDisplay div
        uniqueLinkDisplay.appendChild(linkInput); // Append the input element

        const attendanceLink = document.createElement("a");
        attendanceLink.href = `attendance.html?link=${encodeURIComponent(uniqueLink)}`; 
        document.body.appendChild(attendanceLink);
    });
});


