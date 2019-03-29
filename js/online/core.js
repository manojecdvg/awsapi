// JavaScript Document
var asInitVals = new Array();
			$(document).ready(function() {
$('iframe').height( $(window).height()-150 );
    	






	 function updateTips(id, t ,o) {
id.text( t ).addClass( "ui-state-highlight" );
//o.val(t)
o.addClass( "ui-state-error" );
o.focus()
setTimeout(function() {
id.removeClass( "ui-state-highlight", 1500 );
o.removeClass( "ui-state-error" );
o.val('')
}, 2000 );
}
			


		var setCookie = function (name, value) {
		
			var date = new Date(),
				expires = 'expires=';
				
			//	var date = new Date();
 var minutes = 60;
 //date.setTime(date.getTime() + (minutes * 60 * 1000));
			date.setTime(date.getTime() + (minutes * 60 * 1000));
			expires += date.toGMTString();
			document.cookie = name + '=' + value + '; ' + expires + '; path=/';
		}
		var getCookie = function (name) {
			var allCookies = document.cookie.split(';'),
				cookieCounter = 0,
				currentCookie = '';
			for (cookieCounter = 0; cookieCounter < allCookies.length; cookieCounter++) {
				currentCookie = allCookies[cookieCounter];
				while (currentCookie.charAt(0) === ' ') {
					currentCookie = currentCookie.substring(1, currentCookie.length);
				}
				if (currentCookie.indexOf(name + '=') === 0) {
					return currentCookie.substring(name.length + 1, currentCookie.length);
				}
			}
			return false;
		}


$('#frmhelp #preferofcontact').on('change', function() {
													 
  if( this.value=="Email" ){
  $('#rowemail').show()
  $('#rowphone1').hide()
  $('#rowphone2').hide()
  }
  else if(this.value=="Mobile"){
	  $('#rowemail').hide()
  $('#rowphone1').show()  
  $('#rowphone2').show() 
  }else{
	  $('#rowemail').hide()
  $('#rowphone1').hide()  
  $('#rowphone2').hide()     
  }
});   







		
		$('#statementType').on('change', function() {
		alert($('#statementType').val())
	 if( (this.value)=="3" ){
  $('#dvcif').show()
  $('#dvuhno').hide()
  }else{
	  $('#dvcif').hide()
  $('#dvuhno').show()  
  }
  /**/
			
			
			
			
  if( (this.value)=="2.1" ){
  $('#dvtax').show()
  $('#dvstatement').hide()
  }else{
	  $('#dvtax').hide()
  $('#dvstatement').show()  
  }
});
		$('#taxyear').on('change', function() {
  year=this.value
  var res = year.split("@"); 
  $( "#frmadd #stDate" ).val(res[0]);
$( "#frmadd #endDate" ).val(res[1]);
  
});
	
	
if($(window).width()<490)	{		
winW=$(window).width();
winH=$(window).height();
}
else{
winW=525;
winH=625;
}	
	
	$( "#dialog-form-help" ).dialog({
					autoOpen: false,
					position: ['top','top'],
					height: winH,
					width: winW,
					modal: true,
					zIndex: 1000 ,
					resizable: false,
					show: {
				  		effect: "scale",
				  		duration: 600
				  		},
				  hide: {
				  effect: "explode",
				  duration: 800
				  },
					dialogClass: 'dialoghelp',
					modal: true,
					buttons: [
						{
               text: "Submit",
               "class": 'submitButton',
               click: function(event) {
				   $.blockUI({ message: '<h2><img src="'+baseURL+'/img/ajax-loader_2.gif" /> Please Wait...</h2>' });  
							
							event.preventDefault();
							$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmhelp").serialize()},
						        url: baseURL+"index.php/estatement/help/"+branch,
						        success: function(data)
						        {   
						         
								  if(data.response==1){
										  // oTable.fnDraw();
							        	   $( "#dialog-form-help").dialog( "close" );
										   $( "#dialog-form-successhelp" ).dialog( "open" );
							        	   $( "#frmhelp")[0].reset();
							           }
									   else if(data.response==2){
								//$("#registrationfrm #"+data.field).val("");
							  //jQuery("#registrationfrm #"+data.field).validationEngine('validate');
							  $("#frmhelp #"+data.field).val("");
							  $("#frmhelp #"+data.field).focus();
							  jQuery("#frmhelp #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}else{
								
									  jQuery("#frmhelp").validationEngine('validate');
								
							}
								  
								  
								  
								  
								  
								  
								  
								  
								  
							        
							        	   	

						        }, error: function () {
									//$("#dialog-form-help .validateTips").html('Unable To Connect Server, Please Contact System Administrator') 

  }
						    });
						
				   
				   }
						},
							{
               text: "Cancel",
               "class": 'cancelButton',
               click: function() {
				   
							$( this ).dialog( "close" );
							$( "#frmhelp")[0].reset();
						//   jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						
				   
				   }
							}
					],
					close: function() {
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});
	
	
	
	$( "#dialog-form-successhelp" ).dialog({
					autoOpen: false,
					position: ['top','top'],
					width: 425,
					dialogClass: 'dialoggenerate',
					modal: true,
						show: {
				  		effect: "fold",
				  		duration: 1500
				  		},
				  hide: {
				  effect: "scale",
				  duration: 200
				  },
				  
						buttons: [
						
						{
						text: "Close",
               			"class": 'cancelButton',
						click: function() { 
                  $(this).dialog("close"); 
				   $( "#frmhelp")[0].reset();
				
				 // window.location.href = 'http://192.168.1.210:8002/default/';	
				// window.location.href = '<?php echo base_url()?>estatement';
               }
					
						}
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
	
	
	
	$( "#dialog-form-successreg" ).dialog({
					autoOpen: false,
				position: ['center','center'],
					width: 425,
					dialogClass: 'dialoggenerate',
					modal: true,
						show: {
				  		effect: "fold",
				  		duration: 1500
				  		},
				  hide: {
				  effect: "scale",
				  duration: 200
				  },
				  
						buttons: [
						
						{
						text: "Close",
               			"class": 'cancelButton',
						click: function() { 
                  $(this).dialog("close"); 
				   $( "#frmadd")[0].reset();
				 $( "#frmadd #dvstatement").show()
				  $( "#frmadd #dvtax").hide()
				 // window.location.href = 'http://192.168.1.210:8002/default/';	
				// window.location.href = '<?php echo base_url()?>estatement';
               }
					
						}
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
			//$(".ui-dialog-titlebar").hide();
		$( "#dialog-form-success" ).dialog({
					autoOpen: false,
				position: ['center','center'],
					width: 425,
					dialogClass: 'dialoggenerate',
					modal: true,
						show: {
				  		effect: "fold",
				  		duration: 1500
				  		},
				  hide: {
				  effect: "scale",
				  duration: 200
				  },
				  
						buttons: [
						
						{
						text: "Close",
               			"class": 'cancelButton',
						click: function() { 
                  $(this).dialog("close"); 
				   $( "#frmadd")[0].reset();
				 $( "#frmadd #dvstatement").show()
				  $( "#frmadd #dvtax").hide()
				 // window.location.href = 'http://192.168.1.210:8002/default/';	
				// window.location.href = '<?php echo base_url()?>estatement';
               }
					
						},
						{
						text: "New Statement",
               			"class": 'submitButton',
						click: function() { 
                 $(this).dialog("close"); 
				 $( "#frmadd")[0].reset();
				 $( "#frmhelp")[0].reset();
				 $( "#frmadd #dvstatement").show()
				  $( "#frmadd #dvtax").hide()
				  
	$("#dvsttypename1").hide();
									$("#identificationTypeNo").hide();	
									$("#dvsttypename").hide();
$("#dvsttypetext").hide();
				 $( "#frmadd #unitHolderNo" ).focus();
									$( "#frmadd #unitHolderNo" ).val('');
$( "#frmadd #stDate" ).val('');
$( "#frmadd #endDate" ).val('');

$( "#frmadd #stDate" ).val('');
$( "#frmadd #endDate" ).val('');
$( "#frmadd #unitHolderNo" ).val('');
$("#identificationType").val('-1')
$("#identificationTypeNo").val('')	


$( "#dialog-form-add" ).dialog( "open" ); 
               }
					
						}
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
		
if($(window).width()<975)	{		
winW=$(window).width()+20;
winH=$(window).height();
}
else{
winW=975;
winH=$(window).height();
}
			//$(".ui-dialog-titlebar").hide();
		$( "#dialog-form-faq" ).dialog({
					autoOpen: false,
					position: ['top','top'],
		resizable: false,
					width: winW,
					height:winH,
					dialogClass: 'dialogfaq',
					modal: true,
						show: {
				  		effect: "scale",
				  		duration: 800
				  		},
				  hide: {
				  effect: "scale",
				  duration: 800
				  },
				  
						buttons: [
						
						{
						text: "Close",
               			"class": 'cancelButton',
						click: function() { 
                  $(this).dialog("close"); 
				 // window.location.href = 'http://192.168.1.210:8002/default/';	
				// window.location.href = '<?php echo base_url()?>estatement';
               }
					
						}
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
	
		if($(window).width()<950)	{		
winW=$(window).width()-5;
winH=$(window).height();
}
else{
winW=950;
winH=$(window).height();
}
		
	
			//$(".ui-dialog-titlebar").hide();
		 //$( "#dialog-form-disclaimer").dialog( "open" ); 
		
				
		$( "#dialog-form-disclaimer" ).dialog({
					autoOpen: false,
					position: ['top','top'],
					resizable: false,
					width: winW,
					height:winH,
					dialogClass: 'dialogdisclaim',
					modal: true,
						show: {
				  		effect: "scale",
				  		duration: 800
				  		},
				  hide: {
				  effect: "scale",
				  duration: 800
				  },
				  create: function (e, ui) {
            var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane")
            $("<label class='accept'><input type='checkbox'/>&nbsp;&nbsp;I agree to the terms above</label>").prependTo(pane)
        },
				  
						buttons: [
						
						{
						text: "Submit",
						id:"subdisclaim",
               			"class": 'submitButton',
						click: function() { 
                  $(this).dialog("close"); 
					setCookie('oasisonline', 'b06514d8bc65875cc670a226aa945c492c126ef2da71f226c3ed938aacb27f30');
				 // window.location.href = 'http://192.168.1.210:8002/default/';	
				// window.location.href = '<?php echo base_url()?>estatement';
               }
					
						}
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
			
if(getCookie('oasisonline')==false){	
$('.accept').show()	
$('#dialog-form-disclaimer').dialog('widget').find('.ui-dialog-buttonpane .ui-button:first').hide();
}else{
	
$('#dialog-form-disclaimer').dialog('widget').find('.ui-dialog-buttonpane .ui-button:first').show();
$('.accept').hide()
	
}

$(document).on("change", ".accept input", function () {
	if(this.checked)
	$('#dialog-form-disclaimer').dialog('widget').find('.ui-dialog-buttonpane .ui-button:first').show();
	else
$('#dialog-form-disclaimer').dialog('widget').find('.ui-dialog-buttonpane .ui-button:first').hide();
})
		
		
		
		$(document).ajaxStop($.unblockUI);	
if($(window).width()<420)	{		
winW=$(window).width();
winH=$(window).height();
}
else{
winW=450;
winH=450;
}	
		
			$( "#dialog-form-register" ).dialog({
					autoOpen: false,
					position: ['top','top'],
					height: winH,
					width: winW,
					modal: true,
					zIndex: 1000 ,
					show: {
				  		effect: "scale",
				  		duration: 600
				  		},
				  hide: {
				  effect: "explode",
				  duration: 800
				  },
					dialogClass: 'dialogregister',
					modal: true,
					buttons: [
						{
               text: "Submit",
               "class": 'submitButton',
               click: function(event) {
				   $.blockUI({ message: '<h2><img src="'+baseURL+'/img/ajax-loader_2.gif" /> Please Wait...</h2>' });  
							
							event.preventDefault();
							$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmregister").serialize()},
						        url: baseURL+"index.php/estatement/register/"+branch,
						        success: function(data)
						        {   
						         
								  if(data.response==1){
										  // oTable.fnDraw();
							        	   $( "#dialog-form-register").dialog( "close" );
										   $( "#dialog-form-successreg" ).dialog( "open" );
							        	   
							           }
									   else if(data.response==2){
								//$("#registrationfrm #"+data.field).val("");
							  //jQuery("#registrationfrm #"+data.field).validationEngine('validate');
							  $("#frmregister #"+data.field).val("");
							  $("#frmregister #"+data.field).focus();
							  jQuery("#frmregister #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}else{
								
									  jQuery("#frmregister").validationEngine('validate');
								
							}
								  
								  
								  
								  
								  
								  
								  
								  
								  
							        
							        	   	

						        }, error: function () {
									$("#dialog-form-add .validateTips").html('Unable To Connect Server, Please Contact System Administrator') 

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
						//allFields.val( "" ).removeClass( "ui-state-error" );
					}
				});
			
			
			//$(".ui-dialog-titlebar").hide();
	
			
		if($(window).width()<420)	{		
winW=$(window).width();
winH=$(window).height();
}
else{
winW=425;
winH=400;
}
			$( "#dialog-form-error" ).dialog({
					autoOpen: false,		
					width: winW,
					position: ['top','top'],
					dialogClass: 'dialoggenerate',
					modal: true,
						resizable: false,
						show: {
				  		effect: "fold",
				  		duration: 800
				  		},
				  hide: {
						  effect: "explode",
				  duration: 800
				  },
				  
						buttons: [
						
						{
						text: "Cancel",
               			"class": 'cancelButton',
						click: function() { 
                  $(this).dialog("close"); 
		 $( "#frmadd")[0].reset();
				 $( "#frmadd #dvstatement").show();
				  $( "#frmadd #dvtax").hide();
               }
					
						},
			   {
						text: "Register",
               			"class": 'submitButton',
						click: function() { 
                  $(this).dialog("close"); 
				 $( "#frmregister")[0].reset();
				 $( "#dialog-form-register").dialog( "open" ); 
               }
			   }
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
		
			//$(".ui-dialog-titlebar").show();
			//$(".ui-dialog-titlebar").hide();
			
			if($(window).width()<400)	{		
winW=$(window).width();
winH=$(window).height();
}
else{
winW=450;
winH=160;
}		
			
			
			
			
			$( "#dialog-form-alert" ).dialog({
					autoOpen: false,
					height: winH,
					width: winW,
						resizable: false,
					dialogClass: 'dialoggenerate',
					modal: true,
						show: {
				  		effect: "fold",
				  		duration: 1500
				  		},
				  hide: {
						  effect: "explode",
				  duration: 800
				  },
				  
						buttons: [
						
						{
						text: "Cancel",
               			"class": 'cancelButton',
						click: function() { 
                  $(this).dialog("close"); 
				  
				  //window.location.href = 'http://192.168.1.210:8002/default/';
               }
					
						}
					],
				
					close: function() {
						//location.reload();
						//oTable.fnDraw();
					}
				});
		
		
		
		
		
		
		
		
$( "#frmadd")[0].reset()
$( "#frmhelp")[0].reset();
$( "#frmadd #stDate" ).val('');
$( "#frmadd #endDate" ).val('');
$( "#frmadd #unitHolderNo" ).val('');
$("#identificationType").val('-1')
$("#identificationTypeNo").val('')			














if($(window).width()<420)	{		
winW=$(window).width();
winH=$(window).height();
}
else{
winW=450;
winH=400;
}
			$(document).ajaxStop($.unblockUI);
			//$(".ui-dialog-titlebar").hide();
			
				$( "#dialog-form-add" ).dialog({
					autoOpen: false,
					height: winH,
					width: winW,
					position: ['top','top'],
					resizable: false,
					showCloseButton:true,
					modal: true,
					zIndex: 1000 ,
					show: {
				  		effect: "fold",
				  		duration: 800
				  		},
				  hide: {
				  effect: "fold",
				  duration: 800
				  },
				  
				  dialogClass: 'dialoggenerate',
				  buttons: [
						{
               text: "Submit",
               "class": 'submitButton',
               click: function(event) {
							$.blockUI({ message: '<h2><img src="'+baseURL+'/img/ajax-loader_2.gif" /> Please Wait...</h2>' });
							event.preventDefault();
							$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmadd").serialize()},
						        url: baseURL+"index.php/estatement/process",
						        success: function(data)
						        {   
						       
								    
								 if(data.response==1){
										  // oTable.fnDraw();
							        	   $( "#dialog-form-add").dialog( "close" );
										    //$( "#dialog-form-success #dvmess" ).html(data.msg)
										   $( "#dialog-form-error" ).dialog( "open" );
							        	   
							           }
									   else if(data.response==2){
							//	$("#dialog-confirm #"+data.field).val("");
							//  jQuery("#dialog-confirm #"+data.field).validationEngine('validate');
							
							jQuery("#frmadd #"+data.field).validationEngine('validate');
							 // $("#frmadd #"+data.field).val("");
							  $("#frmadd #"+data.field).focus();
							  jQuery("#frmadd #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}
									  else if(data.response==3){
										  
									$( "#dialog-confirm #emailid" ).val('')
									$( "#dialog-confirm #identificationTypeNo" ).val('')
									
									$( "#dialog-confirm #dvsttype" ).html(data.idtype)	  
									//$( "#dialog-confirm #dvsttypename" ).html(data.idtypename)
									
									$("#identificationType").change(function(){
										$("#dvsttypename").html('Confirm Your '+$(this).val())
									$("#dvsttypename1").html($(this).val())	
										$("#identificationTypeNo").hide();	
										$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmadd").serialize(),'identificationType':$( "#dialog-confirm #identificationType" ).val(),'identificationTypeNo':$( "#dialog-confirm #identificationTypeNo" ).val()},
						        url: baseURL+"index.php/estatement/getidtypeDet",
						        success: function(data)
						        {   
								if(data.response==1){
						       		$("#dvsttypename1").show();
									$("#identificationTypeNo").show();	
									$("#dvsttypename").show();
									$("#dvsttypetext").show();
									$("#dvsttypetext").html(data.idno);									 
									
								}
							   
								}
								
										})
										
												 
																				 })		
									
									
		if($(window).width()<420)	{		
winW=$(window).width();
winH=$(window).height();
}
else{
winW=450;
winH=400;
}								   $( "#dialog-confirm" ).dialog({
										   autoOpen: false,
										   position: ['top','top'],
resizable: false,
height:winH,
width: winW,
  dialogClass: 'dialoggenerate',
modal: true,
show: {
				  		effect: "scale",
				  		duration: 600
				  		},
				  hide: {
				  effect: "explode",
				  
				  duration: 600
				  },
				  
buttons: [
						{
               text: "Confirm",
               "class": 'submitButton',
               click: function(event) {
		$.blockUI({ message: '<h2><img src="'+baseURL+'/img/ajax-loader_2.gif" /> Please Wait...</h2>' });
							event.preventDefault();
$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmadd").serialize(), 'identificationType':$("#identificationType").val(), 'identificationTypeNo':$("#identificationTypeNo").val(),'emailid':$("#emailid").val()},
						        url: baseURL+"index.php/estatement/checkIdentificationNumber",
						        success: function(data)
						        { 
								
								
								 //$( "#dialog-confirm" ).dialog( "close" );
								 if(data.response==1){  // check is valid
										 
										   
										  $.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmadd").serialize()},
						        url: baseURL+"index.php/estatement/generate/email",
						        success: function(data)
						        { 
								
								
								 $( "#dialog-confirm" ).dialog( "close" );
								 if(data.response==1){
										  // oTable.fnDraw();
										
							        	   $( "#dialog-form-add").dialog( "close" );
										    $( "#dialog-form-success #dvmess" ).html(data.msg)
										   $( "#dialog-form-success" ).dialog( "open" );
							        	   
							           }
									   else{
										    
										    $( "#dialog-form-add").dialog( "close" );
									
										    $( "#dialog-form-success #dvmess" ).html(data.msg)
										   $( "#dialog-form-success" ).dialog( "open" );
										   
									   }
								}
								
	   })
										   
									   
							        	   
							           }
									   else if(data.response==2){
					//$("#dialog-confirm #"+data.field).val("");
					//	 jQuery("#dialog-confirm #emailid").validationEngine('validate');
					//	jQuery("#dialog-confirm #identificationTypeNo").validationEngine('validate');	
					//	jQuery("#dialog-confirm #identificationTypeNo").validationEngine('validate');
							//  $("#dialog-confirm #"+data.field).val("");
							$("#dialog-confirm #"+data.field).focus();
						///	jQuery("#dialog-confirm #emailid").validationEngine('showPrompt', data.msg, 'error', true)
						//	jQuery("#dialog-confirm #identificationTypeNo").validationEngine('showPrompt', data.msg, 'error', true)
						jQuery("#dialog-confirm #"+data.field).validationEngine('validate');
						jQuery("#dialog-confirm #"+data.field).validationEngine('showPrompt', data.msg, 'error', true)
							  
							}
									   else{
										   
										 jQuery("#frmconfirm").validationEngine('validate');
										    $( "#dialog-form-alert #dvmess" ).html(data.msg)
										o=$('#dialog-confirm #'+data.field+'')
										
										
										
									   	updateTips($("#dialog-confirm .validateTips"),data.msg,o)
											
											
											
										   //$( "#dialog-form-alert" ).dialog( "open" );
										   
										   
										   }
								}
								
	   })
}
						},
							{
               text: "Close",
               "class": 'cancelButton',
               click: function() {
$( this ).dialog( "close" );
$( "#frmadd")[0].reset()
$( "#dialog-form-add").dialog( "close" );

$( "#dialog-form-error" ).dialog( "open" );
}
							},{
               text: "Need Help?",
               "class": 'submitButton ui-button-left',
               click: function() {
				
		
				   $( "#dialog-form-help" ).dialog( "open" );
							//window.location.href = 'http://192.168.1.210:8002/default/';	
						//	window.location.href = '<?php echo base_url()?>estatement';
						  // jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						}
							}
					]
});
										$( "#dialog-confirm #dvconfirm" ).html(data.email) 
										$( "#dialog-confirm #dvidentification" ).html(data.IDENTIFICATIONNUMBERENR) 
										$( "#dialog-confirm" ).dialog( "open" );
										
									//	$(".ui-dialog-titlebar").hide();
									}
									else if(data.response==4){
										
										  
										   $( "#dialog-confirm" ).dialog({
										   autoOpen: false,
resizable: false,
height:200,
width: 280,
title:"Download?",
modal: true,
	show: {
				  		effect: "fold",
				  		duration: 1500
				  		},
				  hide: {
				  effect: "scale",
				  duration: 200
				  },
				  
buttons: {
"Confirm": function() {

$.ajax({
						        type: "POST",
								dataType:"json",
						        data:{'form': $("#frmadd").serialize(), 'other': extra_data},
						        url: baseURL+"index.php/estatement/generate/download/",
						        success: function(data)
						        { 
								
								 if(data.response==1){
										  // oTable.fnDraw();
										
							     $( "#dialog-confirm" ).dialog( "close" );
								 $( "#dialog-form-add").dialog( "close" );
								 $( "#dialog-form-success #dvmess" ).html(data.msg)
								 $( "#dialog-form-success" ).dialog( "open" );
							        	   
							           } 
							
									   else{
										   
										   	$( "#dialog-confirm" ).dialog( "close" );
											$( "#dialog-form-add").dialog( "close" );
										    $( "#dialog-form-success #dvmess" ).html(data.msg)
										   $( "#dialog-form-success" ).dialog( "open" );
										   
									   }
								}
								
	   })
},
'Cancel': function() {
$( this ).dialog( "close" );
$( "#dialog-form-add").dialog( "close" );

}
}
});
										$( "#dialog-confirm #dvconfirm" ).html(data.msg) 
										$( "#dialog-confirm #dvidentification" ).html(data.IDENTIFICATIONNUMBERENR) 
												
												
										
												
												
												
												
												
										$( "#dialog-confirm" ).dialog( "open" );
									
									}
							           else								      
							        	  {
											  jQuery("#frmadd").validationEngine('validate');
										//o=$('#dialog-form-add #'+data.field+'')
									   	//updateTips($("#dialog-form-add .validateTips"),data.msg,o)    
										//$( "#dialog-form-alert #dvmess" ).html(data.msg)
										 
										 //dummy
										// $(".ui-dialog-titlebar").hide();
										//$( "#dialog-form-error" ).dialog( "open" );	  
										  } 	

						        }, error: function () {
									$("#dialog-form-add .validateTips").html('Unable To contact Server, Please Contact Oasis regarding your statement') 

  }
						    });
						}
						},
							{
               text: "Cancel",
               "class": 'cancelButton',
               click: function() {
				   $( "#frmadd")[0].reset();
				    $( "#frmadd #dvstatement").show()
				  $( "#frmadd #dvtax").hide()
							$( this ).dialog( "close" );
							//window.location.href = 'http://192.168.1.210:8002/default/';	
						//	window.location.href = '<?php echo base_url()?>estatement';
						  // jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						}
							},{
               text: "Need Help?",
               "class": 'submitButton ui-button-left',
               click: function() {
				   $( "#dialog-form-help" ).dialog( "open" );
							//window.location.href = 'http://192.168.1.210:8002/default/';	
						//	window.location.href = '<?php echo base_url()?>estatement';
						  // jQuery(this).find(".ui-dialog-buttonset button:contains('Generate')").removeAttr("disabled").removeClass("ui-state-disabled").addClass('ui-state-default');
						}
							}
					]
					
				});

				/*
				 * Support functions to provide a little bit of 'user friendlyness' to the textboxes in 
				 * the footer
				 */
				$("tfoot input").each( function (i) {
					asInitVals[i] = this.value;
				} );
				
				$("tfoot input").focus( function () {
					if ( this.className == "search_init" )
					{
						this.className = "";
						this.value = "";
					}
				} );
				
				$("tfoot input").blur( function (i) {
					if ( this.value == "" )
					{
						this.className = "search_init";
						this.value = asInitVals[$("tfoot input").index(this)];
					}
				} );

		


		var showMessage = function () {
			$( "#dialog-form-disclaimer").dialog( "open" );
		}
		var hideMessage = function () {
		
			//$( "#dialog-form-disclaimer").dialog( "open" ); 
			setCookie('oasisonline', 'b06514d8bc65875cc670a226aa945c492c126ef2da71f226c3ed938aacb27f30');
		}

if (getCookie('oasisonline')) {
			hideMessage();
		} else {
			showMessage();
		}
	
		
		
		
		
				
			} );


			$(function() {








				$( "#create" )
					.button()
					.click(function() {
					
								$( "#frmadd")[0].reset();
									$( "#frmadd #unitHolderNo" ).focus();
									$( "#frmadd #unitHolderNo" ).val('');
$( "#frmadd #stDate" ).val('');
$( "#frmadd #endDate" ).val('');

	$("#dvsttypename1").hide();
									$("#identificationTypeNo").hide();	
									$("#dvsttypename").hide();
$("#dvsttypetext").hide();
					$( "#dialog-form-add" ).dialog( "open" );  
					
					//$( "#dialog-form-error" ).dialog( "open" );  
							//	$(".ui-dialog-titlebar").hide();
	
					});


	$( "#faq" )
				//	.button()
					.click(function() {
									
					$( "#dialog-form-faq" ).dialog( "open" );  
					
							//	$(".ui-dialog-titlebar").hide();
	
					});
					
	$( "#submit" )
					//.button()
					.click(function() {
									
					$( "#dialog-form-faq" ).dialog( "open" );  
					
							//	$(".ui-dialog-titlebar").hide();
	
					});					
					
					
	$( "#disclaimer" )
					//.button()
					.click(function() {
								
					$( "#dialog-form-disclaimer").dialog( "open" );  
				//	$( "#dialog-form-error").dialog( "open" ); 
							//	$(".ui-dialog-titlebar").hide();
	
					});		

});
			jQuery(document).ready(function(){
$( "#frmadd #stDate" ).datepicker({
defaultDate: "+1w",
numberOfMonths: 1,
dateFormat: 'yy-mm-dd',
changeMonth: true,
changeYear: true,
showButtonPanel: true,
maxDate: "+0D" , 
onClose: function(dateText, inst) {
var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
jQuery('#frmadd #stDate').validationEngine('hide');
$( "#endDate" ).datepicker( "option", "minDate", dateText );
$( "#statementType" ).focus();
}
});

$( "#frmadd #endDate" ).datepicker({
defaultDate: "+1w",
numberOfMonths: 1,
dateFormat: 'yy-mm-dd',
changeMonth: true,
changeYear: true,
showButtonPanel: true,
maxDate: "+0D" , 
onClose: function(dateText, inst) {
var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
jQuery('#frmadd #endDate').validationEngine('hide');
$( "#stDate" ).datepicker( "option", "maxDate", dateText );
$( "#statementType" ).focus();

}
});
  
//$( "#frmadd #stDate" ).datepicker( "option", "showAnim", "fold" );
//$( "#frmadd #endDate" ).datepicker( "option", "showAnim", "fold" );

			
		jQuery("#frmadd").validationEngine({autoHidePrompt:true});
jQuery("#frmconfirm").validationEngine({autoHidePrompt:true});
jQuery("#frmregister").validationEngine({autoHidePrompt:true});
jQuery("#frmhelp").validationEngine({autoHidePrompt:true});	








		
			  	
		});
	