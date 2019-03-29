// JavaScript Document
var sitemapFlag = true;
var legalInfoFlag = true;


$(document).ready(function() {
jQuery("#frmcalculator").validationEngine({autoHidePrompt:true});
jQuery("#loginform").validationEngine({autoHidePrompt:true});
jQuery("#passwordreset").validationEngine({autoHidePrompt:true});
jQuery("#frmforgot").validationEngine({autoHidePrompt:true});
//jQuery("#registrationfrmexist").validationEngine({autoHidePrompt:true});

//***Define all buttons

$('#lumsum').autoNumeric("init",{
        aSep: ',',
        aDec: '.', 
        aSign: ''
    });
	
$('#recurring_amount').autoNumeric("init",{
        aSep: ',',
        aDec: '.', 
        aSign: ''
    });


$( "#changepassword" ).button().click(function() {
  $.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'password': $("#password").val(),'password1': $("#password1").val(),'user': $("#user").val()},
						        url: "../eac/passwordchange",
						        success: function(data)
						        {   
								//alert($(this).val());
								//$("#frmcalculator #funds").html(data.funds);
								
								
								 if(data.response==1){
							        	  // $( "#dialog-form-change-password").dialog( "close" );
							        	window.location='../eac/mypage';
							           }
							 else if(data.response==0){
								$("#passwordreset #"+data.field).val("");
									$("#passwordreset #"+data.field).focus();
							  jQuery("#passwordreset #"+data.field).validationEngine('validate');
							  
							}
							else if(data.response==2){
								//$("#registrationfrm #"+data.field).val("");
							  //jQuery("#registrationfrm #"+data.field).validationEngine('validate');
							  		//$("#passwordreset #"+data.field).val("");
									$("#passwordreset #"+data.field).focus();
							  jQuery("#passwordreset #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}

						        }
						    });
//$( "#dialog-form-change-password" ).dialog( "open" );
});


		$( "#dialog-form-forgot" ).dialog({
					autoOpen: false,
					width: 340,
					height:260,
					resizable:false,
					title:"Reset Password",
					modal: true,
					   show: {
				  effect: "fold",
				  duration: 1000
				  },
				  hide: {
				  effect: "scale",
				  duration: 1000
				  },	
				  
				  buttons: [
						{
               text: "Get New Password",
               "class": 'submitButton',
               click: function(event) {
				// $.blockUI({ message: '<h2><img src="../../img/ajax-loader_2.gif" /> Please Wait...</h2>'});  
							
							event.preventDefault();
							
					$( this ).dialog( "close" );
							  $.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'username': $("#frmforgot #username").val()},
						        url: "../eac/resetpass",
						        success: function(data)
						        {   
								//alert($(this).val());
								

						        }
						    });
				   
				   }
						},
							{
               text: "Cancel",
               "class": 'cancelButton',
               click: function() {
				   
							$( this ).dialog( "close" );
							
						//   jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						
				   
				   }
							}
					],
				  
				  			  
					
					close: function() {
							
					}
				});

		$( "#forgot" )
.click(function() {
		$( "#dialog-form-forgot" ).dialog("open")
});
	
	
		
	
	$( "#dialog-form-profile" ).dialog({
					autoOpen: false,
					width: 965,
					height:530,
					resizable:false,
					position: ['top','center'],
					title:'Update Your Profile',
					modal: true,
					   show: {
				  effect: "fold",
				  
				  duration: 1000
				  },
				  hide: {
				  effect: "scale",
				  duration: 1000
				  },				  
					buttons: [{
               text: "Save",
               "class": 'submitButton',
               click: function(event) {
				   $('#terms').val(1)
				$.blockUI({ message: '<h2><img src="../img/ajax-loader_2.gif" /> Please Wait...</h2>' });  
							
							event.preventDefault();
							
						$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmprofile").serialize()},
						        url: "../eac/updateProfile",
						        success: function(data)
						        {   
								  $.unblockUI();
								
								 if(data.response==1){ 
								 $( "#dialog-form-profile").dialog( "close" );
								 	   $( "#dialog-form-success #dvmess" ).html(data.msg)
							        $( "#dialog-form-success").dialog( "open" );
							       
							           }
							 else if(data.response==0){
								$("#frmprofile #"+data.field).focus();
							  jQuery("#frmprofile #"+data.field).validationEngine('validate');
							  
							}
							else if(data.response==2){
								//$("#registrationfrm #"+data.field).val("");
							  //jQuery("#registrationfrm #"+data.field).validationEngine('validate');
							  		//$("#frmprofile #"+data.field).val("");
									$("#frmprofile #"+data.field).focus();
							  jQuery("#frmprofile #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}
				

						        }
						    });   
				   }
						},
							{
               text: "Close",
               "class": 'cancelButton',
               click: function() {
				   
							$( this ).dialog( "close" );
							
						//   jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						
				   
				   }
							}
					],
					close: function() {
							//oTable.fnDraw();
					}
				});

	
	
	
	
		
	$( "#profile" )
