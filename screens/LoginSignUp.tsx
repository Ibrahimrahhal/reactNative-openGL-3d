import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Alert, TextInput } from 'react-native';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import {
    AmbientLight,
    BoxBufferGeometry,
    Fog,
    GridHelper,
    Mesh,
    MeshStandardMaterial,
    PerspectiveCamera,
    PointLight,
    Scene,
    SpotLight,
  } from 'three';
import * as THREE from "three";
import  {Renderer, TextureLoader}  from "expo-three"
const styles = StyleSheet.create({
safe:{
    flex:1,
    width:'100%',
},
container:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'#121212'
},
text:{
    color:'#ffffff',
    fontSize:30,
    textAlign:'center'
}

});
class LoginSignUp extends Component<any,any> {
    obj:any = null;
    state:any = {obj:{}};
    render() {
        return (
            <React.Fragment>

                 <View style={styles.container}>
                 <GLView
                 style={{ flex: 1 }}
                 onContextCreate={this.renderInit}
               />
               <View
               style={{ flex: 1 }}
               >
               <Text style={{color:'#fff'}}>{this.state.obj.x} x</Text>
               <TextInput 
               style={{ height: 40, borderColor: 'gray', color:'#fff', borderWidth: 1 }}
               onChangeText={x=>this.onChangeText(2,x)}
               value={this.state.obj.x}/>
               <Text style={{color:'#fff'}}>{this.state.obj.y} y</Text>
               <TextInput 
               style={{ height: 40, borderColor: 'gray', color:'#fff', borderWidth: 1 }}
               onChangeText={x=>this.onChangeText(1,x)}
               value={this.state.obj.y}/>
               </View>
                    </View>

                    <StatusBar hidden backgroundColor="#000"  barStyle={'light-content'}/>
            </React.Fragment>
        );
    }

    renderInit = async (gl: ExpoWebGLRenderingContext) => {
        const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
        const sceneColor = 0x6ad6f0;

        // Create a WebGLRenderer without a DOM element
        const renderer = new Renderer({ gl });
        renderer.setSize(width, height);
        renderer.setClearColor(sceneColor);

        const camera = new PerspectiveCamera(50, width / height, 0.01, 1000);
        camera.position.set(2, 5, 5);

        const scene = new Scene();
        scene.fog = new Fog(sceneColor, 1, 10000);

        const ambientLight = new AmbientLight(0x101010);
        scene.add(ambientLight);

        const pointLight = new PointLight(0xffffff, 2, 1000, 1);
        pointLight.position.set(0, 200, 200);
        scene.add(pointLight);

        const spotLight = new SpotLight(0xffffff, 0.5);
        spotLight.position.set(0, 500, 100);
        spotLight.lookAt(scene.position);
        scene.add(spotLight);

     //    const cube = new IconMesh();
         var obj = await getObject()
         // obj.children.forEach(x=>x.setHex)
         scene.add(obj );
         this.setState({obj:{x:obj.rotation.x, y:obj.rotation.y}})
         this.obj = obj
        //  this.obj = obj.rotateX(10)

        camera.lookAt(obj.position);

        function update() {
         //  obj.rotation.y += 0.05;
         //  obj.rotation.x = 45;
        }

        // Setup an animation loop
        const render = () => {
          let timeout = requestAnimationFrame(render);
          update();
          renderer.render(scene, camera);
          gl.endFrameEXP();
        };
        render();
      }

      onChangeText =(numb:number, text:string)=>{
          let num = parseInt(text);
          this.obj.rotation[numb ==1 ? 'x':'y'] = num;
          this.state.obj[numb ==1 ? 'x':'y'] = num;
          this.setState({...this.state})
      }
}

export default LoginSignUp;
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Asset } from 'expo-asset';

async function getObject():Promise<THREE.Group>{
    return new Promise(async (resolve, reject)=>{
    const asset = Asset.fromModule(require('./Porsche_911_GT2.obj'));
    await asset.downloadAsync();

    const loader = new OBJLoader();
    if(asset.localUri != null)
    loader.load(asset.localUri, group => {
    resolve(group);
    });
    })
}
class IconMesh extends Mesh {
    
    constructor(some:THREE.Group) {
   
      super(
        new BoxBufferGeometry(1.0, 1.0, 1.0),
        new MeshStandardMaterial({
        //   map: new TextureLoader().load(require('./assets/icon.png')),
          color: 0xff0000
        }),
      );
    }
  }