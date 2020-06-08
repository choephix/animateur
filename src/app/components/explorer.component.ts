import { Component, OnInit, ViewChild } from '@angular/core'
import { NouisliderModule, NouisliderComponent } from 'ng2-nouislider'
import { context, Events, MainService } from '../services/main.service'
import { SceneService } from '../services/scener.service'
import * as THREE from "three"
import * as $ from 'jquery'
import 'jquery-contextmenu'

// import 'nouislider/distribute/nouislider.css'
import { TreeModel, NodeSelectedEvent, TreeComponent } from 'ng2-tree'

const VECTOR3_NaN = { x:NaN, y:NaN, z:NaN }

const boner = {
  subjects : [], 
  keepWorldMatrix : false, 
  addCurrentSubjectsTo( parentToBe ) {
    const add = subject =>
      this.keepWorldMatrix ? parentToBe.attach( subject ) : parentToBe.add( subject )
    this.subjects.forEach( subject => add( subject ) )
    context.data.dirty = true
    return this
  },
  openFor( ...subjects ) {
    this.subjects.length = 0
    this.subjects.push( ...subjects )
    return this
  },
}

function map_node( o:THREE.Object3D, depth=0 ) {
  return {
    id : o.uuid,
    value : o.name || o.uuid,
    children : o.children.map( child => map_node( child, ++depth ) )
  }
}

@Component({ selector: 'app-explorer', templateUrl: './explorer.component.html', })
export class ExplorerComponent implements OnInit 
{
  @ViewChild('tree__sceneNodes',{static:false}) elTree_sceneNodes

  context = context

  tree_sceneNodes:TreeModel = {
    value: 'character.model',
    settings: {
      static : true,
      isCollapsedOnInit : false,
    },
    loadChildren: function( callback ) {
      callback( context.character.model.children.map( o => map_node( o ) ) )
    },
    onNodeSelected( e:NodeSelectedEvent ) {
      const item = context.character.model.getObjectByProperty( "uuid", e.node.id as string )
      context.selection.type = "node"
      context.selection.last = item
      context.selection.dirty = true
      console.log( e ) 
    },
  }

  constructor( private main:MainService, private scener:SceneService ) { }

  ngOnInit() 
  {
    ///@ts-ignore
    window.ex = this

    // this.setup_keyboardEvents()
    this.setup_contextMenus()

    console.log( this.elTree_sceneNodes )
  }

