Blockly.Blocks['text_log'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("log");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['controls_sleep'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField("sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['device_tap'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tap");
    this.appendValueInput("X")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x");
    this.appendValueInput("Y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y");
    this.appendDummyInput();
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['text_toast'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("toast");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['device_key'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Press the ")
        .appendField(new Blockly.FieldDropdown([["home","3"], ["back","4"], ["camera","27"], ["app switch","187"], ["menu","82"], ["power","26"], ["settings","176"], ["volume down","25"], ["volume mute","164"], ["volume up","24"], ["screenshot","120"]]), "NAME")
        .appendField("button");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};