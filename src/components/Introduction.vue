<template>
	<div class="mag_introduction">

		<h2>Introduction</h2>
		<div class="container">
		<div class="content_wrapper">
			<div id="intro" class="column">
				<h3>Kopen of verkopen?</h3>
		<p>De makelaars van ERA begeleiden u deskundig en resultaatgericht.
U vindt zeker een ERA-makelaar in uw buurt.</p>
			</div>
			<div class="column">
							<h3>DE ERA VISIE</h3>
			<p>ERA heeft een goede reputatie. Dat komt omdat we vastgoed serieus nemen en onze klanten serieus nemen. We hebben meer dan 40 jaar ervaring, een groot netwerk dat voor u werkt, en een unieke aanpak. We kunnen u doorheen het hele koop- of verkoopproces bijstaan met raad en daad. Lees meer over deze aanpak en onze diensten, en waarom ze voor u zo interessant zijn.</p>
			</div>
			</div>
		</div>
		
		<img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/ESC_large_ISS022_ISS022-E-11387-edit_01.JPG" alt="Introduction ERA">
	
	<img src="http://7-themes.com/data_images/out/16/6823205-large.jpg" alt="">
		<ul>
			<router-link :to="{name: 'hello'}" tag="li" exact v-on:click.native="close()">Start</router-link>
			<router-link :to="{name: 'hello'}" tag="li" exact v-on:click.native="close()">Page 1</router-link>
			<router-link :to="{name: 'contact'}" tag="li" exact v-on:click.native="close()">Contact</router-link>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
	.mag_introduction {
		background: #EFEFEF;
	}

	.mag_introduction #intro {
		background: #d60a26;
		color: #FFF;
		padding: 15px;
	}

	.mag_introduction #intro h3 {
		text-align: left;
		text-transform: uppercase;
		font-weight: bold;
	}
	.mag_introduction #intro p {
		text-align: left;
	}

	.content_wrapper {
		display: flex;
	}
</style>