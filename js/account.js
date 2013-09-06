
/*Empty field validation*/			   
		   
	$.fn.emptyField=function(obj,msg)/* Receives the parameters */
	{
	if(obj.value!=="") 			/* check the condition */
	  {
		return true;
	  }
	else
	  {
		alert(msg); 			/*alert message to user */
		$('#' +obj.id).focus();	/* focus the same field */
		return false;
	  }
	}			
	
/* Start with alphabet validation */	
			
	$.fn.startWith=function(obj,msg) /* Receives the parameters */
	{
	var swreg=/^[a-zA-Z]{1}/;  /* Regular expression to start with alphabet*/
	var val=obj.value;
	if(val.match(swreg))			 /* check the condition */
		{
		return true;
		}
		else
		{
		alert(msg);				 /* alert message to user*/
		$('#' +obj.id).focus();	 /* focus the same field */
		return false;
		}
	}				   
		   
/* Minimum length validation */ 

	$.fn.minLen=function(obj,msg,min) /* Receives the parameters */
	{
		var len=obj.value.length;
		if(len>=min)				/* check the condition */
		 {
			return true;
		 }
		else
		 {
			alert(msg);			  /* alert message to user*/
			$('#' +obj.id).focus();/* focus the same field */
			return false;
		 }
	}	

/* Alphabet validation */
			
	$.fn.alphabet=function(obj,msg) /* Receives the parameters */
	{
		var areg =/^[a-zA-Z]+$/;/* Regular expression to accept alphabets*/
		var val=obj.value;
			
		if(val.match(areg))             /* check the condition */
			{
				return true;
			}
		else
			{
				alert(msg);				/* alert message to user*/
				$('#' +this.id).focus();/* focus the same field */
				return false;
			}
			
	}
		   
/* Alphanumeric validation */	
	   
	$.fn.alphaNumeric=function(obj,msg) /* Receives the parameters */
	{
	var anreg=/^[0-9a-zA-Z]+$/;/*Regular expression to accept alphanumerics*/
	var val=obj.value;
		if(val.match(anreg))         /* check the condition */
		{
			return true;
		}
		else
		{
			alert(msg);				/* alert message to user*/
			$('#' +obj.id).focus();	/* focus the same field */
			return false;
		}
	}
			
/* image type validation */		
	
    $.fn.fileType=function(obj,msg) /* Receives the parameters */
	{
	 var val=obj.value;
	 if(val.match(".jpg") || val.match(".gif") || val.match(".png"))              				/* check the condition */
	 {
		return true;
	 }
	 else
	 {
	    alert(msg);				/* alert message to user*/
		$(obj).val("");			/* empty the previous value*/
		$('#' +obj.id).focus(); /* focus the same field */
		return false;
	 }
	}
	
/* Phone number format validation */

	$.fn.phoneNum=function(obj,msg) /* Receives the parameters */
	{
	 var val=obj.value;
	 var preg=/^[+](\d{2})(\s)[(](\d{3})[)]-(\d{3})-(\d{4})$/;
							/* Regular expression to validate phone number*/
			
	 if(val.match(preg))          /* check the condition */
	 {
		return true;
	 }
	 else
	 {
		alert(msg);				/* alert message to user*/
		$('#' +this.id).focus();/* focus the same field */
		return false;
	 }
	}
			 
/* Email format validation */

	$.fn.emailFormat=function(obj,msg) /* Receives the parameters */
	{
	 var val=obj.value;
	 var ereg=/^[0-9a-zA-Z_.-]+@[a-zA-Z]+[.][a-zA-Z]{2,5}$/;
								/* Regular expression to validate email*/
	 
	 if(val.match(ereg))            /* check the condition */
	 {
		return true;
	 }
	 else
	 {
		alert(msg);					/* alert message to user*/
		$('#' +this.id).focus();	/* focus the same field */
		return false;
	 }
	}			 	

			 
/* Select box validation */	

   $.fn.mulSelvalid=function (obj,msg)   /* Receives the parameters */
	{
	if($(obj).prop("selectedIndex")==0)  /* check the condition */
	{
	alert(msg);							/* alert message to user*/
	$(obj).focus();						/* focus the same field */
	return false;
	}
	else
	{
	return true;
	}
}

/* Check box validation  */

	$.fn.mulCheckValid=function(obj,msg) /* Receives the parameters */
	{
	 if($('#myform').find('input[type=checkbox]:checked').length == 0)										  /* check the condition */ 
	 {
        alert(msg);            				/* alert message to user*/
        $(obj)[0].focus();  				/* focus the same field */    
        return false;
     }
     else
	 {
        return true;
     }
	}

/* Radio buttons validation */

	$.fn.radCheckValid=function(obj,msg) /* Receives the parameters */
	{
	 if($('#myform').find('input[type=radio]:checked').length == 0) 										/* check the condition */   
	 {
       alert(msg);            		/* alert message to user*/
       $(obj)[0].focus();      		/* focus the same field */
       return false;
     }
     else
	 {
        return true;
     }
	}
   
   
   
   
