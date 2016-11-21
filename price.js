function price(){
			var people=parseInt(prompt("How many people?"));
			var treatment=prompt("What treatment?");
			if(treatment=="Authentic" || treatment=="authentic"){
				if(people==1){
					alert("50 Euro");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("80 Euro");
					}
					else{
						alert("100 Euro");
					}
				}
				else{
					alert("Sorry we only have two therapists available for customers.");
				}
				
			}
			else if(treatment=="Hotoil" || treatment=="hotoil"){
				if(people==1){
					alert("50 Euro");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("80 Euro");
					}
					else{
						alert("100 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else if(treatment=="Healing" || treatment=="healing"){
				if(people==1){
					alert("60 Euro");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("100 Euro");
					}
					else{
						alert("120 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
				
			}
			else if(treatment=="Herbal" || treatment=="herbal"){
				if(people==1){
					alert("60 Euro");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("100 Euro");
					}
					else{
						alert("120 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
				
			}
			else if(treatment=="Sport" || treatment=="sport"){
				if(people==1){
					alert("60 Euro");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("100 Euro");
					}
					else{
						alert("120 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}	
			else if(treatment=="Back" || treatment=="back"){
				if(people==1){
					alert("30 Euro/30 Minutes");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("40 Euro");
					}
					else{
						alert("60 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else if(treatment=="Neck" || treatment=="neck"){
				if(people==1){
					alert("30 Euro/30 Minutes");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("40 Euro");
					}
					else{
						alert("60 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else if(treatment=="Head" || treatment=="head"){
				if(people==1){
					alert("30 Euro/30 Minutes");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("40 Euro");
					}
					else{
						alert("60 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else if(treatment=="Shoulder" || treatment=="shoulder"){
				if(people==1){
					alert("30 Euro/30 Minutes");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("40 Euro");
					}
					else{
						alert("60 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else if(treatment=="Reflexology" || treatment=="reflexology"){
				if(people==1){
					alert("45 Euro/45 Minutes");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("70 Euro");
					}
					else{
						alert("90 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else if(treatment=="Natal" || treatment=="natal"){
				if(people==1){
					alert("50 Euro");
				}
				else if(people==2){
					var id=confirm("Are you a couple or friends?");
					if(id==true){
						alert("80 Euro");
					}
					else{
						alert("100 Euro");
					}
				}
				else{
					alert("Sorry! we only have two therapists available for customers.");
				}
			}
			else{
				alert("Please try again.")
			}

}