  setup_contextMenus()
  {
    const animation = {duration: 0, show: 'show', hide: 'hide'}
    const util = {
      addChild( parent, name, userData={} )
      {
        let child = new THREE.Object3D()
        child.name = name
        child.userData = userData
        parent.add( child )
        context.data.dirty = true
      },
    }

    /// @ts-ignore
    $.contextMenu( {
      selector: '#subpanel-nodes .list-item',
      animation : animation,
      build: function( el, event )
      {
        const uuid = el.attr("uuid")
        const item = context.character.model.getObjectByProperty( "uuid", uuid )
        return {
          callback: action => console.log( action, uuid ),
          animation: {duration: undefined, show: 'show', hide: 'hide'},
          items: {
            addChild: {
              name: "Add empty child", icon: "add",
              callback: () => util.addChild( item, "o" )
            },
            addHolster: {
              name: "Add empty holster", icon: "add",
              callback: () => util.addChild( item, "holster-"+item.name, { isHolster : true } )
            },
            toggleHolster: { 
              name: item.userData.isHolster ? "Untag as holster" : "Tag as holster", icon: "paste",
              callback: () => item.userData.isHolster = item.userData.isHolster ? undefined : true
            },
            delete: {
              name: "Delete", icon: "delete",
              callback: () => {
                item.parent.remove( item )
                context.data.dirty = true
              }
            },
          }
        }
      }
    } )

    /// @ts-ignore
    $.contextMenu( {
      selector: '#subpanel-props .list-item',
      animation : animation,
      build: ( el, event ) =>
      {
        const uuid = el.attr("uuid")
        const targets:THREE.Object3D[] = [ context.character.model.getObjectByProperty("uuid",uuid) ]

        const makeItem = ( holster, i, keepWorldMatrix ) => {
          return [ "attachTo_" + i, {
            name: holster.name + ( keepWorldMatrix ? " (keep global matrix)" : '' ), 
            icon: "link",
            callback: () => {
              boner.keepWorldMatrix = keepWorldMatrix
              boner.openFor( ...targets ).addCurrentSubjectsTo( holster )
            }
          } ]
        }

        return {
          items: {
            toggleHidden: { 
              name: targets.length && targets[0].visible ? "Hide" : "Show", icon: "eye",
              visible: targets.length === 1,
              callback: () => context.character.setHidden( targets[0], targets[0].visible )
            },
            setHiddenTrue: { 
              name: "Hide", icon: "eye", 
              visible: targets.length > 1,
              callback: () => targets.forEach( o => context.character.setHidden( o, true ) )
            },
            setHiddenFalse: { 
              name: "Show", icon: "eye", 
              visible: targets.length > 1,
              callback: () => targets.forEach( o => context.character.setHidden( o, false ) )
            },
            sep1: "---------",
            attachLocal: {
              name: "Attach to", icon: "link",
              // items: context.character.findAllChildren( child => child.userData.isHolster )
              //        .mapToObject( ( holster, i ) => makeItem( holster, i, false ) ),
            },
            attachGlobal: {
              name: "Attach to (keep global matrix)", icon: "link",
              // items: context.character.findAllChildren( child => child.userData.isHolster )
              //        .mapToObject( ( holster, i ) => makeItem( holster, i, true ) ),
            },
            sep2: "---------",
            addChild: {
              name: "Add hotpoint (empty child)", icon: "add",
              // visible: targets.length === 1,
              callback: () => targets.forEach( target => util.addChild( target, "hot-point" ) )
            },
            clone: {
              name: "Clone", icon: "copy",
              callback: () => targets.forEach( o => context.character.props.duplicate( o ) )
            },
            delete: {
              name: "Delete", icon: "delete",
              callback: () => context.character.props.deleteAll( ...targets )
            },
          }
        }
      },
    } )
    
    /// @ts-ignore
    $.contextMenu( {
      selector: '#subpanel-anims .list-item',
      animation : animation,
      build: function( el, event )
      {
        const uuid = el.attr("uuid")
        const targets:THREE.AnimationClip[] = [ context.character.anims.getByUuid( uuid ) ]
        return {
          items: {
            clone: {
              name: "Clone", icon: "copy",
              callback: () => targets.forEach( clip => context.character.anims.duplicate( clip ) )
            },
            delete: {
              name: "Delete", icon: "delete",
              callback: () => context.character.anims.deleteAll( ...targets )
            },
          }
        }
      },
    } )
  }

  //// GENERAL
  
  get object() { 
    const fake = { name : '-', position : VECTOR3_NaN, rotation : VECTOR3_NaN, scale : VECTOR3_NaN }
    if ( ! context.selection.last ) return fake
    if ( context.selection.type === "anim" ) return fake
    if ( context.selection.type === "mat" ) return fake
    return context.selection.last as THREE.Object3D
  }

  select( target, selectionType:"node"|"prop"|"anim" ) {
    context.selection.all = [ target ]
    context.selection.last = target
    context.selection.type = selectionType
    context.selection.dirty = true
  }

  //// BONES

  get allBones():THREE.Bone[] { 
    return context.character.findAllChildren( o => o.type === "Bone" ) as THREE.Bone[]
  }

  //// MATERIALS

  materialSliders = {
    zeroToOne : { connect: [true,false], animate: false, behaviour: 'snap', },
  }
  get material():THREE.Material {
    return context.selection.type !== 'mat' ? null : context.selection.last as THREE.Material
  }

  get allMaterials():THREE.Material[] {
    let r = new Set() 
    /// @ts-ignore
    context.character.model.traverse( o => !o.material ? null : r.add( o.material ) )
    return Array.from( r ) as Array<THREE.Material>
  }
}