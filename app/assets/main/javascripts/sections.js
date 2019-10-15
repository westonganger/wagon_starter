/*
// INSTEAD WE USE THE SIMPLE EVENTS BELOW
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

$(document).on('DOMContentLoaded turbolinks:load',  function(){
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  //sectionsManager.registerSection('bootstrap-business', Sections.BootstrapBusiness);

  sectionsManager.start();
});
*/

$(document)
  .on("locomotive::section::load", function(event){
    var sectionId = event.detail.sectionId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
  })

  .on("locomotive::section::unload", function(event){
    var sectionId = event.detail.sectionId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
  })

  .on("locomotive::section::select", function(event){
    var sectionId = event.detail.sectionId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
  })

  .on("locomotive::section::deselect", function(event){
    var sectionId = event.detail.sectionId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
  })

  .on("locomotive::section::reorder", function(event){
    var sectionId = event.detail.sectionId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
  })

  .on("locomotive::block::load", function(event){
    var sectionId = event.detail.sectionId;
    var blockId = event.detail.blockId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
    var block = section.find(`[data-locomotive-block='section-${sectionId}-block-${blockId}']`);
  })

  .on("locomotive::block::unload", function(event){
    var sectionId = event.detail.sectionId;
    var blockId = event.detail.blockId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
    var block = section.find(`[data-locomotive-block='section-${sectionId}-block-${blockId}']`);
  })

  .on("locomotive::block::select", function(event){
    var sectionId = event.detail.sectionId;
    var blockId = event.detail.blockId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
    var block = section.find(`[data-locomotive-block='section-${sectionId}-block-${blockId}']`);
  })

  .on("locomotive::block::deselect", function(event){
    var sectionId = event.detail.sectionId;
    var blockId = event.detail.blockId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
    var block = section.find(`[data-locomotive-block='section-${sectionId}-block-${blockId}']`);
  })

  .on("locomotive::block::reorder", function(event){
    var sectionId = event.detail.sectionId;
    var blockId = event.detail.blockId;
    var section = $("#locomotive-section-"+sectionId);
    var sectionType = section.prop('data-locomotive-section-type');
    var block = section.find(`[data-locomotive-block='section-${sectionId}-block-${blockId}']`);
  })