.click(function() {
	
	  $.ajax({
						        type: "POST",
								dataType:"json",
						        url: "../eac/getProfile",
						        success: function(data)
						        {   
								//alert($(this).val());
								$( "#frmprofile #title" ).val(data.title);
								$( "#frmprofile #surname" ).val(data.surname);
								$( "#frmprofile #initials" ).val(data.initials);
								$( "#frmprofile #firstname" ).val(data.firstname);
								$( "#frmprofile #middlename" ).val(data.middlename);
								$( "#frmprofile #email" ).val(data.email);
								$( "#frmprofile #dateofbirth" ).val(data.dateofbirth);
								$( "#frmprofile #gender" ).val(data.gender);
								$( "#frmprofile #idtype" ).val(data.idtype);
								$( "#frmprofile #idno" ).val(data.idno);
								$( "#frmprofile #homephoneno" ).val(data.homephoneno);
								$( "#frmprofile #buisnessphoneno" ).val(data.buisnessphoneno);
								$( "#frmprofile #cellphoneno" ).val(data.cellphoneno);
								$( "#frmprofile #workemailid" ).val(data.workemailid);
								$( "#frmprofile #occupation" ).val(data.occupation);
								$( "#frmprofile #employeer" ).val(data.employeer);
								$( "#frmprofile #maritialstatus" ).val(data.maritialstatus);
								$( "#frmprofile #maritialstatus" ).val(data.maritialstatus);
								
						        }
						    });
	
		$( "#dialog-form-profile" ).dialog("open")
});
		
//////////////////////////////////////




