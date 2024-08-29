export const htmlTemplate = `
        <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Health Certificate</title>
	<style>	
		body {
			font-family: Arial, sans-serif;
			background-color: #FFF;
		}
		.grid {
		display: flex;
		align-items: center; /* Align items vertically center */
		}
		.logo {
		width: 60px;
		margin-right: 10px; /* Space between image and heading */
		}

		.key_field {
		margin: 0; width: 200px;
		}
		.colon {
		margin-right: 10px;
		}
		.value_field {
		margin: 0;
		}
		.key_value {
		display: flex;
		}
		.under-license {
			width: 200px; 
			margin-right: 80px; 
			margin-left: auto;
			border: 0.5px solid #000; opacity: 0.5; 
		}
		.signer {
			margin-top: 10px; 
			margin-right: 100px;
		}
		.seperator-line {
			border: 0.5px solid #000; opacity: 0.5; margin: 20px 0;
		}
		
	</style>
</head>

	<body>
		<div class="grid">
			<!-- <img class="logo" src="https://seeklogo.com/images/M/mitrphol-logo-26F9A6C8DE-seeklogo.com.png"></img> -->
			<img class="logo" src="https://logowik.com/content/uploads/images/panda3013.logowik.com.webp"></img>
			<h2>HEALTH CERTIFICATE</h2>
			<h5 style="position: absolute; top: 0; right: 0; margin: 10px;">{{DOCUMENT_VERSION_TYPE}}</h5>
		</div>
		<div class="date">
			<h6>{{DOCUMENT_DATE}}</h6>
		</div>
	
		<div>
			<div class="key_value">
				<h5 class="key_field">CARRIER NAME</h5>
				<span class="colon">:</span>
				<small class="value_field">{{CARRIER_NAME}}</small>
			</div>
			<div class="key_value">
				<h5 class="key_field">PORT OF LOADING</h5>
				<span class="colon">:</span>
				<small class="value_field">{{PORT_OF_LOADING}}</small>
			</div>
			<div class="key_value">
				<h5 class="key_field">PORT OF DISCHARGE</h5>
				<span class="colon">:</span>
				<small class="value_field">{{PORT_OF_DISCHARGE}}</small>
			</div>
			<div class="key_value">
				<h5 class="key_field">DESTINATION</h5>
				<span class="colon">:</span>
				<small class="value_field">{{PORT_OF_DESTINATION}}</small>
			</div>
		</div>
		<hr class="seperator-line">
		<div>
			<div class="key_value">
				<h5 class="key_field">DESCRIPTION OF GOODS #1</h5>
				<span class="colon">:</span>
				<small class="value_field">{{DESCRIPTION_OF_GOODS}}</small>
			</div>
			<div class="key_value">
				<h5 class="key_field">PACKING</h5>
				<span class="colon">:</span>
				<small class="value_field">{{PACKING}}</small>
			</div>
		</div>
		
		<div style="margin-top: 40px;">
			<div class="key_value">
				<h5 class="key_field">TOTAL GROSS WEIGHT</h5>
				<span class="colon">:</span>
				<small class="value_field">{{TOTAL_GROSS_WEIGHT}}</small>
			</div>
			<div class="key_value">
				<h5 class="key_field">TOTAL NET WEIGHT</h5>
				<span class="colon">:</span>
				<small class="value_field">{{TOTAL_NET_WEIGHT}}</small>
			</div>
			<div class="key_value">
				<h5 class="key_field">TOTAL NUMBER OF BAG</h5>
				<span class="colon">:</span>
				<small class="value_field">{{TOTAL_NUMBER_OF_BAG}}</small>
			</div>
			<br />
			<div class="key_value">
				<h5 class="key_field">SHIPPING MARK</h5>
				<span class="colon">:</span>
				<small class="value_field">{{SHIPPING_MARK}}</small>
			</div>
		</div>
		<br />
		<small>{{REMARK}}</small>

		<br />
<br />
<br />
<div style="text-align: right;">
    <!-- <p style="margin-bottom: 50px;">Signature</p> -->
    <hr class="under-license">
    <small class="signer">BY MANUFACTURER</small>
</div>
	</body>
</html>
`