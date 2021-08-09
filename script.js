
const gif = ()=>{
	let dis = document.getElementById("containers");
	 if (dis.style.display === "none") {
    dis.style.display = "block";
	trending();
	} else {
    dis.style.display = "none";
	}
}

const trending = ()=>{
	let api_key = "YOUR API KEY";
	let url = "https://api.giphy.com/v1/gifs/trending?api_key=" + api_key;
	fetch(url)
	.then(response => response.json())
	.then(data => {
		let gif_pos = document.getElementById("gifitems");
		for(let i=0;i<data.data.length;i++){
			let img = document.createElement("img");
			
			img.setAttribute("src", data.data[i].images.fixed_height.url);
			img.setAttribute("onClick" , "thisclicked(this)");
			gif_pos.appendChild(img);
		}
	})
	
}

const search = ()=>{
	let query = document.getElementById("query").value;
	let clear = document.getElementById("gifitems");
	clear.innerHTML = "";
	let api_key = "YOUR API KEY";
	let url = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=${api_key}`;
	fetch(url)
	.then(response => response.json())
	.then(data => {
		let gif_pos = document.getElementById("gifitems");
		for(let i=0;i<data.data.length;i++){
			let img = document.createElement("img");
			
			img.setAttribute("src", data.data[i].images.fixed_height.url);
			img.setAttribute("onClick" , "thisclicked(this)");
			gif_pos.appendChild(img);
		}
	
	
})
}

const thisclicked = (path)=>{
	let statusgif = document.getElementById("text");
	let imgv = document.createElement("img");
	imgv.setAttribute("src", `${path.src}`);
	imgv.setAttribute("id", "gif");
	statusgif.appendChild(imgv);
	let dis = document.getElementById("containers");
	 dis.style.display = "none";
}

const post = ()=>{
	let statusc = document.getElementById("gif")
	console.log(statusc);
	if(statusc !== null){
		let imgsource = document.getElementById("gif");
		imgsource.id = "";
		let post = document.getElementById("status")
		let div = document.createElement("div");
		div.setAttribute("class", "postdiv");
		div.textContent = post.value;
		div.appendChild(imgsource);
		let ul = document.getElementById("list")
		ul.insertBefore(div,ul.childNodes[0]);
		post.value = "";
	}
	else{
		let post = document.getElementById("status")
		let div = document.createElement("div");
		div.setAttribute("class", "postdiv");
		div.textContent = post.value;
		let ul = document.getElementById("list")
		ul.insertBefore(div,ul.childNodes[0]);
		post.value = "";
		
	}
}
