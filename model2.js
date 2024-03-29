
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Assignment task</title>
    <style>
	
	@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);



body {
	font-family: "Roboto", Arial, sans-serif;
	min-height: 100vh;
	background-color: white;
}


}

   table 
        {
            width: 100%;
        }
	th {
		border: solid 1px #050505;
		
         background-color: coral;
		 padding: 8px;
		}
  
           
           tr:nth-child(even) {background-color: #f2f2f2;}

		   tr:hover {background-color: #c1afa8;}

		table, td, tr 
        {
			
		   border: solid 1px gray;
           text-align: center;
        }
      
        
        
        input[type='text'],  
        {
            text-align: center;
            border: solid 1px blue;
            width: auto;
            padding: 2px 3px;
        }
		
		
h1 {
text-align: center;
  font-family: "Times New Roman", Times, serif;
  
  


	</style>
	

</head> 
<body>

      <h1> Information Table</h1> 
    <center><div id="Tablespace" style="width:900px;"></div></center>
	
</body>

<script>
    var detailInfo = new function () {
	console.log("Test");
        // Creating a json data for the required table.
        this.jsonData = [
            { ID: '1', Name: 'Manoj', Address: 'Guntur', Mobile: '7013968556' },
            { ID: '2', Name: 'Kumar', Address: 'Sattenapalli', Mobile: '1234567890' },
            { ID: '3', Name: 'Reddy', Address: 'Chennai', Mobile: '98745632123' }
        ]


       this.col = [];

        this.createTable = function () {

            // Naming the Headers of the table.
            for (var i = 0; i < this.jsonData.length; i++) {
		    for (var key in this.jsonData[0]) {
              if (this.col.indexOf(key) === -1) {
			this.col.push(key);
             
                    }
                }
            }
			
		
            // Generating the table.
            var table = document.createElement('table');
            table.setAttribute('id', 'infoTable');     // Seet table id.
			 
                var tr = table.insertRow(-1);               // Create a row (for header).
                for (var h = 0; h < this.col.length; h++) {
                // Add table header.
                var th = document.createElement('th');
				var btSort = document.createElement('button');
				
				btSort.innerText = 'Sort';
                btSort.setAttribute('value', 'Sort '+this.col[h]);
             
                btSort.setAttribute('onclick', 'detailInfo.Sort(this)'); 
				btSort.setAttribute('size', '4px 2px'); 
                th.innerHTML = this.col[h];
				th.appendChild(btSort);
				tr.appendChild(th);
            }
		
			
            // Add rows using JSON data.
            for (var i = 0; i < this.jsonData.length; i++) {

                tr = table.insertRow(-1);           // Create a new row.

                for (var j = 0; j < this.col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = this.jsonData[i][this.col[j]];
                }
			
				this.td = document.createElement('td');
                //tr.appendChild(this.td);
                var btDelete = document.createElement('input');
                btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
                btDelete.setAttribute('value', 'Delete');
               // btDelete.setAttribute('style', 'background-color:#ED5650;');
                btDelete.setAttribute('onclick', 'detailInfo.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btDelete);
				


                // Dynamically create and add elements to table cells with events.
				
				this.td = document.createElement('td');
				 // *** CANCEL OPTION.
                tr.appendChild(this.td);
                var lblCancel = document.createElement('label');
                lblCancel.innerHTML = '&#128473';
                lblCancel.setAttribute('onclick', 'detailInfo.Cancel(this)');
                lblCancel.setAttribute('style', 'display:none;');
                lblCancel.setAttribute('title', 'Cancel');
                lblCancel.setAttribute('id', 'lbl' + i);
                this.td.appendChild(lblCancel);
			
				
				

                // *** SAVE.
                tr.appendChild(this.td);
                var btSave = document.createElement('input');

                btSave.setAttribute('type', 'button');      // SET ATTRIBUTES.
                btSave.setAttribute('value', 'Save');
                btSave.setAttribute('id', 'Save' + i);
                btSave.setAttribute('style', 'display:none;');
                btSave.setAttribute('onclick', 'detailInfo.Save(this)');       // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btSave);

                // *** UPDATE.
				
                tr.appendChild(this.td);
                var btUpdate = document.createElement('input');

                btUpdate.setAttribute('type', 'button');    // SET ATTRIBUTES.
                btUpdate.setAttribute('value', 'Update');
                btUpdate.setAttribute('id', 'Edit' + i);
               // btUpdate.setAttribute('style', 'background-color:#44CCEB;');
                btUpdate.setAttribute('onclick', 'detailInfo.Update(this)');  
              
              
              // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btUpdate);

                // *** DELETE.
                this.td = document.createElement('td');
                tr.appendChild(this.td);
                var btDelete = document.createElement('input');
                btDelete.setAttribute('type', 'button');    // SET INPUT ATTRIBUTE.
                btDelete.setAttribute('value', 'Delete');
               // btDelete.setAttribute('style', 'background-color:#ED5650;');
                btDelete.setAttribute('onclick', 'detailInfo.Delete(this)');   // ADD THE BUTTON's 'onclick' EVENT.
                this.td.appendChild(btDelete);
             
				// **** Insert 
			
				var btNew = document.createElement('input');
				this.td = document.createElement('td');
                tr.appendChild(this.td);
				btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
				btNew.setAttribute('value', 'Insert');
				btNew.setAttribute('id', 'New' + i);
				//btNew.setAttribute('style', 'background-color:#207DD1;');
				btNew.setAttribute('onclick', 'detailInfo.Insert(this)');       // ADD THE BUTTON's 'onclick' EVENT.
				this.td.appendChild(btNew);
					
	
            }


            // ADD A ROW AT THE END WITH BLANK TEXTBOXES (FOR NEW ENTRY).

       /*   tr = table.insertRow(-1);           // CREATE THE LAST ROW.

            for (var j = 0; j < this.col.length; j++) {
                var newCell = tr.insertCell(-1);
                if (j >= 1) {

                    
                        var tBox = document.createElement('input');          // CREATE AND ADD A TEXTBOX.
                        tBox.setAttribute('type', 'text');
                        tBox.setAttribute('value', '');
                        newCell.appendChild(tBox);
                    }
            }

          this.td = document.createElement('td');
            tr.appendChild(this.td);

            var btNew = document.createElement('input');

            btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
            btNew.setAttribute('value', 'Create');
            btNew.setAttribute('id', 'New' + i);
            //btNew.setAttribute('style', 'background-color:#207DD1;');
            btNew.setAttribute('onclick', 'detailInfo.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            this.td.appendChild(btNew); 
*/
            var div = document.getElementById('Tablespace');
            div.innerHTML = '';
            div.appendChild(table);     // ADD THE TABLE TO THE WEB PAGE.
        };

        // ****** OPERATIONS START.
		
		
	

        // CANCEL.
        this.Cancel = function (oButton) {

            // HIDE THIS BUTTON. After selectiion
            oButton.setAttribute('style', 'display:none; float:none;');

            var activeRow = oButton.parentNode.parentNode.rowIndex;

            // HIDE THE SAVE BUTTON.
            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:none;');

            // SHOW THE UPDATE BUTTON AGAIN.
            var btUpdate = document.getElementById('Edit' + (activeRow - 1));
            btUpdate.setAttribute('style', 'display:block; margin:0 auto; background-color: yellowgreen;');

            var tab = document.getElementById('infoTable').rows[activeRow];

            for (i = 0; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                td.innerHTML = this.jsonData[(activeRow - 1)][this.col[i]];
            }
        }


        // EDIT DATA.
        this.Update = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('infoTable').rows[activeRow];

		for (i = 1; i < 4; i++) {
			var td = tab.getElementsByTagName("td")[i];
                    var ele = document.createElement('input');      // TEXTBOX.
                    ele.setAttribute('type', 'text');
                    ele.setAttribute('value', td.innerText);
                    td.innerText = '';
                    td.appendChild(ele);
                }
            


		
            var lblCancel = document.getElementById('lbl' + (activeRow - 1));
            lblCancel.setAttribute('style', 'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

            var btSave = document.getElementById('Save' + (activeRow - 1));
            btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

            // HIDE THIS BUTTON.
            oButton.setAttribute('style', 'display:none;');
        };


        // DELETE DATA.
        this.Delete = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            this.jsonData.splice((activeRow - 1), 1);    // DELETE THE ACTIVE ROW.
            this.createTable();                         // REFRESH THE TABLE.
        };
		
		
		
		//Sort function  
			 this.Sort = function (oButton) {
			 
			 detailInfo.jsonData.sort(function (a, b) {
			  
			   if(oButton.value == "Sort ID")
			   
			   	     return a.ID.localeCompare(b.ID);
					
			   else if(oButton.value == "Sort Name")
			   
		return a.Name.localeCompare(b.Name);
		   else if(oButton.value == "Sort Address")
			     return a.Address.localeCompare(b.Address);
			   else if(oButton.value == "Sort Mobile")
			      return a.Mobile.localeCompare(b.Mobile);
			   
  
});
detailInfo.createTable(detailInfo.jsonData);


			 };


        // SAVE DATA.
        this.Save = function (oButton) {
            var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('infoTable').rows[activeRow];

            // UPDATE jsonData ARRAY WITH VALUES.
            for (i = 1; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                 {  
                    this.jsonData[(activeRow - 1)][this.col[i]] = td.childNodes[0].value;      // SAVE THE VALUE.
                }
            }
            this.createTable();     // REFRESH THE TABLE.
        }

//INSERT
			this.Insert = function (oButton) {
			 
			 table = document.getElementById('infoTable');
			 //var index = $('#table tr').index(tr);
			 
			 var indexRow = event.target.parentElement.parentElement.rowIndex; 
			 console.log(indexRow);
			tr = table.insertRow(indexRow+1);  			// CREATE THE positon  ROW.
			//var index = $('#table tr').index(tr);

            for (var j = 0; j <= this.col.length; j++) {
                var newCell = tr.insertCell(-1);
                if (j >= 1 && j<this.col.length) {

                    
                        var tBox = document.createElement('input');          // CREATE AND ADD A TEXTBOX.
                        tBox.setAttribute('type', 'text');
                        tBox.setAttribute('value', '');
                        newCell.appendChild(tBox);
                    }
            }
			 var btNew = document.createElement('input');

            btNew.setAttribute('type', 'button');       // SET ATTRIBUTES.
            btNew.setAttribute('value', 'Create');
            btNew.setAttribute('id', 'New');
            //btNew.setAttribute('style', 'background-color:#207DD1;');
            btNew.setAttribute('onclick', 'detailInfo.CreateNew(this)');       // ADD THE BUTTON's 'onclick' EVENT.
            newCell.appendChild(btNew); 

          this.td = document.createElement('td');
            tr.appendChild(this.td);
        }
		
		
		

        // CREATE NEW.
        this.CreateNew = function (oButton) {
		 var indexRow = event.target.parentElement.parentElement.rowIndex; 
			 console.log(indexRow);
			tr = table.insertRow(indexRow);  	
           var activeRow = oButton.parentNode.parentNode.rowIndex;
            var tab = document.getElementById('infoTable').rows[activeRow];
			console.log(activeRow);
            var obj = {};

            // ADD NEW VALUE TO jsonData ARRAY.
            for (i = 1; i < this.col.length; i++) {
                var td = tab.getElementsByTagName("td")[i];
                 {      
                    var txtVal = td.childNodes[0].value;
                    if (txtVal != '') {
                        obj[this.col[i]] = txtVal.trim();
                    }
                    else {
                        obj = '';
                        alert('all fields are compulsory');
                        break;
                    }
                }
            }
            obj[this.col[0]] = this.jsonData.length + 1;     // NEW ID.

            if (Object.keys(obj).length > 0) {      // CHECK IF OBJECT IS NOT EMPTY.
                this.jsonData.push(obj);             // PUSH (ADD) DATA TO THE JSON ARRAY.
                this.createTable();                 // REFRESH THE TABLE.
            }
        }

        // ****** OPERATIONS END.
		
    }
    detailInfo.createTable();
</script>
</html>
