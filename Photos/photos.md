<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" href="images/camera.ico">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=9">
	<title>Photos</title>
	<link rel="stylesheet" type="text/css" href="Photos.css">
	<script src="https://kit.fontawesome.com/b95714529c.js" crossorigin="anonymous"></script>
</head>
<body>
	<div class="blur block">
		<div class="photoBox small">
			<div class="photo visible">
				<div class="description"><p></p><span class="more invisible" onclick="showMore();"><i class="fas fa-arrow-circle-up"></i></span><div class="maindesc"></div></div>
				<div class="close" onClick="closePhoto();"><i class="fas fa-times-circle"></i></div>
				<div class="arrow left" onClick="imageClick(-1);"><i class="fas fa-arrow-circle-left"></i></div>
				<div class="arrow right" onClick="imageClick(1);"><i class="fas fa-arrow-circle-right"></i></div>
			</div>
		</div>
	</div>

	<nav>
		<ul>
			<li><a href="#" class="active">Home</a></li>
			<li><a href="#" class="section">Cooking</a></li>
		</ul>
	</nav>
	<section class="sec2 lanterns">
		<h2>Pure CSS sticky</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue vel feugiat cursus. Nunc porttitor, sem volutpat pretium semper, sapien est dictum sem, at volutpat odio velit vitae ipsum. Curabitur ac interdum sapien, ut malesuada eros. Maecenas consectetur ornare ligula ac scelerisque. Suspendisse libero massa, dignissim sed finibus sit amet, tincidunt eget nibh. Maecenas pharetra felis at molestie hendrerit. Quisque tempor urna ac auctor ullamcorper. Maecenas vitae nibh tristique, maximus ipsum ut, pretium tortor. Ut fermentum hendrerit ornare. Mauris vitae eros risus. Quisque neque elit, cursus et viverra nec, imperdiet in risus. Quisque sit amet vehicula velit, a tristique magna. Pellentesque sem magna, porta a fermentum vestibulum, venenatis rhoncus eros. Pellentesque odio justo, accumsan at diam at, viverra volutpat tellus. Fusce gravida dolor ut purus convallis egestas.

		Sed tristique, dui at tincidunt congue, nisi lectus semper lorem, id maximus nunc purus nec ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Aenean vitae mi est. Proin eget scelerisque tortor. Phasellus luctus odio id ipsum egestas, ac dictum eros vehicula. Mauris in gravida leo. Nulla iaculis nisi quis bibendum efficitur. Nunc iaculis varius ullamcorper. Nullam id feugiat nisi. Ut sed neque non erat convallis fermentum. Proin eget volutpat libero. Fusce vel ipsum at mi convallis eleifend ac non tellus. Maecenas nulla odio, vulputate sed lectus commodo, porta ultrices tellus. Morbi finibus purus libero.

		Nam efficitur orci mi, eu vehicula neque rhoncus a. Maecenas ex elit, ultrices nec purus luctus, interdum placerat ante. In porttitor, dolor eu accumsan tempor, urna lectus commodo leo, eu tempus erat nunc a sem. Nam et urna consectetur, luctus mi nec, luctus ex. Sed sollicitudin facilisis elit nec malesuada. Suspendisse potenti. Aenean molestie elit semper nisi tincidunt blandit. Cras ac euismod libero. Nullam lobortis eleifend consequat. Morbi ornare vulputate odio quis consectetur. Aliquam eget blandit lectus.

		Praesent ac malesuada nisi. Mauris non facilisis dui. Proin vestibulum ipsum purus, pellentesque feugiat massa tincidunt eget. Morbi eget fringilla dui, in mattis est. Praesent placerat dui nisl, ut semper enim bibendum sed. Ut vitae urna sed massa blandit sollicitudin. Duis quis blandit ipsum. Vestibulum viverra varius est quis aliquet. Morbi odio augue, lobortis vel nibh ac, volutpat euismod enim.

		Donec vestibulum tortor sem, at aliquet lacus volutpat non. Sed quis finibus massa. Donec pharetra pulvinar dolor, ac ultricies nisl vulputate quis. Nulla facilisi. Nulla rhoncus, neque vitae ultricies semper, urna quam consequat tortor, quis vehicula urna odio sed nunc. Sed ligula leo, ullamcorper ut tellus in, scelerisque suscipit velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis faucibus nulla in mollis. Phasellus malesuada fringilla iaculis. Curabitur ut fringilla lectus, ac ullamcorper ex. Suspendisse sit amet sodales tortor. Donec rutrum elit blandit commodo bibendum.</p>
	</section>
	<div class="content">
		<div class="image"><div class="photo"></div></div>
		<div class="image"><div class="photo"></div></div>
		<div class="image"><div class="photo"></div></div>
	</div>
	<nav>
		<ul>
			<li><a href="#" class="active">Home</a></li>
			<li><a href="#" class="section">Travel</a></li>

		</ul>
	</nav>
	<section class="sec2 heli">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue vel feugiat cursus. Nunc porttitor, sem volutpat pretium semper, sapien est dictum sem, at volutpat odio velit vitae ipsum. Curabitur ac interdum sapien, ut malesuada eros. Maecenas consectetur ornare ligula ac scelerisque. Suspendisse libero massa, dignissim sed finibus sit amet, tincidunt eget nibh. Maecenas pharetra felis at molestie hendrerit. Quisque tempor urna ac auctor ullamcorper. Maecenas vitae nibh tristique, maximus ipsum ut, pretium tortor. Ut fermentum hendrerit ornare. Mauris vitae eros risus. Quisque neque elit, cursus et viverra nec, imperdiet in risus. Quisque sit amet vehicula velit, a tristique magna. Pellentesque sem magna, porta a fermentum vestibulum, venenatis rhoncus eros. Pellentesque odio justo, accumsan at diam at, viverra volutpat tellus. Fusce gravida dolor ut purus convallis egestas.

		Sed tristique, dui at tincidunt congue, nisi lectus semper lorem, id maximus nunc purus nec ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Aenean vitae mi est. Proin eget scelerisque tortor. Phasellus luctus odio id ipsum egestas, ac dictum eros vehicula. Mauris in gravida leo. Nulla iaculis nisi quis bibendum efficitur. Nunc iaculis varius ullamcorper. Nullam id feugiat nisi. Ut sed neque non erat convallis fermentum. Proin eget volutpat libero. Fusce vel ipsum at mi convallis eleifend ac non tellus. Maecenas nulla odio, vulputate sed lectus commodo, porta ultrices tellus. Morbi finibus purus libero.

		Nam efficitur orci mi, eu vehicula neque rhoncus a. Maecenas ex elit, ultrices nec purus luctus, interdum placerat ante. In porttitor, dolor eu accumsan tempor, urna lectus commodo leo, eu tempus erat nunc a sem. Nam et urna consectetur, luctus mi nec, luctus ex. Sed sollicitudin facilisis elit nec malesuada. Suspendisse potenti. Aenean molestie elit semper nisi tincidunt blandit. Cras ac euismod libero. Nullam lobortis eleifend consequat. Morbi ornare vulputate odio quis consectetur. Aliquam eget blandit lectus.

		Praesent ac malesuada nisi. Mauris non facilisis dui. Proin vestibulum ipsum purus, pellentesque feugiat massa tincidunt eget. Morbi eget fringilla dui, in mattis est. Praesent placerat dui nisl, ut semper enim bibendum sed. Ut vitae urna sed massa blandit sollicitudin. Duis quis blandit ipsum. Vestibulum viverra varius est quis aliquet. Morbi odio augue, lobortis vel nibh ac, volutpat euismod enim.

		Donec vestibulum tortor sem, at aliquet lacus volutpat non. Sed quis finibus massa. Donec pharetra pulvinar dolor, ac ultricies nisl vulputate quis. Nulla facilisi. Nulla rhoncus, neque vitae ultricies semper, urna quam consequat tortor, quis vehicula urna odio sed nunc. Sed ligula leo, ullamcorper ut tellus in, scelerisque suscipit velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis faucibus nulla in mollis. Phasellus malesuada fringilla iaculis. Curabitur ut fringilla lectus, ac ullamcorper ex. Suspendisse sit amet sodales tortor. Donec rutrum elit blandit commodo bibendum.</p>
		
	</section>
	<div class="content">
		<div class="image"><div class="photo"></div></div>
		<div class="image"><div class="photo"></div></div>
		<div class="image"><div class="photo"></div></div>
	</div>
	<nav>
		<ul>
			<li><a href="#" class="active">Home</a></li>
			<li><a href="#" class="section">Music</a></li>
		</ul>
	</nav>	
	<section class="sec2 beach">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend augue vel feugiat cursus. Nunc porttitor, sem volutpat pretium semper, sapien est dictum sem, at volutpat odio velit vitae ipsum. Curabitur ac interdum sapien, ut malesuada eros. Maecenas consectetur ornare ligula ac scelerisque. Suspendisse libero massa, dignissim sed finibus sit amet, tincidunt eget nibh. Maecenas pharetra felis at molestie hendrerit. Quisque tempor urna ac auctor ullamcorper. Maecenas vitae nibh tristique, maximus ipsum ut, pretium tortor. Ut fermentum hendrerit ornare. Mauris vitae eros risus. Quisque neque elit, cursus et viverra nec, imperdiet in risus. Quisque sit amet vehicula velit, a tristique magna. Pellentesque sem magna, porta a fermentum vestibulum, venenatis rhoncus eros. Pellentesque odio justo, accumsan at diam at, viverra volutpat tellus. Fusce gravida dolor ut purus convallis egestas.

		Sed tristique, dui at tincidunt congue, nisi lectus semper lorem, id maximus nunc purus nec ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Aenean vitae mi est. Proin eget scelerisque tortor. Phasellus luctus odio id ipsum egestas, ac dictum eros vehicula. Mauris in gravida leo. Nulla iaculis nisi quis bibendum efficitur. Nunc iaculis varius ullamcorper. Nullam id feugiat nisi. Ut sed neque non erat convallis fermentum. Proin eget volutpat libero. Fusce vel ipsum at mi convallis eleifend ac non tellus. Maecenas nulla odio, vulputate sed lectus commodo, porta ultrices tellus. Morbi finibus purus libero.

		Nam efficitur orci mi, eu vehicula neque rhoncus a. Maecenas ex elit, ultrices nec purus luctus, interdum placerat ante. In porttitor, dolor eu accumsan tempor, urna lectus commodo leo, eu tempus erat nunc a sem. Nam et urna consectetur, luctus mi nec, luctus ex. Sed sollicitudin facilisis elit nec malesuada. Suspendisse potenti. Aenean molestie elit semper nisi tincidunt blandit. Cras ac euismod libero. Nullam lobortis eleifend consequat. Morbi ornare vulputate odio quis consectetur. Aliquam eget blandit lectus.

		Praesent ac malesuada nisi. Mauris non facilisis dui. Proin vestibulum ipsum purus, pellentesque feugiat massa tincidunt eget. Morbi eget fringilla dui, in mattis est. Praesent placerat dui nisl, ut semper enim bibendum sed. Ut vitae urna sed massa blandit sollicitudin. Duis quis blandit ipsum. Vestibulum viverra varius est quis aliquet. Morbi odio augue, lobortis vel nibh ac, volutpat euismod enim.

		Donec vestibulum tortor sem, at aliquet lacus volutpat non. Sed quis finibus massa. Donec pharetra pulvinar dolor, ac ultricies nisl vulputate quis. Nulla facilisi. Nulla rhoncus, neque vitae ultricies semper, urna quam consequat tortor, quis vehicula urna odio sed nunc. Sed ligula leo, ullamcorper ut tellus in, scelerisque suscipit velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed facilisis faucibus nulla in mollis. Phasellus malesuada fringilla iaculis. Curabitur ut fringilla lectus, ac ullamcorper ex. Suspendisse sit amet sodales tortor. Donec rutrum elit blandit commodo bibendum.</p>
		
	</section>
		
		
		<div class="content">
			<div class="image"><div class="photo"></div></div>
			<div class="image"><div class="photo"></div></div>
			<div class="image"><div class="photo"></div></div>
		</div>
	<script type="text/javascript">
		var theBlur 		= document.querySelector(".blur");
		var thePhotoBox 	= document.querySelector(".photoBox");
		var thePhotos 		= document.querySelectorAll(".image");
		var theDescription	= document.querySelector(".description");
		var theMainDesc		= document.querySelector(".maindesc");
		var theMainDesc		= document.querySelector(".maindesc");
		var theMore			= document.querySelector(".more");
		var theLeftArrow	= document.querySelector(".left");
		var theRightArrow	= document.querySelector(".right");

		var thePhotoList 	= ['Australia1.jpg', 'Australia2.jpg', 'Australia3.jpg', 'Bali1.jpg', 'Bali2.jpg', 'Bali3.jpg', 'Vietnam1.jpg', 'Vietnam2.jpg', 'Vietnam3.jpg']
		var theDescriptions = ['Beach-themed hotel pool (Mantra Towers, Gold Coast, Australia)|Located right in the heart of Surfers Paradise, you’ll find three towers which comprise Mantra Towers of Chevron. Situated right above the trendy Chevron Renaissance precinct, delicious dining, beautiful boutique shops and stretches of sandy beach are just a short stroll away. In your fully self-contained apartments, you’ll have the space to spread out and truly relax. With all the conveniences of home, Mantra Towers of Chevron is the ideal Surfers Paradise accommodation.', '"Typical" pets in a pet shop (Gold Coast, Australia)', 'Beautiful beach in Tweed Heads (Tweed Heads, Australia)|Tweed Heads is a town in New South Wales. It is located on the Tweed River in north-eastern New South Wales, Australia, in Tweed Shire. Tweed Heads is located next to the border with Queensland, adjacent to its "twin town" of Coolangatta, which is a suburb of the Gold Coast. It is often referred to as a town where people can change time zones – even celebrate New Year twice within an hour – simply by crossing the street, due to its proximity to the Queensland border, and the fact that New South Wales observes daylight saving whereas Queensland does not.', 'Mount Batur (Bali, Indonesia)|Mount Batur (Gunung Batur) is an active volcano located at the center of two concentric calderas north west of Mount Agung on the island of Bali, Indonesia. The south east side of the larger 10×13 km caldera contains a caldera lake. The inner 7.5-kilometer-wide caldera, which was formed during emplacement of the Bali (or Ubud) ignimbrite, has been dated at about 23,670 and 28,500 years ago.\n\n The first documented eruption was in 1804 and the most recent was in 2000.', 'Tegalalang Rice Fields (Bali, Indonesia)|Without a doubt, the Tegalalang Rice Terrace are one of the most beautiful places to visit in Bali.\n\n  It has become a destination for travelers making their way between Bali’s sandy beaches, towering mountains, and steaming volcanoes.\n\n A truly awe-inspiring sight, the beautiful green rice paddies stretch on for what seems like an eternity. \n\n The stunning Tegalalang Rice Terrace, part of the Cultural Landscape of Bali Province UNESCO World Heritage Site, comprises cascading emerald-green fields worked by local rice farmers. \n\n The scenes of rice paddies involving the subak (traditional Balinese cooperative irrigation system), which according to history, was passed down by a revered holy man named Rsi Markandeya in the eighth century. \n\n Source: https://balicheapesttours.com/tegalalang-rice-terrace.html', 'Hot balloon at Sunrise (Campuhan Ridge Walk, Ubud, Indonesia)|The Campuhan Ridge Walk is arguably the best known Ubud trek and with good reason. The sparse crowds and the aesthetically rich vistas remind one of why people from around the world come to Bali. The trail starts at the historical origin of Ubud, the confluence (or Campuhan) of the Wos Rivers.', 'War era Bell UH-1 "Huey"  (Cu Chi Tunnels, Vietnam)|The tunnels of Củ Chi are an immense network of connecting tunnels located in the Củ Chi District of Ho Chi Minh City (Saigon), Vietnam, and are part of a much larger network of tunnels that underlie much of the country. The Củ Chi tunnels were the location of several military campaigns during the Vietnam War, and were the Viet Cong\'s base of operations for the Tết Offensive in 1968.  \n\n The tunnels were used by Viet Cong soldiers as hiding spots during combat, as well as serving as communication and supply routes, hospitals, food and weapon caches and living quarters for numerous North Vietnamese fighters. The tunnel systems were of great importance to the Viet Cong in their resistance to American forces, and helped to counter the growing American military effort. \n\n Vietnam War \n\n The Vietnam War (Vietnamese: Chiến tranh Việt Nam), also known as the Second Indochina War, and in Vietnam as the Resistance War Against America (Vietnamese: Kháng chiến chống Mỹ) or simply the American War, was a conflict in Vietnam, Laos, and Cambodia from 1 November 1955 to the fall of Saigon on 30 April 1975. It was the second of the Indochina Wars and was officially fought between North Vietnam and South Vietnam. North Vietnam was supported by the Soviet Union, China, and other communist allies; South Vietnam was supported by the United States, South Korea, the Philippines, Australia, Thailand, and other anti-communist allies. The war, considered a Cold War-era proxy war by some, lasted 19 years, with direct U.S. involvement ending in 1973, and included the Laotian Civil War and the Cambodian Civil War, which ended with all three countries becoming communist in 1975.', 'Vietnamese lanterns (Vietnam)', 'Ponagar Tower (Nha Trang, Vietnam)|Po Nagar is a Cham temple tower founded sometime before 781 C.E. and located in the medieval principality of Kauthara, near modern Nha Trang in Vietnam. It is dedicated to Yan Po Nagar, the goddess of the country, who came to be identified with the Hindu goddesses Bhagavati and Mahishasuramardini, and who in Vietnamese is called Thiên Y Thánh Mẫu. The Po Nagar complex is situated on Cù Lao Mountain. It consists of three levels, the highest of which encompasses two rows of towers. The main tower is about 25 m high. \n\n Durga, the slayer of the buffalo-demon, is represented on the pediment above the entrance to the temple. \n\n The temple\'s central image is a 1.2m tall stone statue of the goddess Yan Po Nagar sitting cross-legged, dressed only in a skirt, with ten hands holding various symbolic items. According to Vietnamese scholar Ngô Vǎn Doanh, these attributes show that Yan Po Nagar was identified also with the Hindu goddess Mahishasuramardini or Durga, the slayer of the buffalo-demon. Another sculpture of the goddess Mahishasuramardini may be found in the pediment above the entrance to the temple: it depicts the four-armed goddess holding a hatchet, a lotus and a club, and standing on a buffalo. This sculpture belongs to the Tra Kieu style of Cham art from the end of the 10th century or the beginning of the 11th century.']
		var theNumArray = [0,1,2,3,4,5,6,7,8];
		theNumArray = shuffle(theNumArray);

		var theImageNum = 0;


		for (var i=0; i < thePhotos.length; i++){
			var theAngle 	= Math.random() * 20;
			var theDegree 	= Math.random() * 5;
			var theIndex 	= Math.random() * 2;
			var theTop 		= Math.random() * 20;
			var theLeft 	= Math.random() * 50;
			theDegree 		= (theAngle > 10) ? "-" + theDegree : theDegree;

			var theTransform = "rotate(" +theDegree + "deg)  translate(" + theLeft + "px, -" + Math.floor(theTop) + "px)";
			thePhotos[i].childNodes[0].style.background 	= "url('/images/" + thePhotoList[theNumArray[i]] + "')";
			thePhotos[i].childNodes[0].style.backgroundSize = "cover";
			thePhotos[i].style.transform 					= theTransform;
			thePhotos[i].style.zIndex 						= Math.floor(theIndex);
			thePhotos[i].setAttribute("photoID", i)
			console.log(thePhotos[i].getAttribute('listener'))
			thePhotos[i].addEventListener("click", function(e){showPhoto(this.attributes['photoID'].value, e.clientX, e.clientY)})
			
		}

		function showPhoto(x, mx, my){
			console.log("Mouse X", mx);
			theBlur.classList.remove("block");
			thePhotoBox.childNodes[1].classList.remove("visible");
			thePhotoBox.childNodes[1].style.background = "url('images/" + thePhotoList[theNumArray[x]] + "')";
			thePhotoBox.childNodes[1].style.backgroundSize = "cover";
			thePhotoBox.classList.remove("small");
			thePhotoBox.classList.add("full");

			//get the descriptions
			var theDescs = theDescriptions[theNumArray[x]].split("|");
			thePhotoBox.childNodes[1].childNodes[1].childNodes[0].innerText = theDescs[0];

			//set main description if it exists
			if (theDescs.length==2){
				theMore.classList.remove("invisible");
			}
			else if (theDescs.length==1){
				theDescs.push("");
				resetDescription();

			}

			theMainDesc.innerText = theDescs[1];
			console.log(thePhotoBox.childNodes[1].classList[1]);
			theImageNum = parseInt(x) //findImage(thePhotoBox.childNodes[1].classList[1]);

		}

		function resetDescription(){
			theMore.classList.add("invisible");
			theDescription.classList.remove("showmore");
			theDescription.classList.add("showless");
			theMore.classList.remove("rotate");
		}

		function imageClick(x){
			//x is 1 or -1
			theImageNum = progressImage(x);
			showPhoto(theImageNum);
		}

		document.onkeydown = function(){
			switch (event.keyCode){
			case (27): //escape key to close the light box / description
				if (theDescription.classList.contains("showmore")){
					theDescription.classList.remove("showmore");
					theDescription.classList.add("showless");
					theMore.classList.remove("rotate");
				}
				else{
					closePhoto();
				}
								
				break;

			case (37): case (39): //arrows to cycle through the photos
				var theDirection = (event.keyCode==37) ? -1 : 1 ;
				if (event.keyCode==37){
					theLeftArrow.classList.add("keyPress");
				}
				else{
					theRightArrow.classList.add("keyPress");
				}
				theImageNum = progressImage(theDirection);
				showPhoto(theImageNum);
				setTimeout(function(){
					theLeftArrow.classList.remove("keyPress");
					theRightArrow.classList.remove("keyPress");
				}, 1000)
				break;
			case (38): //up arrow
				if (!theMore.classList.contains("invisible")){
					theDescription.classList.remove("showless");
					theDescription.classList.add("showmore");
					theMore.classList.add("rotate");
				}
					event.preventDefault();
					event.preventPropagation();

				break;
			case (40): //up arrow
				if (theDescription.classList.contains("showmore")){
					theDescription.classList.add("showless");
					theDescription.classList.remove("showmore");
					theMore.classList.remove("rotate");
					event.preventDefault();
					event.preventPropagation();
				}
				break;	
			default:
				//event.preventDefault();
				//event.preventPropagation();
				//return false;
				break;
			}
		}

		function closePhoto(e){
			thePhotoBox.classList.add("small");
			thePhotoBox.classList.remove("full");
			setTimeout(function(){theBlur.classList.add("block")}, 250);
		}

		function progressImage(x){
			theImageNum += x;
			if (theImageNum < 0) {theImageNum = thePhotos.length-1}

			else
				if (theImageNum == thePhotos.length) {theImageNum = 0}

			return theImageNum

		}

		function shuffle(array) {
		  var m = array.length, t, i;

		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
		  }

		  return array;
		}

		function showMore(){
			if (theDescription.classList.contains("showmore")){
				theDescription.classList.remove("showmore");
				theDescription.classList.add("showless");
				theMore.classList.remove("rotate");
			}
			else{
				theDescription.classList.add("showmore");
				theDescription.classList.remove("showless");
				theMore.classList.add("rotate");
			}

		}
		
	</script>
</body>
</html>
