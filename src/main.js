import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as THREE from 'three';
import 'three-examples/controls/OrbitControls';

$(document).ready(function() {
  console.log("before append");
  var camera, scene, renderer, controls;
  var geometry, material, sphere, egg, embryo, torusKnot, ring;
  var loader = new THREE.JSONLoader();

  function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.01, 10 );
    camera.position.set(0, 3, 2);
    camera.lookAt(scene.position);
    controls = new THREE.OrbitControls( camera );
    controls.update();
    var light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
    var sunDirectional = new THREE.DirectionalLight( 0xfffed3, 1, 100, 2 );
    sunDirectional.position.set( 0, 1.2, 0 );
    scene.add( sunDirectional, light );
    var texture = new THREE.TextureLoader().load( "https://i.imgur.com/yIYkgvE.jpg?1" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 1, 3 );


    geometry = new THREE.SphereGeometry( 0.4, 0.4, 0.4 );
    material = new THREE.MeshPhongMaterial( { map: texture } );
    sphere = new THREE.Mesh( geometry, material );
    sphere.scale.set(1, 1.5, 1);
    scene.add( sphere );

    geometry = new THREE.SphereGeometry( 0.4, 0.4, 0.4 );
    material = new THREE.MeshPhongMaterial( { map: texture } );
    egg = new THREE.Mesh( geometry, material );
    egg.scale.set(1, 1.5, 1);
    egg.position.set(2, 1, 4);
    scene.add( egg );

    geometry = new THREE.SphereGeometry( 0.4, 0.4, 0.4 );
    material = new THREE.MeshPhongMaterial( { map: texture } );
    embryo = new THREE.Mesh( geometry, material );
    embryo.scale.set(1, 1.5, 1);
    embryo.position.set(-1, -1, -4);
    scene.add( embryo );

    geometry = new THREE.TorusKnotGeometry( 1, 0.3, 64, 8 , 2, 3 );
    material = new THREE.MeshBasicMaterial( { map: texture} );
    torusKnot = new THREE.Mesh( geometry, material );
    scene.add( torusKnot );

    geometry = new THREE.RingBufferGeometry( 2, 3, 32 );
    material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide } );
    ring = new THREE.Mesh( geometry, material );
    scene.add( ring );

    //
    // loader.load('/dino.json',
    //   function(geometry, materials) {
    //     var material = materials[0];
    //     var dinoObject = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
    //     scene.add(dinoObject);
    // dinoObject.rotation.x += 0.0;
    // dinoObject.rotation.y += 0.01;
      // }
      // function(xhr) {
      //   console.log((xhr.loaded / xhr.total * total) + '%loaded');
      // },
      // function(error) {
      //   console.log("an error happened");
      // }
    // );


    // var objectLoader = new THREE.ObjectLoader();
		// objectLoader.load("./dino.json", function ( dinoObject ) {
    //   dinoObject.scale.set(1, 1, 1);
    //   dinoObject.rotation.y = THREE.Math.degToRad(90);
    //   dinoObject.name = "dino";
    //   scene.add( dinoObject );
    //   // scene.add(dinoObject);
    //   // dino = scene.getObjectByName("dino");
    // }
    // loader.load("./dino.json", function (geometry, materials){
    //   dinoObject = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
      // Scale the size of the dino
    // });





    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  }

  function animate() {
    requestAnimationFrame( animate );

    embryo.rotation.x += 0.0;
    embryo.rotation.y += 0.01;
    sphere.rotation.x += 0.0;
    sphere.rotation.y += 0.01;
    egg.rotation.x += 0.0;
    egg.rotation.y += 0.01;
    torusKnot.rotation.x += 0.0;
    torusKnot.rotation.y += 0.01;
    ring.rotation.x += 0.03;
    ring.rotation.y += 0.05;
    controls.update();

    renderer.render(scene, camera);
  }

  init();
  // animate();
  animate();

});
