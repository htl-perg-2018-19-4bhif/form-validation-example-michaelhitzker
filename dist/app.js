$(document).ready(function () {
    var firstNameID = "#firstName";
    var errorFirstNameID = "#firstNameMandatory";
    var lastNameID = "#lastName";
    var errorLastNameID = "#lastNameMandatory";
    var mailID = "#email";
    var errorMailID = "#emailMandatory";
    var mailLabel = "#email";
    var selectID = "#mediaChannelSelect";
    var otherOption = "Other";
    var otherID = "#otherMediaChannel";
    var newsletterID = "#newsletter";
    var submitBtn = ".btn";
    checkVisibleError();
    displayOther();
    displayMail();
    $(firstNameID).on("input", function () {
        var empty = isEmpty(firstNameID);
        if (empty) {
            showError(errorFirstNameID);
        }
        else {
            hideError(errorFirstNameID);
        }
        checkVisibleError();
    });
    $(lastNameID).on("input", function () {
        var empty = isEmpty(lastNameID);
        if (empty) {
            showError(errorLastNameID);
        }
        else {
            hideError(errorLastNameID);
        }
        checkVisibleError();
    });
    $(mailID).on("input", function () { return displayMailError(); });
    $(selectID).change(function () { return displayOther(); });
    $(newsletterID).change(function () { return displayMail(); });
    function displayOther() {
        if (isOtherSelected(selectID)) {
            $(otherID).show();
        }
        else {
            $(otherID).hide();
        }
    }
    function displayMail() {
        if (isNewsletterChecked()) {
            showMailContent();
        }
        else {
            hideMailContent();
        }
        checkVisibleError();
    }
    function displayMailError() {
        var empty = isEmpty(mailID);
        if (empty) {
            showError(errorMailID);
        }
        else {
            hideError(errorMailID);
        }
        checkVisibleError();
    }
    function isNewsletterChecked() {
        return $(newsletterID).is(":checked");
    }
    function isOtherSelected(id) {
        var value = $(id).val().toString();
        console.log(value);
        return value === otherOption;
    }
    function isEmpty(id) {
        console.log(id);
        return $(id).val() === "";
    }
    function showError(id) {
        $(id).show();
    }
    function hideError(id) {
        $(id).hide();
    }
    function hideMailContent() {
        $(mailID).hide();
        $(mailLabel).hide();
        $(errorMailID).hide();
    }
    function showMailContent() {
        $(mailID).show();
        $(mailLabel).show();
        displayMailError();
    }
    function checkVisibleError() {
        var firstNameErrorHidden = $(errorFirstNameID).is(":hidden");
        var lastNameErrorHidden = $(errorLastNameID).is(":hidden");
        var mailErrorHidden = $(errorMailID).is(":hidden");
        var submitCanBeVisible = (firstNameErrorHidden && lastNameErrorHidden && mailErrorHidden);
        if (submitCanBeVisible) {
            $(submitBtn).prop("disabled", false);
        }
        else {
            $(submitBtn).prop("disabled", true);
        }
    }
});
