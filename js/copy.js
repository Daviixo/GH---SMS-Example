function copyText() {
    var aName = document.getElementById("agentsName").value;
    var smsDate = document.getElementById("dateTime").value;
    var toPhoneN = document.getElementById("toPhoneNumber").value;
    var fromPhoneN = document.getElementById("fromPhoneNumber").value;
    var cTimeZone = document.getElementById("timeZone").value;
    var smsResults = document.getElementById("smsResults").value;

    var e = document.getElementById("smsType");
    var cSmsType = e.options[e.selectedIndex].text;
    

    //Now, let's get the current date

    var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var newTimeDate = smsDate.split("T");

    console.log(newTimeDate);

    document.getElementById("temp").value =
        "---Agents name---\n" + aName + " | " + today + 
        "\n\n --SMS Info--\nTo: " + toPhoneN +
        "\nFrom: " + fromPhoneN + 
        "\nOutbound or Inbound SMS?\n" + cSmsType +
        "\nDate/Time (Year/Month/Day):\n" + "Date: " +newTimeDate[0] + " // Time: " + newTimeDate[1] +
        "\nTimezone: " + cTimeZone +
        "\nResults: " + smsResults;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}