fm_options = {
		feedback_url: "../eac/feedback/",
    position: "right-top",
    jQueryUI: false,
    bootstrap: false,
	show_contact:true,
    show_email: true,
    show_radio_button_list: false,
    close_on_click_outisde: true,
    name_label: "Name",
	contact_label: "Contact Number",
    email_label: "Email",
    message_label: "Feedback",
    radio_button_list_labels: ["1", "2", "3", "4", "5"],
    radio_button_list_title: "How would you rate your experience with the Oasis website?",
    name_placeholder: "Name please",
	contact_placeholder: "Contact Number",
    email_placeholder: "Email goes here",
    message_placeholder: "Go ahead, type your feedback here...",
    name_required: true,
	contact_required: true,
    email_required: true,
    message_required: true,
    radio_button_list_required: false,
    show_asterisk_for_required: true,
    submit_label: "Send",
    title_label: "Feedback",
    trigger_label: "Feedback",
    custom_params: {},
    iframe_url : undefined,
    show_form: true,
    custom_html: '',
    delayed_close : true,
    delayed_options : {
        delay_success_milliseconds : 2000,
        delay_fail_milliseconds : 2000,
        sending : "Sending...",
        send_fail : "Sending failed.",
        send_success : "Feedack sent.",
        fail_color : undefined,
        success_color : undefined,
        custom_html_success: undefined,
        custom_html_fail: undefined
    }
       /* show_email: true,
        email_required: true,
 
        show_radio_button_list: true,
        radio_button_list_required: true,
        radio_button_list_title: "How would you rate your experience with the Oasis website?",
 
        name_placeholder: "Name please",
        email_placeholder: "Email goes here",
        message_placeholder: "Go ahead, type your feedback here...",
 
        name_required: true,
        message_required: true,
 
        show_asterisk_for_required: true,
 
        feedback_url: "send_feedback_clean",
 
        custom_params: {
            csrf: "my_secret_token",
            user_id: "john_doe",
            feedback_type: "clean_complex"
        },
        delayed_options: {
            delay_success_milliseconds: 3500,
            send_success : "Sent successfully :)"
        }*/
    };
 
    //init feedback_me plugin
    fm.init(fm_options);
	
 fm_options = {
	 feedback_url: "../eac/service/",
        trigger_label: "Service",
        position: "left-top",
		show_contact:true,
    show_email: true,
          name_label: "Name",
	contact_label: "Contact Number",
    email_label: "Email",
    message_label: "Message",
    radio_button_list_labels: ["1", "2", "3", "4", "5"],
    radio_button_list_title: "How would you rate your experience with the Oasis website?",
    name_placeholder: "Name please",
	contact_placeholder: "Contact Number",
    email_placeholder: "Email goes here",
    message_placeholder: "Go ahead, type your feedback here...",
    name_required: true,
	contact_required: true,
    email_required: true,
    message_required: true,
	title_label: "Service",
    radio_button_list_required: false,
    show_asterisk_for_required: true,
    submit_label: "CALL ME BACK",
	 delayed_options : {
        delay_success_milliseconds : 2000,
        delay_fail_milliseconds : 2000,
        sending : "Sending...",
        send_fail : "Sending failed.",
        send_success : "Service Request sent.",
        fail_color : undefined,
        success_color : undefined,
        custom_html_success: undefined,
        custom_html_fail: undefined
    },
        custom_params: {
            position: "right-center"
        }
    };
    //init feedback_me plugin
    fm.init(fm_options);
		
		
		
		
		
		
		
		
		
		
		
		
	/*
	
	$( "#brokerCode" )
// don't navigate away from the field on tab when selecting an item
.bind( "keydown", function( event ) {
if ( event.keyCode === $.ui.keyCode.TAB &&
$( this ).autocomplete( "instance" ).menu.active ) {
event.preventDefault();
}
})
.autocomplete({
source: function( request, response ) {

$.getJSON( "<?php echo base_url() ?>index.php/eac/getBrokerCode/FMGOCMC", {
term: extractLast( request.term )
}, response );
},
search: function() {
// custom minLength
var term = extractLast( this.value );
if ( term.length < 2 ) {
return false;
}
},
focus: function() {
// prevent value inserted on focus
return false;
},
select: function( event, ui ) {
var terms = split( this.value );

// remove the current input
terms.pop();
// add the selected item
terms.push( ui.item.value );
// add placeholder to get the comma-and-space at the end
terms.push( "" );
this.value = terms.join( "" );
return false;
}
});
	
	*/
	
	
	$( "#email" )
  .focusout(function() {
     $( "#btneac" ).show();
    $( "#investmentdetails" ).show();
  })
  .blur(function() {
 $( "#btneac" ).show();
    $( "#investmentdetails" ).show();
  });
	
	
	
	
	
		
	
	$('#frmcalculator #product').on('change', function() {
	
		if($(this).val()==5)
		$("#frmcalculator #dvrecurringperiod").show();
		else
		$("#frmcalculator #dvrecurringperiod").hide();
		$("#frmcalculator #recurring_amount").val('')
		$("#frmcalculator #recurring_frequency").val('')
		$("#frmcalculator #recurring").hide();
		
	/*	 $.getJSON('../eac/getfunds', {'productid': $(this).val(),'uhno': $("#uhno").val()}, function(data){

        var options = '';
        for (var x = 0; x < data.length; x++) {
          options += '<option value="' + data[x]['id'] + '">' + data[x]['code'] + '</option>';
        }
        $('#frmcalculator #fund').html(options);
      });*/
 $.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'productid': $(this).val(),'uhno': $("#uhno").val()},
						        url: "../eac/getfunds",
						        success: function(data)
						        {   
								//alert($(this).val());
							
								$("#funds").html(data.funds);

	$('#frmcalculator #fund').on('change', function() {
		$("#frmcalculator #recurring_amount").val('')
								$("#frmcalculator #recurring").hide();
		  $.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'fundcode': $(this).val()},
						        url: "../eac/getFundDetail/"+$(this).val(),
						        success: function(data)
						        {   
								//alert($(this).val());
								$("#frmcalculator #c1").html(data.c1);
								$("#frmcalculator #c2").html(data.c2);
								if(data.res==1){
								$("#frmcalculator #recurring").show();
								
								}
								else{
							  $("#frmcalculator #recurring_amount").val('')
								$("#frmcalculator #recurring").hide();
								}
								
						        }
						    }); 
});

						        }
						    }); 
});


	














