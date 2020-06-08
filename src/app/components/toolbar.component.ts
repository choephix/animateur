import { Component, OnInit } from '@angular/core'
import { ExportorService } from '../services/exportor.service'
import { context, Events, MainService } from '../services/main.service'
import * as $ from 'jquery'

@Component({ selector: 'app-toolbar', templateUrl: './toolbar.component.html', })
export class ToolbarComponent implements OnInit 
{
  context = context

  buttons = []

  constructor( private exportor:ExportorService ) {}

  ngOnInit() {
    this.buttons = [
      { icon : "people", name : "Characters", viewMode : "characters" },
      { icon : "remove_red_eye", name : "Overview", viewMode : "overview" },
      { icon : "account_tree", name : "Nodes", viewMode : "nodes" }, 
      { icon : "accessibility", name : "Bones", viewMode : "bones" },
      { icon : "playlist_play", name : "Animations", viewMode : "animations" },
      { icon : "format_paint", name : "Materials", viewMode : "materials" },
      { icon : "camera", name : "Studio Rigs", viewMode : "studio" },
    ]

    /// @ts-ignore
    $.contextMenu( {
      selector: 'button.options-menu',
      trigger: "left",
      animation: {duration: 100, show: 'fadeIn', hide: 'fadeOut'},
      items: [
        // { name : "xxxx", icon: "eye", 
        //   callback : () => null } , 

        { name : "Download GLTF (text)", icon: "disk-a", 
          callback : () => this.exportor.saveZip( false, "download" ) } , 

        { name : "Download GLB (binary)", icon: "disk-b", 
          callback : () => this.exportor.saveZip( true, "download" ) } , 

        { name : "Save to browser's localStorage", icon: "disk-c", 
          callback : () => this.exportor.saveZip( true, "storage" ) } , 
          
        { name : "Clear Local Storage", icon : "clear", 
          callback : () => { localStorage.removeItem("zip") } } , 
  
        { name : "Upload to Firebase (wip)", icon: "fire", 
          callback : () => this.exportor.saveZip( true, "firebase" ) } , 
      ]
    } )
  }

  selectViewMode( viewMode ) {
    context.viewMode = context.viewMode !== viewMode ? viewMode : null
  }
}