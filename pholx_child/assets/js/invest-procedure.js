var InvestProcedure = function() {
    function createOrder() {
        $form = $("#sharesOrderForm"), $btnSubmit = $("#btnGoToStep5"), $btnSubmit.html('<i class="fa fa-spinner fa-pulse"></i> Saving...'), $btnSubmit.prop("disabled", !0);
       // var files_data = $('#fileElem'); 
        var form_S = $form.serialize(),
            signature = signaturePad.toDataURL("image/png"), 
          //  file_data = files_data.get(0).files,
            formData = new FormData();
        // $.each( file_data, function( index, value ) {
        //     formData.append( 'files', value );
        // });
        formData.append('action', 'create_order');
        formData.append('user_signature', signature );
        formData.append('formData', form_S );

        $.ajax({
            type: "POST",
            url: ajaxurl,
            data:formData,
            contentType: false,
            processData: false,
        }).done(function(response) {
            var data = $.parseJSON(response);
            if (1 == data.success) {
                var order_id = data.order_id,
                    link = $("#downloadAgreementLink").attr("href");
                $("#downloadAgreementLink").attr("href", link + "?order_id="+order_id), $("#textOrderId").html(order_id), $(".input-order-id").val(order_id), $('#creditCardForm button[type="submit"]').html("Pay $" + data.amountForCC), $("#step4").fadeOut(function() {
                    $("#step5").fadeIn(), $("html,body").animate({
                        scrollTop: 0
                    }, "slow")
                })
            } else {
                if (data.errors.length > 0) {
                    for (var list = "<ul>", i = 0; i < data.errors.length; i++) list += "<li>" + data.errors[i] + "</li>";
                    list += "</ul>", $("#formErrorsStep4 p").html(list)
                } else $("#formErrorsStep4 p").html("Oops, Something went wrong.");
                $("#formErrorsStep4").slideDown()
            }
        }).fail(function() {
            $("#formErrorsStep4 p").html("Oops, Something went wrong."), $("#formErrorsStep4").slideDown()
        }).always(function() {
            $btnSubmit.html("Next"), $btnSubmit.prop("disabled", !1)
        })
    }

    function payViaCard() {
        $form = $("#creditCardForm"), $btnSubmit = $('#creditCardForm button[type="submit"]'), $btnSubmit.html('<i class="fa fa-spinner fa-pulse"></i> Submitting...'), $btnSubmit.prop("disabled", !0);
        var formData = $form.serialize();
        $.ajax({
            type: "POST",
            url: ajaxurl,
            data: {
                action: "pay_via_credit_card",
                formData: formData
            }
        }).done(function(response) {
            var data = $.parseJSON(response);
            if (1 == data.success) {
                if(data.success_msg.length > 0){
                 for (var list_1 = "<ul>", i = 0; i < data.success_msg.length; i++) list_1 += "<li>" + data.success_msg[i] + "</li>";
                    list_1 += "</ul>", $("div#success").html(list_1)
                } else $("div#success p").html("Oops, Something went wrong.");
                $("div#success").slideDown();
                $("#formErrorsStep5a").slideUp();
                setTimeout(function(){
                    window.location = data.redirect_url;
                },2000);              
            }
            else {
                if (data.errors.length > 0) {
                    for (var list = "<ul>", i = 0; i < data.errors.length; i++) list += "<li>" + data.errors[i] + "</li>";
                    list += "</ul>", $("#formErrorsStep5a p").html(list)
                } else $("#formErrorsStep5a p").html("Oops, Something went wrong.");
                $("#formErrorsStep5a").slideDown(), $btnSubmit.html("Next"), $btnSubmit.prop("disabled", !1)
            }
        }).fail(function() {
            $("#formErrorsStep5a p").html("Oops, Something went wrong."), $("#formErrorsStep5a").slideDown(), $btnSubmit.html("Next"), $btnSubmit.prop("disabled", !1)
        }).always(function() {})
    }

    function payOffline() {
        $form = $("#otherPaymentForm"), $btnSubmit = $("#step5 .next-or-previous"), $btnSubmit.html('<i class="fa fa-spinner fa-pulse"></i> Submitting...'), $btnSubmit.prop("disabled", !0);
        var formData = $form.serialize();
        $.ajax({
            type: "POST",
            url: ajaxurl,
            data: {
                action: "update_payment_method",
                formData: formData
            }
        }).done(function(response) {
            var data = $.parseJSON(response);
            if (1 == data.success) $("#step5").fadeOut(function() {
                $("#step6").fadeIn(), $("html,body").animate({
                    scrollTop: 0
                }, "slow")
            });
            else {
                if (data.errors.length > 0) {
                    for (var list = "<ul>", i = 0; i < data.errors.length; i++) list += "<li>" + data.errors[i] + "</li>";
                    list += "</ul>", $("#formErrorsStep5 p").html(list)
                } else $("#formErrorsStep5 p").html("Oops, Something went wrong.");
                $("#formErrorsStep5").slideDown()
            }
        }).fail(function() {
            $("#formErrorsStep5 p").html("Oops, Something went wrong."), $("#formErrorsStep5").slideDown()
        }).always(function() {
            $btnSubmit.html("Next"), $btnSubmit.prop("disabled", !1)
        })
    }
    var signaturePad, init = function() {
            function copyPersonalDetailsToAgreement() {
                $form = $("#personalDetailsForm");
                var address = $form.find('input[name="address1"]').val() + " " + $form.find('input[name="address2"]').val() + " " + $form.find('input[name="city"]').val() + " " + $form.find('input[name="state"]').val() + " " + $form.find('input[name="zip"]').val();
                $(".ag-address-complete").html(address), $("#ag-phone-1").html($form.find('input[name="user_phone"]').val()), $("#ag-bdate").html($form.find('select[name="birth_month"]').val() + "/" + $form.find('select[name="birth_day"]').val() + "/" + $form.find('select[name="birth_year"]').val()), $("#ag-ssn").html($form.find('input[name="user_ssn"]').val());
                var isUSorCanada = $form.find("#isUsorCanadian").val();
                "yes" === isUSorCanada && ($("#ag-occupation").html($form.find('input[name="user_occupation"]').val()), $("#ag-occupation-years").html($form.find('input[name="user_occupation_years"]').val()), $("#ag-present-employer").html($form.find('input[name="user_present_employer"]').val()), $("#ag-present-position").html($form.find('input[name="user_present_position"]').val()), $("#ag-business-address").html($form.find('input[name="user_business_address"]').val()), $("#ag-business-phone").html($form.find('input[name="user_business_phone"]').val()), $("#ag-business-fax").html($form.find('input[name="user_business_fax"]').val()), $("#ag-voter-countries").html($form.find('input[name="user_voter_countries"]').val()), $("#ag-residence-countries").html($form.find('input[name="user_residence_countries"]').val()), $("#ag-relationships").html($form.find('input[name="user_relationships"]').val()), $("#ag-investment-experience").html($form.find('input[name="user_investment_experience"]').val()), $("#ag-is-not-us-resident").html($form.find('input[name="isVoterOutsideUs"]').val()), $("#ag-is-for-self").html($form.find('input[name="isForSelf"]').val()), $("#ag-accountant").html($form.find('input[name="user_accountant"]').val()), $("#ag-attorney").html($form.find('input[name="user_attorney"]').val()), $("#ag-adviser").html($form.find('input[name="user_adviser"]').val()), $("#ag-for-whom").html($form.find('input[name="user_for_whom"]').val()))
            }

            function copySharesOrderToAgreement() {
                $("#ag-shares-count").html($("#numberOfShares").html()), $("#ag-shares-price").html($("#totalAmount").html()), $("#ag-shares-price-cc").html($("#totalAmountForCC").html())
            }

            function savePersonalDetails() {
                $form = $("#personalDetailsForm"), $btnSubmit = $("#personalDetailsForm button[type=submit]"), $btnSubmit.html('<i class="fa fa-spinner fa-pulse"></i> Saving...'), $btnSubmit.prop("disabled", !0);
                var isValid = !0;
                if (!isValid) return $("#formErrorsStep2").slideDown(), $btnSubmit.html("Submit"), void $btnSubmit.prop("disabled", !1);
                var formData = $form.serialize();
                $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: {
                        action: "save_personal_details",
                        formData: formData
                    }
                }).done(function(response) {
                    var data = $.parseJSON(response);
                    if (1 == data.success) $("#btnGoToStep3").click(), copyPersonalDetailsToAgreement();
                    else {
                        if (data.errors.length > 0) {
                            for (var list = "<ul>", i = 0; i < data.errors.length; i++) list += "<li>" + data.errors[i] + "</li>";
                            list += "</ul>", $("#formErrorsStep2 p").html(list)
                        } else $("#formErrorsStep2 p").html("Oops, Something went wrong.");
                        $("#formErrorsStep2").slideDown()
                    }
                }).fail(function() {
                    $("#formErrorsStep2 p").html("Oops, Something went wrong."), $("#formErrorsStep2").slideDown()
                }).always(function() {
                    $btnSubmit.html("Submit"), $btnSubmit.prop("disabled", !1)
                })
            }
            $(document).on("submit", "form", function(event) {
                event.preventDefault();
                var formObj = $(this),
                    formId = formObj.attr("id");
                "personalDetailsForm" == formId ? savePersonalDetails() : "sharesOrderForm" == formId ? createOrder() : "creditCardForm" == formId ? payViaCard() : "otherPaymentForm" == formId && payOffline()
            });
            var formatThousands = function(n, dp) {
                for (var s = "" + Math.floor(n), d = n % 1, i = s.length, r = "";
                    (i -= 3) > 0;) r = "," + s.substr(i, 3) + r;
                return s.substr(0, i + 3) + r + (d ? "." + Math.round(d * Math.pow(10, dp || 2)) : "")
            };
            $("input[type=radio][name=isVoterOutsideUs]").change(function() {
                "yes" == this.value ? ($("#panelVoterCountriesList").slideDown(), $("#user_voter_countries").prop("required", !0)) : "no" == this.value && ($("#panelVoterCountriesList").slideUp(), $("#user_voter_countries").prop("required", !1))
            }), $("input[type=radio][name=isForSelf]").change(function() {
                "no" == this.value ? ($("#panelForWhom").slideDown(), $("#user_for_whom").prop("required", !0)) : "yes" == this.value && ($("#panelForWhom").slideUp(), $("#user_for_whom").prop("required", !1))
            }), $("#shares").on("change keyup", function() {
                if (Number($(this).val()) >= 1) {
                    var shares = Number($(this).val()),
                        handlingCost = 10,
                        pricePerShare = 10,
                        costOfShares = Number(shares * pricePerShare),
                        total = costOfShares + Number(handlingCost),
                        totalCC = 1.039 * costOfShares + Number(handlingCost),
                        handlingCostFormatted = formatThousands(handlingCost),
                        totalFormatted = formatThousands(total),
                        totalCCFormatted = formatThousands(totalCC);
                    $("#numberOfShares").html(formatThousands($(this).val())), $("#totalAmountForCC").html(formatThousands(totalCC)), $("#costOfShares").html(formatThousands(costOfShares)), $("#handlingCost").html(handlingCostFormatted), $("#totalAmount").html(totalFormatted), $("#costOfSharesHidden").val(costOfShares), $("#handlingCostHidden").val(handlingCostFormatted), $("#totalAmountHidden").val(totalFormatted), $("#totalAmountForCCHidden").val(totalCCFormatted)
                } else $("#numberOfShares").html("N/A"), $("#costOfShares").html("N/A"), $("#costOfSharesHidden").val(0), $("#handlingCost").html("N/A"), $("#totalAmount").html("N/A")
            }), $("input[type=radio][name=radioPaymentMethod]").change(function() {
                $("#btnGoToStep6").prop("disabled", !1), $("#formErrorsStep5").slideUp(), $(".slide-out-panel").slideUp(), $("#notForCreditCard").show(), "wire" == this.value ? $("#slideOutPayViaWire").slideDown() : "mail" == this.value ? $("#slideOutPayViaMail").slideDown() : "credit-card" == this.value && ($("#slideOutPayViaCreditCard").slideDown(), $("#notForCreditCard").hide()), $("#paymentMethodHidden").val(this.value)
            }), $("#cbSameAsPersonal").change(function() {
                this.checked ? ($(".card-details").prop("readonly", !0), $("input[name=card_address1]").val($("input[name=address1]").val()), $("input[name=card_address2]").val($("input[name=address2]").val()), $("input[name=card_city]").val($("input[name=city]").val()), $("input[name=card_state]").val($("input[name=state]").val()), $("input[name=card_zip]").val($("input[name=zip]").val())) : ($(".card-details").prop("readonly", !1), $(".card-details").val(""))
            }), $(".next-or-previous").click(function() {
                var paymentMethod, current = $(this).attr("data-current-id"),
                    next = $(this).attr("data-next-id"),
                    direction = $(this).attr("data-direction"),
                    logged_in = $('#user_logged_in').val(),
                    isValid = !0;
                if ("forward" === direction) {
                    if ("#step1" == current) $("#cbTerms").is(":checked") ? $("#formErrorsStep1").slideUp() : (isValid = !1, $("#formErrorsStep1").slideDown()), ((logged_in != 1 || logged_in == ' ') && $("#cbTerms").is(":checked")) ? (isValid = !1, $("#formErrorsStep1a").slideDown()) : $("#formErrorsStep1a").slideUp();
                    else if ("#step2" === current);
                    else if ("#step3" === current) {
                        if ($("#formErrorsStep3").slideUp(), $("#shares").val()) {
                            var minimum = Number($("#minAmountToInvest").val());
                            $("#costOfSharesHidden").val() < minimum && (isValid = !1, $("#formErrorsStep3 p").html("The minimum amount you can invest is $" + minimum), $("#formErrorsStep3").slideDown())
                        } else isValid = !1, $("#formErrorsStep3").slideDown();
                        isValid && copySharesOrderToAgreement()
                    } else "#step4" === current ? (signaturePad.isEmpty() ? ($("#formErrorsStep4").slideDown(), isValid = !1) : $("#formErrorsStep4").slideUp(), $("#agrem_terms").is(":checked") ? $("#formErrorsStep4b").slideUp() : (isValid = !1, $("#formErrorsStep4b").slideDown())) : "#step5" === current && (paymentMethod = $("input[type=radio][name=radioPaymentMethod]:checked").val(), paymentMethod ? "credit-card" == paymentMethod ? (alert("this is a credit card payment do nothing for now"), isValid = !1) : $("#formErrorsStep5").slideUp() : ($("#formErrorsStep5").slideDown(), isValid = !1));
                    isValid && ($("li[data-target-id='" + current + "']").addClass("done"), "#step4" == current ? $("#sharesOrderForm").submit() : "#step5" == current ? "credit-card" == paymentMethod ? $("#creditCardForm").submit() : $("#otherPaymentForm").submit() : $(current).fadeOut(function() {
                        $(next).fadeIn(), $("html,body").animate({
                            scrollTop: 0
                        }, "slow")
                    }), $("li[data-target-id='" + current + "']").removeClass("is-active"), $("li[data-target-id='" + next + "']").addClass("is-active"))
                } else $("li[data-target-id='" + current + "']").removeClass("done"), $("li[data-target-id='" + next + "']").removeClass("done"), $(current).fadeOut(function() {
                    $(next).fadeIn(), $("html,body").animate({
                        scrollTop: 0
                    }, "slow")
                }), $("li[data-target-id='" + current + "']").removeClass("is-active"), $("li[data-target-id='" + next + "']").addClass("is-active")
            })
        },
        initSignaturePlugin = function() {
            signaturePad = new SignaturePad(document.getElementById("signature-pad"), {
                backgroundColor: "rgba(255, 255, 255, 0)",
                penColor: "rgb(0, 0, 0)"
            });
            var cancelButton = document.getElementById("clear");
            cancelButton.addEventListener("click", function() {
                signaturePad.clear(), $("#formErrorsStep4").slideUp()
            })
        };
    return {
        init: function() {
            init(), initSignaturePlugin()
        }
    }
}();
$(document).ready(function() {
    InvestProcedure.init()
});