$("#frmcalculator #emp").on("change", function() {
	//alert($(this).is(':checked'))
    if($(this).val()==1)
	 $("#frmcalculator #tblemployee").show();
	 else
	  $("#frmcalculator #tblemployee").hide();
  });


$("#nationality").on("focus.autocomplete", null, function () {
																				
        $(this).autocomplete({
            source: "../country/getNationality",
            minLength: 2,
            delay: 0,
select: function( event, ui ) {

$("#nationalityid").val(ui.item.id);
}
			});
$(this).autocomplete("search");
    });	









	$('#frmcalculator #advisor').on('change', function() {
		$( "#investmentdetails" ).show();
		$( "#btneac" ).show();
if(this.value=='No'){
$("#frmcalculator #brokertbl").show();
$("#frmcalculator #dvtitle").show();
$("#frmcalculator #dvinitials").show();
$("#frmcalculator #ac").hide();
$("#frmcalculator #ace").hide();
}
else{
$("#frmcalculator #brokertbl").hide();
$("#frmcalculator #ac").show();
$("#frmcalculator #ace").show();
$("#frmcalculator #dvtitle").hide();
$("#frmcalculator #dvinitials").hide();
}

});




$( "#dateofbirth" ).datepicker({
dateFormat: 'yy-mm-dd',
changeMonth: true,
changeYear: true,
"yearRange": '-135:-15',
"minDate": "-135y",
"maxDate": "-15y",
 

showButtonPanel: true,
 onSelect: function() {
               var birthDay = document.getElementById("dateofbirth").value;
                var DOB = new Date(birthDay);
                var today = new Date();
                var age = today.getTime() - DOB.getTime();
                age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

                document.getElementById('age').value = age;
            },
onClose: function(dateText, inst) {
var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
jQuery('#dateofbirth').validationEngine('hide')
}
});



$( "#dateofbirth_nonifa" ).datepicker({
dateFormat: 'yy-mm-dd',
changeMonth: true,
changeYear: true,
"yearRange": '-135:-15',
"minDate": "-135y",
"maxDate": "-15y",
 
showButtonPanel: true,
 onSelect: function() {
               var birthDay = document.getElementById("dateofbirth_nonifa").value;
                var DOB = new Date(birthDay);
                var today = new Date();
                var age = today.getTime() - DOB.getTime();
                age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

                document.getElementById('age').value = age;
            },
onClose: function(dateText, inst) {
var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
jQuery('#dateofbirth_nonifa').validationEngine('hide')
}
});



	

		$( "#dialog-form-success" ).dialog({
					autoOpen: false,
					title:"Success!!!",
					modal: true,
					   show: {
				  effect: "fold",
				  duration: 1000
				  },
				  hide: {
				  effect: "scale",
				  duration: 1000
				  },				  
					buttons: {
						
						"Ok": function() {
							$( this ).dialog( "close" );
							
							//location.reload();
						}
					},
					close: function() {
							
					}
				});

	
	
	
	
	$( "#dialog-form-terms" ).dialog({
					autoOpen: false,
					width: 800,
					height:600,
					position: ['top','center'],
					title:'Terms & Conditions',
					modal: true,
					   show: {
				  effect: "fold",
				  
				  duration: 1000
				  },
				  hide: {
				  effect: "scale",
				  duration: 1000
				  },				  
					buttons: [{
               text: "Accept",
               "class": 'submitButton',
               click: function(event) {
				   $('#terms').val(1)
				$.blockUI({ message: '<h2><img src="../img/ajax-loader_2.gif" /> Please Wait...</h2>' });  
							
							event.preventDefault();
							
						$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmcalculator").serialize()},
						        url: "../eac/calculateeac",
						        success: function(data)
						        {   
								  $.unblockUI();
								$( "#dialog-form-terms" ).dialog( "close" );
								if(data.response==1){
							//	$('#uploadiframe').attr('href', "<?php echo base_url()?>"+data.fileUrl)	
								//	window.open("<?php echo base_url()?>"+data.fileUrl)
								$("#annualcost").html(data.table)
								$( "#btneac" ).hide();
								}else{
									
									
								}
				

						        }
						    });   
				   }
						},
							{
               text: "Decline",
               "class": 'cancelButton',
               click: function() {
				   
							$( this ).dialog( "close" );
							
						//   jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						
				   
				   }
							}
					],
					close: function() {
							//oTable.fnDraw();
					}
				});

	
	
	$( "#dialog-form-download" ).dialog({
					autoOpen: false,
				position: ["top","top"],
          height:$(window).height(),
		   width:$(window).width(),
					title:"EAC",
					modal: true,
					buttons: {
				'Close': function() {
						$('#uploadiframe').attr('src', '')
								$( this ).dialog( "close" );
							
						}
					},
					
					close: function() {
					//	location.reload();
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});
	
	
	
				$( "#dialog-form-print" ).dialog({
					autoOpen: false,
					height: 150,
					width: 300,
					title:"Print Your EAC Document",
					modal: true,
					buttons: [
							  {
						text: "Print",
               			"class": 'submitButton',
               			click: function() {        
						
						
						
					
					$('#dialog-form-download #uploadiframe').attr('src', "../eac/download/"+$(this).data("filename")+"/"+$(this).data("id"))
						
						$( this ).dialog( "close" );
						
						}
						}
					],

					close: function() {
						
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});


			$( "#dialog-form-email" ).dialog({
					autoOpen: false,
					height: 200,
					width: 300,
					title:"Email Your EAC Document",
					modal: true,
					buttons: [
							  {
						text: "Ok",
               			"class": 'submitButton',
               			click: function() {        
						
						
						$( this ).dialog( "close" );
						
						}
						}
					],

					close: function() {
						
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});
			
					
					
					
					
					
					
			

				
				
				
				
				
				
				
		

				$( "#dialog-form-change-password" ).dialog({
					autoOpen: false,
					height: 400,
					width: 450,
					show: {
				  effect: "scale",
				  duration: 1000
				  },
				  hide: {
				  effect: "scale",
				  duration: 1000
				  },
					title:"Change Password",
					modal: true,
					buttons: {
						"Update": function() {
							$.ajax({
						        type: "POST",
								dataType: "json",
						        data:{'form': $("#vacancycp").serialize()},
						        url: "../eac/changePassword",
						        success: function(data)
						        {   
						           
							           if(data.response==1){
							        	   $( "#dialog-form-change-password").dialog( "close" );
							        	   $( "#dialog-form-success #dvmess" ).html(data.msg)
										   $( "#dialog-form-success" ).dialog( "open" );
							           }
							           else			{	
									   o=$('#dialog-form-change-password #'+data.field+'')
							        	   updateTips($("#dialog-form-change-password .validateTips"),data.msg,o)
									   }

						        }
						    });
						},
						Cancel: function() {
							$( this ).dialog( "close" );
							//location.reload();
						}
					},
					close: function() {
						//location.reload();
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});
			




			
	$( "#dialog-form-error" ).dialog({
					autoOpen: false,
					height: 200,
					width: 270,
					title:"Error",
					modal: true,
					buttons: {
						
						"Ok": function() {
							$( this ).dialog( "close" );
							//location.reload();
							//oTable.fnDraw();
						}
					},
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});


$( "#dialog-form-uploadCheck" ).dialog({
					autoOpen: false,
			height:"180",
        width: 350,
					title:"OasisEAP : Download Documents",
					modal: true,
					buttons: {
				'Close': function() {
							$( this ).dialog( "close" );
							
						}
					},
					
					close: function() {
					//	location.reload();
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});
				
				
				

	
	$("#feedback-slider").slider({
			range: "max",
			min: 1,
			max: 5,
			value: 2,
			step:0.1
		});
		
		
var $sitemapDIV = $("#sitemap-popup");
var sitemapDivOrgHeight = $sitemapDIV.height();
var $legalInfoDIV = $("#legalInfo-popup");
var legalInfoDivOrgHeight = $legalInfoDIV.height();
function closeLoginPopup()
	{
		loginFlag = true;
	  $('#login-popup').slideUp(500);	 
		$('#login-li').css('background','none')	
		  $('#login-li a').css('color','#fff')
		   $('#login-li a').css('border-right','1px #85939e solid')
		 $('#login-li a').removeClass("login-minus").addClass("login-plus");
	}
	function closeSitemapPopup()
	{
		 $sitemapDIV.css({       
        top: 607,
        height: sitemapDivOrgHeight
    }).show().animate({
        top: 820,
        height: 0		
    },function(){	
		$('#sitemap-li').css('background','none')	
	  	$('#sitemap-li span').css('color','#fff')		
		
		$('#sitemap-li span').removeClass("sitemap-minus").addClass("sitemap-plus");
		$sitemapDIV.css('height',sitemapDivOrgHeight)
		$sitemapDIV.css('display','none')
		
	});
		
		sitemapFlag = true;	
	}
function closeLegalInfoPopup()
	{
		 $legalInfoDIV.css({       
        top: 452,
        height: legalInfoDivOrgHeight
    }).show().animate({
        top: 820,
        height: 0		
    },function(){	
		$('#legalInfo-li').css('background','none')	
	  	$('#legalInfo-li span').css('color','#fff')		
		
		$('#legalInfo-li span').removeClass("legalInfo-minus").addClass("legalInfo-plus");

		$legalInfoDIV.css('height',legalInfoDivOrgHeight)
		$legalInfoDIV.css('display','none')
		
	});
		
		legalInfoFlag = true;	
	}
		//open login panel
$('#login-li').click(function() {								 
		if(legalInfoFlag == false)
	closeLegalInfoPopup();
	if(sitemapFlag == false)
	closeSitemapPopup();
	
	
		 $('#login-li').css('background','#fff')	
		 $('#login-li a').css('color','#004a80')
		 $('#login-li a').css('border-right','1px #fff solid')
		   
		var maskHeight = $(document).height()-200;
		var maskWidth = $(window).width();		
		$('#mask').css({'width':maskWidth,'height':maskHeight});	
		 $('#login-li a').removeClass("login-plus").addClass("login-minus");
		 if($('#login-li a').hasClass('login-plus'))
		{
			$('#mask').fadeOut("fast");
		}
		$('#mask').fadeIn(100, function() {
		});
		
		$('#mask').fadeTo("fast",0.8);		
	  	$('#login-popup').slideToggle(500);
			
		if(loginFlag == false)
		{
			loginFlag = true;
			$('#mask').fadeOut(290, function() {
			$('#login-li').css('background','none')	
		  	$('#login-li a').css('color','#fff')
			$('#login-li a').css('border-right','1px #85939e solid')
			$('#login-li a').removeClass("login-minus").addClass("login-plus");
	  });
			
		}else
		
		loginFlag = false;
	});
	//close login panel
	$('#login-popup a').click(function() {
		loginFlag = true;
	  $('#login-popup').slideToggle(500);  
	  
	  $('#mask').fadeOut(500, function() {
		$('#login-li').css('background','none')	
		  $('#login-li a').css('color','#fff')
		   $('#login-li a').css('border-right','1px #85939e solid')
		 $('#login-li a').removeClass("login-minus").addClass("login-plus");
	  });
	});  
	
	
	//open sitemap panel	
	$('#sitemap-li').click(function() {
		
									$('#mask').hide();
	closeLoginPopup();
	if(legalInfoFlag == false)
	closeLegalInfoPopup();
	if(sitemapFlag == true){
    $sitemapDIV.css({       
        top: 820,
        height: 0
    }).show().animate({
        top: 607,
        height: sitemapDivOrgHeight
    },function(){
		//alert('here')
	});
	}
	
	$('#sitemap-li').css('background','#fff')	
	$('#sitemap-li span').css('color','#004a80')
	
	var maskHeight = $(document).height()-200;
	var maskWidth = $(window).width();		
	$('#mask').css({'width':maskWidth,'height':maskHeight});	
	$('#sitemap-li span').removeClass("sitemap-plus").addClass("sitemap-minus");
	if($('#sitemap-li span').hasClass('sitemap-plus'))
		{
			$('#mask').fadeOut("fast");
		}
	$('#mask').fadeIn(100);
		
	$('#mask').fadeTo("fast",0.8);	
	if(sitemapFlag == false)
	{
		$('#mask').hide();
		
		$sitemapDIV.css({       
        top: 607,
        height: sitemapDivOrgHeight
    }).show().animate({
        top: 820,
        height: 0		
    },function(){	
		$('#mask').hide();
		$('#sitemap-li').css('background','none')	
	  	$('#sitemap-li span').css('color','#fff')		
		
		$('#sitemap-li span').removeClass("sitemap-minus").addClass("sitemap-plus");
		$sitemapDIV.css('height',sitemapDivOrgHeight)
		$sitemapDIV.css('display','none')
		
	});
		
		sitemapFlag = true;		
	}else
		sitemapFlag = false;
	fnHideMask();
	});
	
	//close sitemap panel		
	$('#sitemap-popup a').click(function() {	
	$sitemapDIV.css({       
        top: 607,
        height: sitemapDivOrgHeight
    }).show().animate({
        top: 820,
        height: 0		
    },function(){	
		$('#sitemap-li').css('background','none')	
	  	$('#sitemap-li span').css('color','#fff')		
		
		$('#sitemap-li span').removeClass("sitemap-minus").addClass("sitemap-plus");
		$sitemapDIV.css('height',sitemapDivOrgHeight)
		$sitemapDIV.css('display','none')		
	});
		$('#mask').hide();
		sitemapFlag = true;	
	}); 
	
	//open legalInfo panel	
	$('#legalInfo-li').click(function() {
									  $('#mask').hide();
	closeLoginPopup();
	if(sitemapFlag == false)
	closeSitemapPopup();
	
	if(legalInfoFlag == true){
    $legalInfoDIV.css({       
        top: 820,
        height: 0
    }).show().animate({
        top: 452,
        height: legalInfoDivOrgHeight
    },function(){
		//alert('here')
	});
	}
	
	$('#legalInfo-li').css('background','#fff')	
	$('#legalInfo-li span').css('color','#004a80')
	
	var maskHeight = $(document).height()-200;
	var maskWidth = $(window).width();		
	$('#mask').css({'width':maskWidth,'height':maskHeight});	
	$('#legalInfo-li span').removeClass("legalInfo-plus").addClass("legalInfo-minus");
		if($('#legalInfo-li span').hasClass('legalInfo-plus'))
		{
			$('#mask').fadeOut("fast");
		}
	$('#mask').fadeIn(100);
		
	$('#mask').fadeTo("fast",0.8);	
	if(legalInfoFlag == false)
	{
		$('#mask').hide();
		
		$legalInfoDIV.css({       
        top: 452,
        height: legalInfoDivOrgHeight
    }).show().animate({
        top: 820,
        height: 0		
    },function(){	
		$('#mask').hide();
		$('#legalInfo-li').css('background','none')	
	  	$('#legalInfo-li span').css('color','#fff')		
		
		$('#legalInfo-li span').removeClass("legalInfo-minus").addClass("legalInfo-plus");
		$legalInfoDIV.css('height',legalInfoDivOrgHeight)
		$legalInfoDIV.css('display','none')
		
	});
		
		legalInfoFlag = true;		
	}else
		legalInfoFlag = false;
	
	fnHideMask();
	});
	
	//close sitemap panel		
	$('#legalInfo-popup a').click(function() {	
	$legalInfoDIV.css({       
        top: 452,
        height: legalInfoDivOrgHeight
    }).show().animate({
        top: 820,
        height: 0		
    },function(){	
		$('#legalInfo-li').css('background','none')	
	  	$('#legalInfo-li span').css('color','#fff')		
		
		$('#legalInfo-li span').removeClass("legalInfo-minus").addClass("legalInfo-plus");
		$legalInfoDIV.css('height',legalInfoDivOrgHeight)
		$legalInfoDIV.css('display','none')		
	});
		$('#mask').hide();
		legalInfoFlag = true;	
	}); 
	
		$('#headerCarousel').anythingSlider({
			//theme : 'metallic',
			expand       : false,
			autoPlay     : true
		});

	




	
$( "#reset" )
.button()
.click(function() {

	
location.reload(); 
	
	
});
$( "#reseteac" )
.button()
.click(function() {

	
	$( "#frmcalculator" )[0].reset()
	
	
});
$( "#csv-import" )
.button()
.click(function() {

	
	$( "#frmcalculator" )[0].reset()
	
	
});

$( "#checkvalid" )
.button()
.click(function() {

  $.ajax({
						        type: "POST",
								dataType:"json",
						       	data:{'form': $("#frmcalculator").serialize()},
						        url: "../eac/checkvalidclient",
						        success: function(data)
						        {   
						
								if(data.response==1){
								//$("#tbleac").show();
								 $( "#investmentdetails" ).show();
								  $( "#btneac" ).show();
								$("#investmentdetails").show()
								$("#btneac").show()
								$("#tbleacsubmit").hide();	
//jQuery("#frmcalculator #idno").validationEngine('hidePrompt', "Credentials do not match records", 'error', false)
$("#uhno").prop("readonly", true);
$("#eidtype").prop("readonly", true);
$("#idno").prop("readonly", true);
								}
								else if(data.response==2){
								 jQuery("#frmcalculator #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
								}
								else{
									
				jQuery("#frmcalculator #idno").validationEngine('showPrompt', "Credentials do not match records", 'error', true)
								//$("#tbleac").hide();
								$( "#investmentdetails" ).hide();
								  $( "#btneac" ).hide();	
								$("#investmentdetails").hide()	;
								$("#btneac").hide()	;
								$("#tbleacsubmit").show();				
								}
						        }
						    }); 
	
	
});
$( "#backeac" )
.button()
.click(function() {
	window.location.href = "../eac"; 
});


});

$(function() {

    var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5"
      }
    });
  /*  $( "<button>" )
      .text( "Show help" )
      .button()
      .click(function() {
        tooltips.tooltip( "open" );
      })
      .insertBefore( "form" );*/


$( "#logout" )
.click(function() {
		window.location.href = "../eac/logout"; 
});




/*

$('#dvinvestment').bind("DOMSubtreeModified",function(){
  alert('changed');
});
*/
$( "#calculate" ).button()
.click(function() {
	

	$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmcalculator").serialize()},
						        url: "../eac/calculateeac",
						        success: function(data)
						        {   
								  $.unblockUI();
								
								if(data.response==1){
							//	$('#uploadiframe').attr('href', "<?php echo base_url()?>"+data.fileUrl)	
								//	window.open("<?php echo base_url()?>"+data.fileUrl)
							//	$("#annualcost").html(data.table)
							//	$( "#btneac" ).hide();//
							
							
							  if($( "#terms" ).val()==0)
	$( "#dialog-form-terms" ).dialog('open');
	
							else{
								
								$("#annualcost").html(data.table)
								$( "#btneac" ).hide();
							}
							
								}if(data.response==0){
								$("#frmcalculator #"+data.field).val("");
										$("#frmcalculator #"+data.field).focus();
							  jQuery("#frmcalculator #"+data.field).validationEngine('validate');
							  
							}
							else if(data.response==2){
								//$("#registrationfrm #"+data.field).val("");
							  //jQuery("#registrationfrm #"+data.field).validationEngine('validate');
							  	$("#frmcalculator #"+data.field).focus();
							  jQuery("#frmcalculator #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}	
				

						        }
						    });	


	/* $.ajax({
						        type: "POST",
								dataType: "json",
						        data:{'form': $("#login_form").serialize()},
						        url: "<?php echo base_url()?>index.php/client/login",
						        success: function(data)
						        {   
								
						           if(data.response==0){
								$("#login_form #"+data.field).val("");
							  jQuery("#login_form #"+data.field).validationEngine('validate');
							}
							else{
							       alert(data.msg)
									//window.location.href="<?php echo base_url() ?>client/dashboard/";
							}

						        }
						    });
	
	*/
	
});





	
				
				
				
	
});